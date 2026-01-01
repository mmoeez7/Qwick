import { Header, HeroContent, ServicesSection, WhatQwickCanDoSection } from "@/app/hero";
import Trust from "@/components/Home/Trust";
import Schedule from "@/components/Home/Schedule";
import Footer from "@/components/Footer/Footer";
import Customers from "@/components/Home/Customers";
import ChooseUs from "@/components/Home/ChooseUs";

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
