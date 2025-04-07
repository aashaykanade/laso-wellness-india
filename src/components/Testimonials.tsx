
import { useState } from "react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  condition: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Delhi",
    condition: "Parkinson's Disease",
    quote: "After being diagnosed with Parkinson's 7 years ago, I had lost hope of leading a normal life. The energy healing sessions at Laso Wellness have reduced my tremors by nearly 80% and given me back my independence.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Mumbai",
    condition: "Type 2 Diabetes",
    quote: "My blood sugar levels had been unmanageable for years despite medication. After just three months of Laso's energy healing protocols, my doctor has reduced my insulin dosage and my energy levels have skyrocketed.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amita Verma",
    location: "Bangalore",
    condition: "Chronic Pain",
    quote: "I suffered from debilitating back pain for over a decade. Conventional treatments provided only temporary relief. Laso's energy healing has eliminated 90% of my pain and I'm now able to enjoy activities I had given up on years ago.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Vijay Krishnan",
    location: "Chennai",
    condition: "Autoimmune Condition",
    quote: "My autoimmune condition had left me with constant fatigue and inflammation. Since working with Laso Wellness, my symptoms have drastically improved and my latest lab results show significant normalization of my inflammatory markers.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: 5,
    name: "Sunita Reddy",
    location: "Hyderabad",
    condition: "Anxiety & Depression",
    quote: "I had been on multiple medications for anxiety and depression with little improvement. The energy healing approach at Laso has transformed my mental health. I sleep better, feel calmer, and have rediscovered joy in my daily life.",
    image: "https://randomuser.me/api/portraits/women/90.jpg"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section-padding bg-laso-lightpurple/40">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Client Testimonials</h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg">
            Hear from our clients who have experienced transformative healing through our energy work.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-laso-cream transition-colors md:-translate-x-12"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="overflow-hidden px-4">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <Card className="testimonial-card border-none p-8 shadow-lg">
                        <div className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex-shrink-0 w-24 h-24 rounded-full overflow-hidden bg-laso-cream mx-auto md:mx-0">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <div className="mb-4">
                              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.25 15H5.625C5.12772 15 4.65081 14.8025 4.29917 14.4508C3.94754 14.0992 3.75 13.6223 3.75 13.125V8.75C3.75 8.25272 3.94754 7.77581 4.29917 7.42417C4.65081 7.07254 5.12772 6.875 5.625 6.875H10C10.4973 6.875 10.9742 7.07254 11.3258 7.42417C11.6775 7.77581 11.875 8.25272 11.875 8.75V20.625C11.875 21.6196 11.4799 22.5734 10.7766 23.2766C10.0734 23.9799 9.11956 24.375 8.125 24.375H7.5V22.5H8.125C8.78532 22.5 9.41871 22.2366 9.8796 21.7679C10.3405 21.2992 10.6038 20.6658 10.6038 20.0055L11.25 15ZM24.375 15H18.75C18.2527 15 17.7758 14.8025 17.4242 14.4508C17.0725 14.0992 16.875 13.6223 16.875 13.125V8.75C16.875 8.25272 17.0725 7.77581 17.4242 7.42417C17.7758 7.07254 18.2527 6.875 18.75 6.875H23.125C23.6223 6.875 24.0992 7.07254 24.4508 7.42417C24.8025 7.77581 25 8.25272 25 8.75V20.625C25 21.6196 24.6049 22.5734 23.9016 23.2766C23.1984 23.9799 22.2446 24.375 21.25 24.375H20.625V22.5H21.25C21.9103 22.5 22.5437 22.2366 23.0046 21.7679C23.4655 21.2992 23.7288 20.6658 23.7288 20.0055L24.375 15Z" fill="#6E9975"/>
                              </svg>
                            </div>
                            <p className="text-lg italic mb-6">{testimonial.quote}</p>
                            <div>
                              <h4 className="font-bold text-xl">{testimonial.name}</h4>
                              <p className="text-gray-600">{testimonial.location}</p>
                              <p className="text-laso-purple font-medium mt-1">Condition: {testimonial.condition}</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-md hover:bg-laso-cream transition-colors md:translate-x-12"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-laso-purple" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
