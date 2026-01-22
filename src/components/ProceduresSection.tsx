import { useEffect, useRef, useState } from "react";
import { Sparkles, Syringe, Scan } from "lucide-react";

const procedures = [
  {
    icon: Sparkles,
    name: "Harmonização Facial",
    description: "Realce seus traços naturais com técnicas avançadas de harmonização e rejuvenescimento.",
  },
  {
    icon: Syringe,
    name: "Bioestimuladores",
    description: "Estimule a produção natural de colágeno para uma pele mais firme e jovem.",
  },
  {
    icon: Scan,
    name: "Laser & Tecnologia",
    description: "Tratamentos a laser para manchas, cicatrizes e rejuvenescimento avançado.",
  },
];

const ProceduresSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="procedures"
      ref={sectionRef}
      className="py-24 md:py-32 gradient-nude relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className={`text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Nossos Procedimentos
          </p>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Procedimentos <span className="italic text-primary">Exclusivos</span>
          </h2>
          <p 
            className={`text-muted-foreground text-lg ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Tratamentos dermatológicos de alta performance para resultados visíveis e duradouros.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <div
              key={procedure.name}
              className={`group bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-2xl gradient-rose flex items-center justify-center mb-6 shadow-elegant group-hover:scale-110 transition-transform duration-500">
                <procedure.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {procedure.name}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {procedure.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  Saiba mais →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
