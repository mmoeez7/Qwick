import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";
import GreaseMaintenance from "@/components/Services/GreaseMaintenance";

export default function GreaseTrapLineJettingPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader title="Grease trap and Line jetting services" imageSrc="/Services/grease.png" />
      
      {/* Qwick Services Section */}
      <QwickServices serviceSlug="grease-trap-line-jetting" />

      {/* Kitchen Maintenance Section */}
      <GreaseMaintenance />

      {/* Services Area Section */}
      <ServicesArea />

      {/* Service Schedule Section */}
      <ServiceSchedule />       

      {/* Footer */}
      <Footer />
    </div>
  );
}

