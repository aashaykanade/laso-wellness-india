
import { Leaf, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-laso-cream/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About Laso Wellness</h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg">
            Laso Wellness brings together ancient Indian energy practices and modern therapeutic approaches to provide comprehensive healing solutions.
            We believe in claims proven by authorised medical reports and client testimonials to support the authenticity of our claims.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                alt="Human Aura Healing" 
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-serif italic text-laso-darkgreen">
                  "Whatever happens on the Subtle Etheric body of a human, is reflected in the Physical body"
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-serif font-bold text-laso-darkgreen mb-6">
              Our Approach to Health & Wellness
            </h3>
            <p className="mb-6">
              At Laso Wellness, we believe that true healing happens when the body's energy systems 
              are balanced and flowing freely. Our approach combines:
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 bg-laso-lightpurple p-3 rounded-full h-fit">
                  <Leaf className="text-laso-purple" size={24} />
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
                <div className="mr-4 bg-laso-lightpurple p-3 rounded-full h-fit">
                  <Heart className="text-laso-purple" size={24} />
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

            <div className="mt-8 p-4 bg-laso-lightpurple rounded-lg">
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
