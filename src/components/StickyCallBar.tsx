import { Phone } from "lucide-react";

const StickyCallBar = () => {
  const phoneNumber = "919890038839";
  const telUrl = `tel:+${phoneNumber}`;
  const displayNumber = "9890038839";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#05041a]/95 backdrop-blur-xl border-t border-[hsl(var(--gold))]/30 shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.7)]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[hsl(var(--gold))]/15 border border-[hsl(var(--gold))]/40">
            <Phone className="w-4 h-4 text-[hsl(var(--gold))]" />
          </span>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-[0.28em] text-[hsl(var(--ivory))]/60">
              By Appointment
            </p>
            <p className="font-serif italic text-base md:text-lg text-[hsl(var(--ivory))]">
              Call for appointment {displayNumber}
            </p>
          </div>
        </div>
        <a
          href={telUrl}
          className="btn-gold-solid !px-5 md:!px-8 !py-3 text-[11px] md:text-xs"
          aria-label={`Call ${displayNumber} for appointment`}
        >
          <Phone className="w-4 h-4 mr-2 inline" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
