import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import SupperessionMaintenance from "@/components/Services/SupperessionMaintenance";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";

export default function FireSuppressionPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader title="Fire Suppression Service" imageSrc="/Services/firesupression.jpg" />
      
      {/* Qwick Services Section */}
      <QwickServices serviceSlug="fire-suppression" />

      {/* Kitchen Maintenance Section */}
      <SupperessionMaintenance />

      {/* Services Area Section */}
      <ServicesArea />

      {/* Service Schedule Section */}
      <ServiceSchedule />       

      {/* Footer */}
      <Footer />
    </div>
  );
}

