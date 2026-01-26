import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#hero" },
    { label: "Procedimentos", href: "#procedures" },
    { label: "Sobre", href: "#about" },
    { label: "Resultados", href: "#results" },
    { label: "FAQ", href: "#faq" },
    { label: "Localização", href: "#location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-semibold tracking-wide">
            <span className="text-muted-foreground text-sm font-sans tracking-widest uppercase">Dra.</span>
            <br />
            <span className="text-foreground">Marina Razé</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium tracking-wide transition-all duration-300 hover:opacity-70 text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a href="https://api.whatsapp.com/send?phone=5511930982272&text=Oi,+gostaria+de+informa%C3%A7%C3%B5es+sobre+a+consulta+com+a+Dra.+J%C3%A9ssica+Razé." target="_blank" rel="noopener noreferrer">
            <Button variant={isScrolled ? "hero" : "elegant"} size="lg">
              Agendar Consulta
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-soft animate-fade-up">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground text-lg font-medium py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="https://api.whatsapp.com/send?phone=5511930982272&text=Oi,+gostaria+de+informa%C3%A7%C3%B5es+sobre+a+consulta+com+a+Dra.+J%C3%A9ssica+Razé." target="_blank" rel="noopener noreferrer" className="mt-4">
              <Button variant="hero" size="xl" className="w-full">
                Agendar Consulta
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
