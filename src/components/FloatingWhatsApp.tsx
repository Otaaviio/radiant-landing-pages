import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-rose shadow-elegant flex items-center justify-center hover:scale-110 transition-transform duration-300 hover-glow group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-4 py-2 rounded-lg bg-card text-foreground text-sm font-medium shadow-soft whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Agende pelo WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
