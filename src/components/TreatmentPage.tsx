import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Clock, Stethoscope, Sparkles, TrendingUp, Star, Phone, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";

export interface TreatmentPageData {
  slug: string;
  title: string;
  heroTagline: string;
  overview: string[];
  overviewPoints: string[];
  caseStudy: {
    condition: string;
    duration: string;
    approach: string;
    patientBackground: string;
    story: { heading: string; text: string }[];
    results: string[];
  };
  testimonial: {
    quote: string;
    initials: string;
    city: string;
    rating: number;
  };
  seoTitle: string;
  seoDescription: string;
}

const TreatmentPage = ({ data }: { data: TreatmentPageData }) => {
  useEffect(() => {
    document.title = data.seoTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", data.seoDescription);
    window.scrollTo(0, 0);
  }, [data]);

  const cs = data.caseStudy;

  return (
    <div className="min-h-screen pb-20 md:pb-24">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-28 md:pt-40 pb-12 md:pb-20 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(800px_500px_at_80%_0%,rgba(139,92,246,0.15),transparent_60%),radial-gradient(600px_400px_at_10%_100%,rgba(212,175,55,0.07),transparent_60%)]" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="eyebrow mb-5">Laso Wellness · Pune</p>
          <h1 className="section-title mb-6">{data.title}</h1>
          <div className="w-16 h-px bg-[hsl(var(--gold))]/70 mx-auto mb-8"></div>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">{data.heroTagline}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 md:mt-10">
            <a href="/#contact" className="btn-gold-solid">Book a Consultation</a>
            <a href="tel:+919890038839" className="btn-gold inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call 9890038839
            </a>
          </div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="section-padding premium-section !pt-6 md:!pt-10">
        <div className="container mx-auto max-w-4xl">
          <div className="premium-glass rounded-2xl p-6 md:p-10">
            <p className="eyebrow mb-4">Treatment Overview</p>
            <h2 className="font-serif italic text-2xl md:text-4xl text-[hsl(var(--ivory))] mb-6">
              A holistic path to recovery
            </h2>
            {data.overview.map((p, i) => (
              <p key={i} className="text-foreground/85 leading-relaxed mb-4">{p}</p>
            ))}
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {data.overviewPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[hsl(var(--gold))] mt-1 flex-shrink-0" />
                  <span className="text-foreground/85 text-sm md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding premium-section !pt-6 md:!pt-10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8 md:mb-12">
            <p className="eyebrow mb-5">Patient Case Study</p>
            <h2 className="section-title mb-6">A Real <span className="italic">Recovery Story</span></h2>
            <div className="w-16 h-px bg-[hsl(var(--gold))]/70 mx-auto"></div>
          </div>

          <div className="premium-glass rounded-2xl overflow-hidden">
            {/* Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-[hsl(var(--gold))]/15">
              {[
                { icon: Stethoscope, label: "Condition", value: cs.condition },
                { icon: Clock, label: "Duration", value: cs.duration },
                { icon: Sparkles, label: "Approach", value: cs.approach },
                { icon: TrendingUp, label: "Results", value: cs.results[0] },
              ].map((b, i) => (
                <div key={i} className="p-4 md:p-6 border-[hsl(var(--gold))]/10 [&:nth-child(odd)]:border-r lg:[&:not(:last-child)]:border-r">
                  <div className="flex items-center gap-2 mb-2">
                    <b.icon className="w-4 h-4 text-[hsl(var(--gold))]" />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--gold))]">{b.label}</span>
                  </div>
                  <p className="text-sm md:text-base font-medium text-[hsl(var(--ivory))]">{b.value}</p>
                </div>
              ))}
            </div>

            {/* Story */}
            <div className="p-6 md:p-10">
              <p className="text-muted-foreground italic mb-8 border-l-2 border-[hsl(var(--gold))]/50 pl-4">
                {cs.patientBackground}
              </p>
              <div className="space-y-8">
                {cs.story.map((chapter, i) => (
                  <div key={i} className="flex gap-4 md:gap-6">
                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border border-[hsl(var(--gold))]/40 flex items-center justify-center text-[hsl(var(--gold))] font-serif italic text-sm md:text-base">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-serif italic text-xl md:text-2xl text-[hsl(var(--ivory))] mb-2">{chapter.heading}</h3>
                      <p className="text-foreground/85 leading-relaxed text-sm md:text-base">{chapter.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Results */}
              <div className="mt-10 border border-emerald-400/25 bg-emerald-500/5 rounded-xl p-5 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-300 mb-4">Key Results</p>
                <ul className="space-y-3">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-emerald-300 mt-1 flex-shrink-0" />
                      <span className="text-foreground/90 text-sm md:text-base">{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding premium-section !pt-6 md:!pt-10">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8 md:mb-10">
            <p className="eyebrow mb-5">In Their Words</p>
            <h2 className="section-title">Patient <span className="italic">Testimonial</span></h2>
          </div>
          <blockquote className="testimonial-card rounded-2xl p-6 md:p-10 text-center">
            <div className="flex justify-center gap-1.5 mb-6">
              {Array.from({ length: data.testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[hsl(var(--gold))] text-[hsl(var(--gold))]" />
              ))}
            </div>
            <p className="text-lg md:text-2xl font-serif italic text-foreground/90 leading-relaxed mb-8">
              "{data.testimonial.quote}"
            </p>
            <footer>
              <p className="font-bold text-lg text-[hsl(var(--ivory))]">{data.testimonial.initials}</p>
              <p className="text-[hsl(var(--gold))] text-sm tracking-wide">{data.testimonial.city}</p>
              <p className="text-sm text-muted-foreground mt-3 italic">* Medical reports available for verification</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding !pt-4 md:!pt-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif italic text-2xl md:text-4xl text-[hsl(var(--ivory))] mb-6">
            Begin your own recovery story
          </h2>
          <p className="text-muted-foreground mb-8">
            Consultations by appointment only with Dr. Yashwant Kanade, MD (Alternative Medicine).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="btn-gold-solid">Request an Appointment</a>
            <Link to="/#results" className="btn-gold">See More Results</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default TreatmentPage;
