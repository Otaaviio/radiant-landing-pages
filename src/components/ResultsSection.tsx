import { useEffect, useRef, useState } from "react";
import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";
import skinTreatment from "@/assets/skin-treatment.jpg";

const results = [
  {
    image: beforeAfter1,
    title: "Tratamento de Acne",
    description: "Protocolo completo para pele oleosa e com acne.",
  },
  {
    image: beforeAfter2,
    title: "Harmonização Facial",
    description: "Naturalidade e equilíbrio nos traços faciais.",
  },
  {
    image: skinTreatment,
    title: "Rejuvenescimento",
    description: "Estímulo de colágeno para pele mais jovem.",
  },
];

const ResultsSection = () => {
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
      id="results"
      ref={sectionRef}
      className="py-24 md:py-32 bg-foreground relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full border border-background" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border border-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p 
            className={`text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
          >
            Casos de Sucesso
          </p>
          <h2 
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-background mb-6 ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Resultados <span className="italic text-primary">Reais</span>
          </h2>
          <p 
            className={`text-background/70 text-lg ${
              isVisible ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.3s" }}
          >
            Acompanhe a transformação dos nossos pacientes com tratamentos personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div
              key={result.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background">
                <h3 className="font-serif text-2xl mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {result.title}
                </h3>
                <p className="text-sm text-background/80 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {result.description}
                </p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div 
          className={`mt-16 max-w-3xl mx-auto text-center ${
            isVisible ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <blockquote className="font-serif text-2xl md:text-3xl text-background/90 italic leading-relaxed mb-6">
            "Eu sei como a acne pode afetar a autoestima. Ver vocês conquistando 
            confiança não tem preço."
          </blockquote>
          <p className="text-primary font-semibold">— Dra. Jessica Chen</p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
