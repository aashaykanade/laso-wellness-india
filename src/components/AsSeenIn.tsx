
import sakalLogo from "@/assets/sakal-logo.png";
import loksattaLogo from "@/assets/loksatta-logo.png";

const AsSeenIn = () => {
  return (
    <section className="py-10 bg-[#050318]/60 backdrop-blur-md border-y border-white/10">
      <div className="container mx-auto px-4">
        <p className="text-center text-base font-semibold text-purple-200/80 uppercase tracking-widest mb-6">
          As Seen In
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20">
          <img
            src={sakalLogo}
            alt="Sakal Marathi Newspaper - सकाळ"
            className="h-16 md:h-24 object-contain opacity-90 hover:opacity-100 transition-all brightness-0 invert"
          />
          <img
            src={loksattaLogo}
            alt="Loksatta Marathi Newspaper - लोकसत्ता"
            className="h-16 md:h-24 object-contain opacity-90 hover:opacity-100 transition-all brightness-0 invert"
          />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
