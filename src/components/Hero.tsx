
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <div 
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1400&q=80')" }}
      ></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
              Get Cured from Root. <br />
              <span className="text-laso-darkgreen">Fix your Health</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Experience transformative Energy Healing and Allied Therapies that have helped countless individuals overcome 
              chronic conditions like Parkinson's and Diabetes. 
              At Laso Wellness, we blend ancient wisdom with modern techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-laso-purple hover:bg-laso-darkgreen text-white px-8 py-6 text-lg">
                Book Clinic Appointment
              </Button>
              <Button variant="outline" className="border-laso-darkgreen text-laso-darkgreen hover:bg-laso-lightpurple px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in-right">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 relative z-10">
                <h3 className="text-2xl font-serif font-bold text-laso-darkgreen mb-4">
                  Proven Results
                </h3>
                <p className="mb-6">
                  Our healing methods have successfully treated:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Parkinson's Disease</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Diabetes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Chronic Pain</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Anxiety & Depression</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Autoimmune Conditions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>And more...</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <a href="#results" className="text-laso-purple hover:text-laso-darkgreen font-medium">
                    See documented case studies →
                  </a>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-laso-lightpurple rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
