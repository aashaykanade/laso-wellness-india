
import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log("Submitting form data:", formData);
      
      // Get the Supabase project URL from the environment or use a placeholder
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project-id.supabase.co';
      
      // Send to Supabase Edge Function
      const response = await fetch(`${supabaseUrl}/functions/v1/send-to-google-sheets`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Function response error:', errorData);
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submission result:', result);

      // Show success toast
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for reaching out. Your message has been saved to Google Sheets and we'll contact you shortly.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        condition: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your form. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Visit Us</h4>
                  <p>Narayan Peth, Pune</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-laso-purple">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Call Us</h4>
                  <p>+91 9890038839</p>
                  <p>By appointment only</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-laso-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email Us</h4>
                  <p>lasowellness@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-laso-lightpurple rounded-lg">
              <h4 className="font-bold mb-3 text-laso-darkgreen">Online Consultations Available</h4>
              <p>
                We offer virtual consultations and distance healing sessions 
                for clients worldwide.
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
                disabled={isSubmitting}
                className="w-full bg-laso-purple hover:bg-laso-darkgreen text-white py-6 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
              
              <p className="text-sm text-gray-600 text-center">
                Your information is secure and will be saved to our Google Sheets for follow-up.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
