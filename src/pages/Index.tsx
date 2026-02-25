import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import CargoSection from "@/components/CargoSection";
import ChinaPartnersSection from "@/components/ChinaPartnersSection";
import DeliverySection from "@/components/DeliverySection";
import InsuranceBlock from "@/components/InsuranceBlock";
import CertificationSection from "@/components/CertificationSection";
import TransparencySection from "@/components/TransparencySection";
import AboutSection from "@/components/AboutSection";
import StorageBlock from "@/components/StorageBlock";
import WhySection from "@/components/WhySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-milk">
      <NavBar />
      <main className="section-spacing">
        <HeroSection />
        <CertificationSection />
        <TransparencySection />
        <CargoSection />
        <ChinaPartnersSection />
        <DeliverySection />
        <StorageBlock />
        <AboutSection />
        <InsuranceBlock />
        <WhySection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <FooterSection />
    </div>
  );
}
