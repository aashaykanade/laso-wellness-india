
import sakalLogo from "@/assets/sakal-logo.png";
import loksattaLogo from "@/assets/loksatta-logo.png";

const AsSeenIn = () => {
  return (
    <section className="py-14 bg-[#0a0714]/70 backdrop-blur-md border-y border-[hsl(var(--gold))]/15">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-8 h-px bg-[hsl(var(--gold))]/50" />
          <p className="eyebrow">As Featured In</p>
          <span className="w-8 h-px bg-[hsl(var(--gold))]/50" />
        </div>
        <div className="flex items-center justify-center gap-14 md:gap-24">
          <img
            src={sakalLogo}
            alt="Sakal Marathi Newspaper - सकाळ"
            className="h-14 md:h-20 object-contain opacity-70 hover:opacity-100 transition-all brightness-0 invert"
          />
          <img
            src={loksattaLogo}
            alt="Loksatta Marathi Newspaper - लोकसत्ता"
            className="h-14 md:h-20 object-contain opacity-70 hover:opacity-100 transition-all brightness-0 invert"
          />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
