import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-rose shadow-elegant flex items-center justify-center hover:scale-110 transition-transform duration-300 hover-glow group"
  >
    <i className="fab fa-whatsapp text-3xl text-primary-foreground group-hover:scale-110 transition-transform"><MessageCircle /></i>
  </a>
);

export default FloatingWhatsApp;
