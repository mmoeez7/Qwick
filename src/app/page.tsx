import { Header, HeroContent, ServicesSection, WhatQwickCanDoSection } from "@/app/hero";
import Trust from "@/components/Trust";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";
import Customers from "@/components/Customers";
import ChooseUs from "@/components/ChooseUs";

export default function Home() {
  return (
    <div className="relative h-auto">
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <HeroContent />

      {/* Services Section */}
      <ServicesSection />

      {/* What Qwick Can Do Section */}
      <WhatQwickCanDoSection />

      {/*Customer says*/}
      <Customers />

      {/* Why Choose Us Section */}
      <ChooseUs />

      {/* Trust Section */}
      <Trust />

      {/* Schedule Section */}
      <Schedule />

      {/* Footer */}
      <Footer />
    </div>
  );
}
