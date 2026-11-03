import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { Copy, Loader2, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

type Item = { text: string; reason: string };
type Suggestions = { titles: Item[]; descriptions: Item[]; h1: string[]; subheadings: string[]; tips: string[] };

const AdminSeo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [status, setStatus] = useState<"loading" | "denied" | "ok">("loading");
  const [email, setEmail] = useState("");
  const [phrase, setPhrase] = useState("");
  const [pageType, setPageType] = useState("");
  const [content, setContent] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Suggestions | null>(null);

  useEffect(() => {
    document.title = "SEO assistant | Laso Wellness admin";
    (async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) return navigate("/auth", { replace: true });
      setEmail(data.user.email ?? "");
      const { data: isAdmin } = await supabase.rpc("has_role", { _user_id: data.user.id, _role: "admin" });
      setStatus(isAdmin ? "ok" : "denied");
    })();
  }, [navigate]);

  const generate = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    setResult(null);
    const { data, error } = await supabase.functions.invoke("seo-suggest", {
      body: { phrase, content, pageType: pageType || null },
    });
    setBusy(false);
    if (error) {
      let msg = error.message;
      if (error instanceof FunctionsHttpError) {
        try { msg = (await error.context.json()).error ?? msg; } catch { /* keep */ }
      }
      toast({ title: "Couldn't get suggestions", description: msg, variant: "destructive" });
      return;
    }
    setResult(data.suggestions);
  };

  const copy = (t: string) => {
    navigator.clipboard.writeText(t);
    toast({ title: "Copied" });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (status === "loading")
    return <div className="min-h-screen flex items-center justify-center bg-background"><Loader2 className="animate-spin text-muted-foreground" /></div>;

  if (status === "denied")
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
        <div className="max-w-md text-center space-y-4">
          <h1 className="font-serif text-3xl">Admins only</h1>
          <p className="text-muted-foreground">You're signed in as {email}, but this account isn't a site admin yet.</p>
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </div>
      </div>
    );

  const Row = ({ text, sub, limit }: { text: string; sub?: string; limit?: [number, number] }) => {
    const n = text.length;
    const ok = !limit || (n >= limit[0] && n <= limit[1]);
    return (
      <li className="flex gap-3 items-start rounded-lg border border-border bg-card p-4">
        <div className="flex-1 space-y-1">
          <p>{text}</p>
          {sub && <p className="text-sm text-muted-foreground">{sub}</p>}
          {limit && <p className={`text-xs ${ok ? "text-muted-foreground" : "text-destructive"}`}>{n} characters (aim for {limit[0]}–{limit[1]})</p>}
        </div>
        <Button size="icon" variant="ghost" aria-label="Copy" onClick={() => copy(text)}><Copy className="h-4 w-4" /></Button>
      </li>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto max-w-4xl px-4 py-10 space-y-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl">SEO assistant</h1>
            <p className="text-muted-foreground">Paste a page's text and the phrase people search for. AI suggests titles, descriptions and headings.</p>
          </div>
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </div>

        <form onSubmit={generate} className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phrase">Target search phrase</Label>
              <Input id="phrase" required maxLength={120} placeholder="e.g. energy healing pune" value={phrase} onChange={(e) => setPhrase(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Page (optional)</Label>
              <Input id="type" maxLength={80} placeholder="e.g. Sciatica treatment page" value={pageType} onChange={(e) => setPageType(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Page content</Label>
            <Textarea id="content" required minLength={50} maxLength={20000} rows={10} placeholder="Paste the page text here…" value={content} onChange={(e) => setContent(e.target.value)} />
            <p className="text-xs text-muted-foreground">{content.length} / 20,000 characters</p>
          </div>
          <Button type="submit" disabled={busy}>
            {busy ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            {busy ? "Thinking…" : "Suggest SEO"}
          </Button>
        </form>

        {result && (
          <div className="space-y-8">
            <section className="space-y-3">
              <h2 className="font-serif text-2xl">Page titles</h2>
              <ul className="space-y-2">{result.titles.map((t, i) => <Row key={i} text={t.text} sub={t.reason} limit={[50, 60]} />)}</ul>
            </section>
            <section className="space-y-3">
              <h2 className="font-serif text-2xl">Descriptions</h2>
              <ul className="space-y-2">{result.descriptions.map((t, i) => <Row key={i} text={t.text} sub={t.reason} limit={[140, 160]} />)}</ul>
            </section>
            <section className="space-y-3">
              <h2 className="font-serif text-2xl">Main heading options</h2>
              <ul className="space-y-2">{result.h1.map((t, i) => <Row key={i} text={t} />)}</ul>
            </section>
            <section className="space-y-3">
              <h2 className="font-serif text-2xl">Subheadings</h2>
              <ul className="space-y-2">{result.subheadings.map((t, i) => <Row key={i} text={t} />)}</ul>
            </section>
            <section className="space-y-3">
              <h2 className="font-serif text-2xl">Tips</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">{result.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSeo;
