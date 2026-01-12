import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";
import EmergencyMaintenance from "@/components/Services/EmergencyMaintenance";

export default function EmergencyServicePage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader title="Emergency Service" imageSrc="/Services/emerency.png" />
      
      {/* Qwick Services Section */}
      <QwickServices serviceSlug="emergency-service" />

      {/* Kitchen Maintenance Section */}
     <EmergencyMaintenance />

      {/* Services Area Section */}
      <ServicesArea />

      {/* Service Schedule Section */}
      <ServiceSchedule />       

      {/* Footer */}
      <Footer />
    </div>
  );
}

