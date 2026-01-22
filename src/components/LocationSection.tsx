import { useEffect, useRef, useState } from "react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const LocationSection = () => {
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
      id="location"
      ref={sectionRef}
      className="py-24 md:py-32 gradient-nude relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Map Side */}
          <div 
            className={`relative rounded-3xl overflow-hidden shadow-elegant h-[500px] ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14634.283540245207!2d-46.170312806945795!3d-23.51196095818028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdd98e9558c977%3A0x6d494abb60e882cc!2sDra.%20J%C3%A9ssica%20Chen%20-%20Dermatologista%20Mogi%20das%20Cruzes!5e0!3m2!1spt-BR!2sbr!4v1769117320254!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Clínica"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            />
            
            {/* Floating Address Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-elegant">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground">Helbor Concept Office</p>
                  <p className="text-sm text-muted-foreground">Mogi das Cruzes, SP - 08780-500</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Side */}
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4">
              Onde Estamos
            </p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-8">
              Agende sua <span className="italic text-primary">Consulta</span>
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <Clock className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Horário de Atendimento</p>
                  <p className="text-muted-foreground text-sm">Segunda a Sexta: 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <Phone className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Telefone</p>
                  <p className="text-muted-foreground text-sm">(11) 99999-9999</p>
                  <p className="text-muted-foreground text-sm">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                <Instagram className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Instagram</p>
                  <p className="text-muted-foreground text-sm">@dra.jessicachen</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="flex-1">
                Agendar pelo WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
