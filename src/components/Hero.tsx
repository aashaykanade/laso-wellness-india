import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ChakraCanvas from "@/components/ChakraCanvas";

const conditionGroups = [
  {
    label: "Physical",
    items: ["Skeletal Disorders", "Skin Conditions", "Hypertension"],
  },
  {
    label: "Psychological",
    items: ["Addiction", "Depression", "Parkinson's"],
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 flex flex-col justify-center isolate overflow-hidden">
      {/* Chakra animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ChakraCanvas />
      </div>
      {/* Deep vignette for editorial legibility */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,7,20,0.85)_100%)]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0a0714]/70 via-transparent to-[#0a0714]/80" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-20 py-16 md:py-20">
        {/* Masthead eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="w-10 h-px bg-[hsl(var(--gold))]/70" />
          <span className="eyebrow">Laso Wellness — Est. Pune, India</span>
        </div>

        <div className="max-w-6xl">
          <h1 className="font-serif font-light leading-[0.95] text-5xl md:text-7xl lg:text-8xl text-[hsl(var(--ivory))]">
            <span className="italic">Get Cured</span> from Root.
            <br />
            <span className="text-[hsl(var(--ivory))]/85">Restore your Health.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16 mt-12 md:mt-16">
            <p className="max-w-md text-base md:text-lg text-[hsl(var(--ivory))]/70 leading-relaxed font-light">
              Under the guidance of <em className="not-italic text-[hsl(var(--gold-soft))]">Dr. Yashwant Kanade</em>, Laso Wellness facilitates deep-field
              energetic restoration — harmonising the subtle body to resolve chronic conditions the physical layer alone cannot reach.
            </p>

            <div className="flex flex-col gap-3">
              <a href="#contact" className="group">
                <span className="btn-gold">
                  Inquire for Consultation
                  <ArrowRight className="ml-4 w-4 h-4 text-[hsl(var(--gold))] transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <p className="text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--ivory))]/40 text-center italic font-light">
                Strictly by clinic appointment
              </p>
            </div>
          </div>
        </div>

        {/* Editorial ledger — conditions as an index */}
        <div className="mt-20 md:mt-24 border-t border-[hsl(var(--gold))]/20 pt-10">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 gap-4">
            <h2 className="font-serif italic text-2xl md:text-3xl text-[hsl(var(--ivory))]/95">Conditions we address</h2>
            <a href="#testimonials" className="eyebrow hover:text-[hsl(var(--ivory))] transition-colors">
              Patient Experiences →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {conditionGroups.map((group, gi) => (
              <div key={group.label}>
                <div className="flex items-baseline justify-between mb-4">
                  <p className="eyebrow">{group.label}</p>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--ivory))]/40">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul>
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className="group flex items-center justify-between border-b border-[hsl(var(--ivory))]/10 py-3.5 hover:border-[hsl(var(--gold))]/60 transition-colors"
                    >
                      <span className="font-serif text-lg md:text-xl text-[hsl(var(--ivory))]/90">
                        {item}
                      </span>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[hsl(var(--ivory))]/40">
                        {String(gi * 3 + i + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex items-center justify-center gap-3 text-[hsl(var(--ivory))]/50">
            <span className="w-8 h-px bg-[hsl(var(--gold))]/40" />
            <span className="font-serif italic text-base md:text-lg">And more…</span>
            <span className="w-8 h-px bg-[hsl(var(--gold))]/40" />
          </div>
        </div>
      </div>

      {/* Scroll rule */}
      <div className="absolute bottom-10 left-8 md:left-16 hidden lg:block z-20">
        <div className="w-px h-20 bg-gradient-to-b from-[hsl(var(--gold))]/0 via-[hsl(var(--gold))]/60 to-[hsl(var(--gold))]/0" />
      </div>
    </section>
  );
};

export default Hero;
