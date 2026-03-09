import { useState } from "react";
import { ChevronRight, Clock, CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    condition: "Chronic Knee Pain (Osteoarthritis)",
    patient: "Male, 58 years",
    duration: "3 months of treatment",
    before: [
      "Severe knee pain limiting daily movement",
      "Dependent on painkillers for 4+ years",
      "Unable to climb stairs without assistance",
    ],
    after: [
      "Pain-free walking and daily activities",
      "Completely off painkillers",
      "Climbing stairs independently",
    ],
    quote: "I had given up hope after years of medication. The healing sessions changed my life completely.",
  },
  {
    id: 2,
    condition: "Depression & Anxiety",
    patient: "Female, 34 years",
    duration: "2 months of treatment",
    before: [
      "Persistent low mood and lack of motivation",
      "On anti-depressants for 2 years",
      "Difficulty maintaining relationships and work",
    ],
    after: [
      "Stable mood and renewed sense of purpose",
      "Gradually tapered off medication under doctor supervision",
      "Improved relationships and work performance",
    ],
    quote: "I feel like myself again. The energy healing addressed root causes that medication never could.",
  },
  {
    id: 3,
    condition: "Skin Psoriasis",
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
    quote: "After years of creams and steroids, this holistic approach finally gave me lasting results.",
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);
  const current = caseStudies[activeCase];

  return (
    <section className="section-padding bg-laso-cream/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Real Patient Transformations
          </h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            These are real cases from our clinic. Names withheld for privacy, but outcomes speak for themselves.
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
                  ? "bg-laso-darkgreen text-white shadow-md"
                  : "bg-white text-foreground border border-border hover:border-laso-purple/50"
              }`}
            >
              {cs.condition}
            </button>
          ))}
        </div>

        {/* Case detail */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden animate-fade-in">
          <div className="p-6 md:p-10">
            {/* Patient info */}
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
              <span className="bg-laso-lightpurple px-3 py-1 rounded-full font-medium text-laso-darkgreen">
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
                <div className="absolute -top-2 left-4 bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Before Treatment
                </div>
                <div className="border-2 border-red-100 rounded-xl p-6 pt-8 space-y-3">
                  {current.before.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <ChevronRight className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* After */}
              <div className="relative">
                <div className="absolute -top-2 left-4 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  After Treatment
                </div>
                <div className="border-2 border-green-100 rounded-xl p-6 pt-8 space-y-3">
                  {current.after.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Patient quote */}
            <blockquote className="mt-8 border-l-4 border-laso-purple pl-5 italic text-muted-foreground text-lg">
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
