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
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="text-sm font-semibold hidden sm:inline">Chat with us</span>
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  );
};

export default WhatsAppButton;
