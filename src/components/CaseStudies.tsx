import { useState } from "react";
import { ChevronRight, Clock, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    condition: "Depression & Addiction",
    patient: "Male, 29 years",
    duration: "3 months of treatment",
    before: [
      "Severe depression with substance dependency",
      "On anti-depressants and counselling for 3+ years",
      "Strained family relationships and inability to hold a job",
    ],
    after: [
      "Stable mood and freedom from addictive patterns",
      "Gradually tapered off medication under doctor supervision",
      "Rebuilt relationships and resumed productive work life",
    ],
    quote: "Dr. Yashwant Kanade helped me find a way out when nothing else worked. I finally feel free.",
  },
  {
    id: 2,
    condition: "Skin Disease (Psoriasis)",
    patient: "Male, 42 years",
    duration: "4 months of treatment",
    before: [
      "Psoriasis patches covering arms and legs",
      "Tried multiple dermatologists with no lasting relief",
      "Severe itching affecting sleep quality",
    ],
    after: [
      "Skin cleared by over 80%",
      "No recurrence in 6+ months post-treatment",
      "Restful sleep and improved confidence",
    ],
    quote: "After years of creams and steroids, the holistic approach by Dr. Kanade finally gave me lasting results.",
  },
  {
    id: 3,
    condition: "Chronic Knee & Bone Pain",
    patient: "Male, 58 years",
    duration: "3 months of treatment",
    before: [
      "Severe knee and bone pain limiting daily movement",
      "Dependent on painkillers for 4+ years",
      "Unable to climb stairs without assistance",
    ],
    after: [
      "Pain-free walking and daily activities",
      "Completely off painkillers",
      "Climbing stairs independently",
    ],
    quote: "I had given up hope after years of medication. Dr. Yashwant Kanade's healing sessions changed my life.",
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const current = caseStudies[activeCase];

  return (
    <section className="section-padding premium-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Real Patient Transformations
          </h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            Treated by <strong>Dr. Yashwant Kanade</strong>, <span className="italic">MD, Alternative Medicine</span> — real cases from our clinic. Names withheld for privacy, but outcomes speak for themselves.
          </p>
        </div>

        {/* Case selector tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveCase(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCase === i
                  ? "bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_0_30px_rgba(192,132,252,0.4)]"
                  : "premium-glass text-foreground hover:border-purple-400/40"
              }`}
            >
              {cs.condition}
            </button>
          ))}
        </div>

        {/* Case detail */}
        <div className="max-w-5xl mx-auto premium-glass rounded-2xl overflow-hidden animate-fade-in">
          <div className="p-6 md:p-10">
            {/* Patient info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="bg-purple-500/15 border border-purple-400/25 px-3 py-1 rounded-full font-medium text-purple-200">
                {current.patient}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {current.duration}
              </span>
            </div>

            {/* Before / After grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <div className="relative">
                <div className="absolute -top-2 left-4 bg-rose-500/20 border border-rose-400/30 text-rose-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                  Before Treatment
                </div>
                <div className="border-2 border-rose-400/20 bg-rose-500/5 rounded-xl p-6 pt-8 space-y-3">
                  {current.before.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-rose-300 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="relative">
                <div className="absolute -top-2 left-4 bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
                  After Treatment
                </div>
                <div className="border-2 border-emerald-400/20 bg-emerald-500/5 rounded-xl p-6 pt-8 space-y-3">
                  {current.after.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-300 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground/90">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Patient quote */}
            <blockquote className="mt-8 border-l-4 border-purple-400 pl-5 italic text-purple-100/80 text-lg">
              "{current.quote}"
            </blockquote>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          * Individual results may vary. All cases documented with patient consent.
        </p>
      </div>
    </section>
  );
};

export default CaseStudies;
