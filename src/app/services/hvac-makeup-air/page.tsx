import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";

import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";
import HvacMaintenance from "@/components/Services/HvacMaintenance";

export default function HVACMakeupAirPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />

      {/* Services Header */}
      <ServicesHeader title="HVAC & Make‑Up Air" imageSrc="/Services/makeupAir.png" />

      {/* Qwick Services Section */}
      <QwickServices serviceSlug="hvac-makeup-air" />

      {/* Kitchen Maintenance Section */}
      <HvacMaintenance />

      {/* Services Area Section */}
      <ServicesArea />

      {/* Service Schedule Section */}
      <ServiceSchedule />

      {/* Footer */}
      <Footer />
    </div>
  );
}

