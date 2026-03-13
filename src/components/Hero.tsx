
import { Button } from "@/components/ui/button";
import chakraBg from "@/assets/chakra-bg.mp4";

const Hero = () => {
  return (
    <section className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient -z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover -z-20 opacity-40"
      >
        <source src={chakraBg} type="video/mp4" />
      </video>
      
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
              <a href="#contact">
                <Button className="bg-laso-purple hover:bg-laso-darkgreen text-white px-8 py-6 text-lg">
                  Book Clinic Appointment
                </Button>
              </a>
              <a href="#services">
                <Button variant="outline" className="border-laso-darkgreen text-laso-darkgreen hover:bg-laso-lightpurple px-8 py-6 text-lg">
                  Learn More
                </Button>
              </a>
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
                    <span>Skeletal Disorders</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Addiction and Depression</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Skin Conditions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Parkinson's</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>Hypertension</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-laso-purple mr-2"></div>
                    <span>And more...</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <a href="#testimonials" className="text-laso-purple hover:text-laso-darkgreen font-medium">
                    View Patient Experiences →
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
