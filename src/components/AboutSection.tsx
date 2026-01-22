import { useEffect, useRef, useState } from "react";
import { Award, Heart, Star } from "lucide-react";
import aboutDoctor from "@/assets/about-doctor.png";

const stats = [
  { icon: Award, value: "+10", label: "Anos de Experiência" },
  { icon: Heart, value: "+5.000", label: "Pacientes Atendidos" },
  { icon: Star, value: "4.9", label: "Avaliação Google" },
];

const AboutSection = () => {
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div 
            className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src={aboutDoctor}
                  alt="Dra. Jessica Chen"
                  className="w-full h-[600px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl p-6 shadow-elegant border border-border max-w-xs">
                <p className="font-serif text-lg italic text-foreground mb-2">
                  "Cada pele é única e merece um tratamento personalizado."
                </p>
                <p className="text-sm text-primary font-semibold">— Dra. Jessica Chen</p>
              </div>

              {/* Decorative Ring */}
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-full border-2 border-primary/20" />
            </div>
          </div>

          {/* Content Side */}
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Quem Cuida de Você
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6">
              Dra. Jessica <span className="italic text-primary">Chen</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Médica Dermatologista formada pela USP, com especialização em 
                procedimentos estéticos avançados e harmonização facial.
              </p>
              <p>
                Membro da Sociedade Brasileira de Dermatologia e da Academia 
                Americana de Dermatologia, com foco em tratamentos personalizados 
                que respeitam a individualidade de cada paciente.
              </p>
              <p>
                Minha missão é ajudar você a conquistar uma pele saudável e 
                radiante, combinando ciência de ponta com um olhar humanizado.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="font-serif text-2xl font-semibold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
