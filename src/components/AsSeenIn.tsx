
import sakalLogo from "@/assets/sakal-logo.png";
import loksattaLogo from "@/assets/loksatta-logo.png";

const AsSeenIn = () => {
  return (
    <section className="py-10 bg-accent border-y border-border">
      <div className="container mx-auto px-4">
        <p className="text-center text-base font-semibold text-foreground uppercase tracking-widest mb-6">
          As Seen In
        </p>
        <div className="flex items-center justify-center gap-12 md:gap-20">
          <img
            src={sakalLogo}
            alt="Sakal Newspaper"
            className="h-10 md:h-14 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
          />
          <img
            src={loksattaLogo}
            alt="Loksatta Newspaper"
            className="h-10 md:h-14 object-contain grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all"
          />
        </div>
      </div>
    </section>
  );
};

export default AsSeenIn;
