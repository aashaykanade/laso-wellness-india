import { Leaf, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding premium-section">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <p className="eyebrow mb-5">Chapter I — Philosophy</p>
          <h2 className="section-title mb-6">About <span className="italic">Laso Wellness</span></h2>
          <div className="w-16 h-px bg-[hsl(var(--gold))]/70 mx-auto mb-8"></div>
          <p className="text-lg text-[hsl(var(--ivory))]/75 font-light leading-relaxed">
            Laso Wellness brings together ancient Indian energy practices and modern therapeutic approaches to provide comprehensive healing solutions.
            We believe in claims proven by authorised medical reports and client testimonials to support the authenticity of our claims.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative">
              <img 
                src="/lovable-uploads/5cfa80ce-6286-4208-9441-93e3f308ad57.png" 
                alt="Human Energy Field and Chakras" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-5 -right-5 premium-glass p-4 rounded-lg max-w-xs">
                <p className="font-serif italic text-purple-200">
                  "Whatever happens on the Subtle Etheric body of a human, is reflected in the Physical body"
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-serif font-bold text-emerald-300 mb-6">
              Our Approach to Health & Wellness
            </h3>
            <p className="mb-6">
              At Laso Wellness, we believe that true healing happens when the body's energy systems 
              are balanced and flowing freely. Our approach combines:
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 bg-purple-500/15 border border-purple-400/20 p-3 rounded-full h-fit">
                  <Leaf className="text-purple-300" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Ancient Indian Wisdom</h4>
                  <p>
                    Drawing from traditional Indian healing systems including Kanaad therapy, Naturopathy & 
                    Kriya Yoga to address the root causes of disease.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4 bg-purple-500/15 border border-purple-400/20 p-3 rounded-full h-fit">
                  <Heart className="text-purple-300" size={24} />
                </div>
                <div>
                  <h4 className="font-bold mb-2">Advanced Energy Techniques</h4>
                  <p>
                    Utilizing specialized iatrogenic healing, counseling for psychosomatic diseases, and
                    alternative medicine therapies validated through clinical experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 premium-glass rounded-lg">
              <p className="italic">
                "Our documented success with chronic conditions stems from our unique 
                ability to identify and correct energy systems which heal the disease from the root"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
