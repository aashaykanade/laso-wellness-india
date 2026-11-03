import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";
import { createOpenAI } from "npm:@ai-sdk/openai@3";
import { streamText, Output } from "npm:ai@6";
import { z } from "npm:zod@3";

const GATEWAY_URL = "https://ai.gateway.lovable.dev/v1";
const MODEL = "openai/gpt-6-astra";
const RUN_ID_HEADER = "X-Lovable-AIG-Run-ID";

const BodySchema = z.object({
  content: z.string().trim().min(50, "Page content must be at least 50 characters").max(20000),
  phrase: z.string().trim().min(2).max(120),
  pageType: z.string().trim().max(80).nullable().optional(),
});

const SuggestionSchema = z.object({
  titles: z.array(z.object({ text: z.string(), reason: z.string() })),
  descriptions: z.array(z.object({ text: z.string(), reason: z.string() })),
  h1: z.array(z.string()),
  subheadings: z.array(z.string()),
  tips: z.array(z.string()),
});

const json = (body: unknown, status = 200, extra: HeadersInit = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json", ...extra },
  });

const INSTRUCTIONS = `You are an SEO copywriter for Laso Wellness, an appointment-only energy healing and holistic wellness clinic in Pune led by Dr. Yashwant Kanade.
Suggest search-friendly page metadata and headings based on the page content and target search phrase.
Rules:
- 5 SEO titles, each 50-60 characters, include the target phrase naturally, end with "| Laso Wellness" when it fits.
- 5 meta descriptions, each 140-160 characters, with a gentle call to book an appointment (by phone or WhatsApp; never "book online").
- 3 H1 options and 6 H2 subheadings that fit the content.
- 3 short practical tips for improving the page for this phrase.
- Never mention allopathy, surgery, medicines, "drug-free" or comparisons with conventional medicine. Never use the word "naturopathy".
- Do not invent facts that are not in the content. Write in English.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  // Verify signed-in admin
  const authHeader = req.headers.get("Authorization") ?? "";
  const token = authHeader.replace(/^Bearer\s+/i, "");
  if (!token) return json({ error: "Please sign in." }, 401);
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: `Bearer ${token}` } },
  });
  const { data: userData, error: userErr } = await supabase.auth.getUser(token);
  if (userErr || !userData.user) return json({ error: "Please sign in." }, 401);
  const { data: isAdmin, error: roleErr } = await supabase.rpc("has_role", {
    _user_id: userData.user.id,
    _role: "admin",
  });
  if (roleErr || !isAdmin) return json({ error: "Only site admins can use this tool." }, 403);

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }
  const parsed = BodySchema.safeParse(raw);
  if (!parsed.success) return json({ error: parsed.error.issues[0]?.message ?? "Invalid input" }, 400);
  const { content, phrase, pageType } = parsed.data;

  const apiKey = Deno.env.get("LOVABLE_API_KEY");
  if (!apiKey) return json({ error: "AI is not configured." }, 500);

  let runId: string | undefined;
  let upstreamStatus: number | undefined;
  let upstreamBody: string | undefined;
  const provider = createOpenAI({
    baseURL: GATEWAY_URL,
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: async (input, init) => {
      const headers = new Headers(init?.headers);
      if (runId) headers.set(RUN_ID_HEADER, runId);
      const res = await fetch(input, { ...init, headers });
      runId ??= res.headers.get(RUN_ID_HEADER) ?? undefined;
      if (!res.ok) {
        upstreamStatus = res.status;
        upstreamBody = await res.clone().text();
      }
      return res;
    },
  });

  try {
    const result = streamText({
      model: provider.responses(MODEL),
      system: INSTRUCTIONS,
      prompt: `Target search phrase: ${phrase}\n${pageType ? `Page type: ${pageType}\n` : ""}\nPage content:\n${content}`,
      output: Output.object({ schema: SuggestionSchema }),
      abortSignal: req.signal,
      providerOptions: {
        openai: { store: false, forceReasoning: true, reasoningEffort: "low" },
      },
    });
    const output = await result.output;
    const extra: Record<string, string> = runId ? { [RUN_ID_HEADER]: runId, "Access-Control-Expose-Headers": RUN_ID_HEADER } : {};
    return json({ suggestions: output }, 200, extra);
  } catch (err) {
    console.error("seo-suggest failed", upstreamStatus, upstreamBody, err);
    if (req.signal.aborted) return json({ error: "Cancelled" }, 499);
    const status = upstreamStatus ?? 500;
    let message = "Could not generate suggestions. Please try again.";
    if (status === 429) message = "Too many requests right now. Please wait a minute and try again.";
    else if (status === 402) message = "AI credits have run out. Please add credits in workspace billing.";
    else if (status === 403) message = "AI use is blocked for this workspace. A workspace admin needs to check the AI settings.";
    try {
      const m = JSON.parse(upstreamBody ?? "{}")?.message ?? JSON.parse(upstreamBody ?? "{}")?.error?.message;
      if (m && status !== 500) message = m;
    } catch { /* ignore */ }
    return json({ error: message }, status);
  }
});
