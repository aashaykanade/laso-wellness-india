import { Button } from "@/components/ui/button";
import ChakraCanvas from "@/components/ChakraCanvas";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden bg-[#040410]">
      {/* Animated chakra canvas background */}
      <div className="absolute inset-0 -z-20">
        <ChakraCanvas />
      </div>
      {/* Subtle overlay — keeps text legible while letting the animation shine */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#040410]/80 via-[#040410]/30 to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#040410]/70 via-transparent to-[#040410]/40"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in-left">
            <p className="text-xs md:text-sm tracking-[0.35em] text-purple-300/70 uppercase mb-5 font-light">
              Laso Wellness
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6 text-white">
              Get Cured from Root. <br />
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-200 to-emerald-300 bg-clip-text text-transparent">
                Fix your Health
              </span>
            </h1>
            <p className="text-base md:text-lg mb-8 max-w-xl text-white/75 leading-relaxed">
              Experience transformative Energy Healing and Allied Therapies that have helped countless individuals overcome
              chronic conditions like Parkinson's and Diabetes. At Laso Wellness, we blend ancient wisdom with modern techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact">
                <Button className="bg-white text-[#040410] hover:bg-white/90 px-8 py-6 text-base font-medium shadow-[0_0_40px_rgba(192,132,252,0.35)]">
                  Book Clinic Appointment
                </Button>
              </a>
              <a href="#services">
                <Button
                  variant="outline"
                  className="border-white/30 bg-white/5 backdrop-blur text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base font-medium"
                >
                  Learn More
                </Button>
              </a>
            </div>
          </div>

          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-right w-full">
            <div className="relative">
              <div className="bg-white/[0.06] border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-7 md:p-9 relative z-10">
                <p className="text-xs tracking-[0.3em] text-purple-300/70 uppercase mb-2 font-light">Proven Results</p>
                <h3 className="text-2xl font-serif font-semibold text-white mb-5">
                  Conditions We Heal
                </h3>
                <ul className="space-y-3.5">
                  {[
                    "Skeletal Disorders",
                    "Addiction and Depression",
                    "Skin Conditions",
                    "Parkinson's",
                    "Hypertension",
                    "And more...",
                  ].map((item) => (
                    <li key={item} className="flex items-center text-white/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-emerald-400 mr-3 shadow-[0_0_8px_rgba(192,132,252,0.8)]"></span>
                      <span className="text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-5 border-t border-white/10 text-center">
                  <a
                    href="#testimonials"
                    className="text-purple-300 hover:text-white font-medium text-sm tracking-wide transition-colors"
                  >
                    View Patient Experiences →
                  </a>
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-emerald-500/20 rounded-2xl blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
