import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroDoctor})` }}
      />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-transparent to-secondary/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-12 opacity-0 animate-fade-up leading-tight"
            style={{ animationDelay: "0.3s" }}
          >
            Dra. Jessica
            <br />
            <span className="text-gradient-gold font-medium italic">Chen</span>
          </h1>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button variant="hero" size="xl">
              Agendar Consulta
            </Button>
            <Button variant="elegant" size="xl">
              Conhecer Procedimentos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#procedures"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/50 hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
