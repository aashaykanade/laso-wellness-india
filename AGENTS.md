# Agent Notes

- Admin-only features (SEO assistant at `/admin/seo`) are gated by Lovable Cloud Auth plus a server-side `public.has_role(auth.uid(), 'admin')` check in the `seo-suggest` edge function and a `public.user_roles` table. Never gate admin UI on client-side data alone.
- AI writing features call the Lovable AI Gateway (`openai/gpt-6-astra` via `/v1/responses`) from a Supabase Edge Function (`supabase/functions/seo-suggest`); keys stay server-side.
- AI copy for this clinic must never mention allopathy, surgery, medicines, "drug-free" comparisons, or the word "naturopathy"; appointment requests go through the contact form or WhatsApp/phone only.
