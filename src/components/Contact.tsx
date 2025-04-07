
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    condition: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for reaching out. We'll contact you shortly.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      condition: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Contact Us</h2>
          <div className="w-20 h-1 bg-laso-purple mx-auto mb-6"></div>
          <p className="text-lg">
            Take the first step towards healing. Contact us to schedule a consultation or learn more about how 
            we can help with your specific condition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-laso-cream/30 p-8 rounded-lg animate-fade-in-left">
            <h3 className="text-2xl font-serif font-bold text-laso-darkgreen mb-6">
              Our Healing Center
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 text-laso-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Us</h4>
                  <p>123 Healing Way, Wellness District</p>
                  <p>New Delhi, India 110001</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-laso-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p>+91 98765 43210</p>
                  <p>Monday - Saturday: 9AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-laso-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p>info@lasowellness.com</p>
                  <p>healing@lasowellness.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-laso-lightpurple rounded-lg">
              <h4 className="font-bold mb-3 text-laso-darkgreen">Online Consultations Available</h4>
              <p>
                Can't visit in person? We offer virtual consultations and distance healing sessions 
                for clients worldwide. Our energy healing techniques work effectively regardless of 
                physical distance.
              </p>
            </div>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-8 animate-fade-in-right">
            <h3 className="text-2xl font-serif font-bold text-laso-darkgreen mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email Address</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone Number</label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="condition" className="block mb-2 font-medium">Health Condition (if any)</label>
                <Input 
                  id="condition" 
                  name="condition" 
                  value={formData.condition} 
                  onChange={handleChange} 
                  placeholder="Describe your condition or concern"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  placeholder="How can we help you?"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-laso-purple hover:bg-laso-darkgreen text-white py-6"
              >
                Send Message
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Your information is secure and will never be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
