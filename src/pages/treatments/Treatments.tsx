import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCallBar from "@/components/StickyCallBar";

const treatments = [
  {
    path: "/treatments/addiction",
    title: "Addiction Recovery",
    summary:
      "A compassionate 90-day program of energy healing, body talk, crystal healing and counselling addressing the root causes of dependency.",
    meta: "90 Days · Energy Healing, Body Talk & Counselling",
  },
  {
    path: "/treatments/sciatica",
    title: "Sciatica Relief",
    summary:
      "Non-invasive nerve pain care combining energy healing, body talk, crystal healing and counselling to relieve radiating pain without surgery.",
    meta: "6 Weeks · Energy Healing, Body Talk & Crystal Healing",
  },
  {
    path: "/treatments/knee-pain",
    title: "Knee Pain Management",
    summary:
      "Energy healing, body talk, crystal healing and counselling for osteoarthritis and chronic knee stiffness — helping you move freely again.",
    meta: "8 Weeks · Energy Healing, Body Talk & Crystal Healing",
  },
];

const Treatments = () => {
  useEffect(() => {
    document.title = "Treatments in Pune | Energy Healing & Allied Therapies — Laso Wellness";
    const meta = document.querySelector('meta[name="description"]');
    if (meta)
      meta.setAttribute(
        "content",
        "Explore treatments at Laso Wellness, Pune — addiction recovery, sciatica relief and knee pain management with Dr. Yashwant Kanade. By appointment: 9890038839.",
      );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-20 md:pb-24">
      <Navbar />

      <section className="relative isolate overflow-hidden pt-28 md:pt-40 pb-10 md:pb-16 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(800px_500px_at_80%_0%,rgba(139,92,246,0.15),transparent_60%),radial-gradient(600px_400px_at_10%_100%,rgba(212,175,55,0.07),transparent_60%)]" />
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <p className="eyebrow mb-5">Laso Wellness · Pune</p>
          <h1 className="section-title mb-6">Our <span className="italic">Treatments</span></h1>
          <div className="w-16 h-px bg-[hsl(var(--gold))]/70 mx-auto mb-8"></div>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Energy healing, body talk, crystal healing and counselling programs designed by Dr. Yashwant Kanade, MD (Alternative Medicine),
            to treat chronic conditions at their root. Select a treatment to read the full case study.
          </p>
        </div>
      </section>

      <section className="section-padding premium-section !pt-4 md:!pt-8">
        <div className="container mx-auto max-w-4xl grid gap-5 md:gap-6">
          {treatments.map((t) => (
            <Link
              key={t.path}
              to={t.path}
              className="premium-glass rounded-2xl p-6 md:p-8 block group transition-colors hover:border-[hsl(var(--gold))]/40"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--gold))] mb-3">{t.meta}</p>
              <h2 className="font-serif italic text-2xl md:text-3xl text-[hsl(var(--ivory))] mb-3">{t.title}</h2>
              <p className="text-foreground/85 leading-relaxed text-sm md:text-base mb-4">{t.summary}</p>
              <span className="inline-flex items-center gap-2 text-[hsl(var(--gold))] text-sm">
                Read the case study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-padding !pt-4 md:!pt-8">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="font-serif italic text-2xl md:text-4xl text-[hsl(var(--ivory))] mb-6">
            Not sure which programme fits?
          </h2>
          <p className="text-muted-foreground mb-8">
            Consultations by appointment only with Dr. Yashwant Kanade, MD (Alternative Medicine).
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="btn-gold-solid">Request an Appointment</a>
            <a href="tel:+919890038839" className="btn-gold inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call 9890038839
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <StickyCallBar />
    </div>
  );
};

export default Treatments;
