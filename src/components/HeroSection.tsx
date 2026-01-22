import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p 
            className="text-primary-foreground/80 font-sans text-sm tracking-[0.3em] uppercase mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Dermatologista Especialista
          </p>
          
          <h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 opacity-0 animate-fade-up leading-tight"
            style={{ animationDelay: "0.4s" }}
          >
            Dra. Jessica
            <br />
            <span className="text-gradient-gold font-medium italic">Chen</span>
          </h1>
          
          <p 
            className="text-primary-foreground/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            Tratamentos personalizados para revelar a beleza natural da sua pele. 
            Tecnologia avançada com cuidado humanizado.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Button variant="hero" size="xl">
              Agendar Consulta
            </Button>
            <Button variant="heroOutline" size="xl">
              Conhecer Procedimentos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#procedures"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
