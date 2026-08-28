import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "919890038839";
  const message = encodeURIComponent("Hi, I'd like to know more about your healing services.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-24 right-4 md:right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 md:px-6 py-3.5 md:py-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-105 group border border-white/20"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="text-sm md:text-base font-semibold">Chat with us</span>
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full animate-ping border-2 border-[#25D366]" />
      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-[#25D366]" />
    </a>
  );
};

export default WhatsAppButton;
