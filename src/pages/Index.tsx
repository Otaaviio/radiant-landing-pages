import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProceduresSection from "@/components/ProceduresSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProceduresSection />
      <AboutSection />
      <ResultsSection />
      <LocationSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
