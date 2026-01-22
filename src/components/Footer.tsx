import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <p className="text-primary/80 text-sm font-sans tracking-widest uppercase mb-1">Dra.</p>
              <p className="font-serif text-3xl font-light">Jessica Chen</p>
            </div>
            <p className="text-background/60 leading-relaxed max-w-md">
              Dermatologista especializada em tratamentos estéticos avançados. 
              Cuidando da sua pele com ciência e carinho.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
            <nav className="space-y-3">
              <a href="#procedures" className="block text-background/60 hover:text-primary transition-colors">
                Procedimentos
              </a>
              <a href="#about" className="block text-background/60 hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#results" className="block text-background/60 hover:text-primary transition-colors">
                Resultados
              </a>
              <a href="#location" className="block text-background/60 hover:text-primary transition-colors">
                Localização
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a href="tel:+5511999999999" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <a href="mailto:contato@drajessicachen.com" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                contato@drajessica.com
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-background/60 hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
                @dra.jessicachen
              </a>
              <div className="flex items-start gap-3 text-background/60">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Helbor Concept Office<br />Mogi das Cruzes, SP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Dra. Jessica Chen. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-sm">
            CRM-SP 123456 | RQE 12345
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
