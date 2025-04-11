
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => {
  return (
    <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-none">
      <div className="bg-laso-lightpurple p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-3">{title}</h3>
      <p className="mb-4 text-gray-700">{description}</p>
      <a href="#contact" className="text-laso-purple font-medium hover:text-laso-darkgreen inline-flex items-center">
        Learn more 
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </a>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5 -z-10" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80')" }}
      ></div>
      
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Healing Services</h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg">
            Discover our range of specialized energy healing services designed to address 
            chronic conditions and promote overall wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Advanced Energy Healing"
            description="Cutting-edge energy healing techniques that balance and restore the body's natural energy systems to promote healing from within."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laso-purple"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>}
          />
          
          <ServiceCard 
            title="Iatrogenic Healing"
            description="Specialized healing protocols designed to address and reverse conditions caused by medical interventions or treatments."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laso-purple"><path d="m8 14.5 4-9 4 9"/><path d="M8.5 18h7"/><circle cx="12" cy="12" r="10"/></svg>}
          />
          
          <ServiceCard 
            title="Counselling for Psychosomatic Diseases"
            description="Holistic counseling that addresses the mind-body connection, helping to heal physical ailments with psychological origins."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laso-purple"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>}
          />
          
          <ServiceCard 
            title="Alternative Medicine Therapies"
            description="A blend of traditional healing methods and modern alternative approaches that complement conventional medical treatments."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laso-purple"><path d="m3 12 2-2v5c0 1.1.9 2 2 2h10"/><path d="M13 17v2"/><path d="M9 17v2"/><path d="m18 12 3-2"/><path d="m18 15 3 2"/><path d="M14.02 13.98 13 17"/><path d="M21 2c0 2.1-4 3.8-9 4l.004 3.995M21 3c0 2.1-4 3.8-9 4"/><path d="M11 4c-2.6-.5-5-.5-7 0"/><path d="m11 4 .001 4.002"/></svg>}
          />
          
          <ServiceCard 
            title="Energy Assessment"
            description="A comprehensive evaluation of your energy field to identify imbalances and blockages contributing to your condition."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laso-purple"><path d="M8 16a5 5 0 0 1-1-9.9m11 4A4.98 4.98 0 0 1 16 10"/><path d="M12 12v9"/><path d="M8 20h8"/><path d="M12 12a5 5 0 0 1-5-5c0-2 0-3 2-4l.8-.8c.663-.64 1.44-1.195 2.3-1.647a4.7 4.7 0 0 1 3.8 0c.859.452 1.637 1.007 2.3 1.647l.8.8c2 1 2 2 2 4a5 5 0 0 1-5 5Z"/></svg>}
          />
          
          <ServiceCard 
            title="Wellness Consultation"
            description="Personalized guidance on integrating energy practices into your daily life for sustained health improvements."
            icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-laso-purple"><path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M14 2v4a2 2 0 0 0 2 2h3"/><path d="M4 7V2h6v4a2 2 0 0 1-2 2H4Z"/><path d="M4 15v6h6v-4a2 2 0 0 0-2-2H4Z"/><path d="M4 15V9h3a2 2 0 0 1 2 2v4"/><path d="M14 22v-6h3a2 2 0 0 0 2-2V9"/><path d="M22 16v-2a2 2 0 0 0-2-2h-3"/></svg>}
          />
        </div>

        <div className="text-center mt-12">
          <Button className="bg-laso-purple hover:bg-laso-darkgreen text-white px-8 py-6 text-lg">
            Request Clinic Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

