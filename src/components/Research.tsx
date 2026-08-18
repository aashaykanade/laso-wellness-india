
import { FileText, ExternalLink, BookOpen } from "lucide-react";

interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  abstract: string;
  link?: string;
}

const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title: "Amelioration of mild and moderate depression through Pranic Healing as adjuvant therapy: a randomised double-blind controlled trial",
    authors: "R Rajagopal, Srikanth N Jois, Sumanth M Majgi, MN Anil Kumar, HB Shashidhar",
    journal: "Australas Psychiatry · Vol 26(1), 82–87",
    year: "2017",
    abstract:
      "A randomised double-blind controlled trial of 52 participants with mild-to-moderate depression found that Pranic Healing as an adjuvant to antidepressants produced a significantly greater reduction in Hamilton Depression (HAM-D) scores than mock healing — with 100% of the Pranic Healing group improving in depression category versus 69.2% in the control group.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5802541/",
  },
  {
    id: 2,
    title: "Assessing the Cytotoxicity and Wound Healing Potential of Pranic Healing Colours: An in vitro Study on HaCaT Cell Line",
    authors: "Srikanth N Jois, Rakesh R Rahangdale, Vinu Vijayakumar, Raghu C Hariharapura, Nagendra Prasad K",
    journal: "Indian Journal of Pharmaceutical Education and Research · Vol 59(2), 777–782",
    year: "2025",
    abstract:
      "An in vitro study on HaCaT cells demonstrating that Pranic Healing colours are non-cytotoxic and that combinations of Pranic colours were more effective than single colours in promoting wound healing — underscoring the potential of biofield therapy to enhance cell health and tissue repair.",
    link: "https://doi.org/10.5530/ijper.20250945",
  },
  {
    id: 3,
    title: "Effect of Pranic Healing as a complementary therapy for benign prostatic hyperplasia (BPH) with lower urinary tract symptoms",
    authors: "Roopa Nanjundaswamy, Narendra J B, Vinu Vijayakumar, Srikanth N Jois, K Nagendra Prasad",
    journal: "Complementary Therapies in Medicine · Vol 84, Article 103067",
    year: "2024",
    abstract:
      "A single-blind trial of 76 men with BPH-related urinary symptoms showed that medication plus Pranic Healing (MEDPH) significantly improved IPSS scores, reduced incomplete bladder emptying, and improved sleep quality versus medication alone — suggesting Pranic Healing can alleviate LUTS and enhance quality of life in moderate BPH patients.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39033882/",
  },
];

const ResearchCard = ({ paper }: { paper: ResearchPaper }) => {
  return (
    <div className="premium-glass rounded-lg p-7 flex flex-col h-full transition-all duration-300 hover:border-[hsl(var(--gold))]/40 hover:shadow-[0_20px_60px_-20px_rgba(212,175,55,0.35)]">
      <div className="flex items-start justify-between gap-4 mb-5">
        <div className="bg-purple-500/15 border border-purple-400/20 p-3 rounded-full h-fit">
          <FileText className="text-purple-300" size={22} />
        </div>
        <span className="text-[11px] uppercase tracking-[0.28em] text-[hsl(var(--gold))]/80 border border-[hsl(var(--gold))]/25 px-3 py-1 rounded-full">
          {paper.year}
        </span>
      </div>

      <h3 className="font-serif text-xl md:text-2xl leading-snug text-[hsl(var(--ivory))] mb-3">
        {paper.title}
      </h3>

      <p className="text-sm text-purple-200/80 italic mb-1">{paper.authors}</p>
      <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
        <BookOpen size={14} className="text-[hsl(var(--gold))]/70" />
        {paper.journal}
      </p>

      <div className="w-10 h-px bg-[hsl(var(--gold))]/40 mb-4"></div>

      <p className="text-sm text-foreground/80 leading-relaxed flex-grow">{paper.abstract}</p>

      {paper.link && (
        <a
          href={paper.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[hsl(var(--gold))] hover:text-[hsl(var(--ivory))] transition-colors w-fit"
        >
          Read Paper
          <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
};

const Research = () => {
  return (
    <section id="research" className="section-padding premium-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="eyebrow mb-5">Chapter V — Research</p>
          <h2 className="section-title mb-6">Published <span className="italic">Research</span></h2>
          <div className="w-16 h-px bg-[hsl(var(--gold))]/70 mx-auto mb-8"></div>
          <p className="text-lg text-[hsl(var(--ivory))]/75 font-light leading-relaxed">
            Peer-reviewed research documenting the efficacy of energy healing (Pranic Healing) across both psychological and physical conditions — published in indexed medical journals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchPapers.map((paper) => (
            <ResearchCard key={paper.id} paper={paper} />
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-muted-foreground">
          Medical reports available for verification upon request.
        </p>
      </div>
    </section>
  );
};

export default Research;
