import { lazy, Suspense } from "react";
import NavBar from "@/components/layout/NavBar";
import HeroSection from "@/components/sections/hero/HeroSection";
import FooterSection from "@/components/layout/FooterSection";

const CertificationSection = lazy(() => import("@/components/sections/certification/CertificationSection"));
const TransparencySection = lazy(() => import("@/components/sections/transparency/TransparencySection"));
const CargoSection = lazy(() => import("@/components/sections/cargo/CargoSection"));
const ChinaPartnersSection = lazy(() => import("@/components/sections/china-partners/ChinaPartnersSection"));
const DeliverySection = lazy(() => import("@/components/sections/delivery/DeliverySection"));
const StorageBlock = lazy(() => import("@/components/sections/storage/StorageBlock"));
const AboutSection = lazy(() => import("@/components/sections/about/AboutSection"));
const InsuranceBlock = lazy(() => import("@/components/sections/insurance/InsuranceBlock"));
const WhySection = lazy(() => import("@/components/sections/why/WhySection"));
const TestimonialsSection = lazy(() => import("@/components/sections/testimonials/TestimonialsSection"));
const FaqSection = lazy(() => import("@/components/sections/faq/FaqSection"));

function SectionFallback() {
  return <div className="min-h-[200px] section-spacing" aria-hidden />;
}

export default function Index() {
  return (
    <div className="min-h-screen bg-milk">
      <NavBar />
      <main className="section-spacing">
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
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
        </Suspense>
      </main>
      <FooterSection />
    </div>
  );
}
