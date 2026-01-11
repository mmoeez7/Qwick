import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";
import VentilationProblems from "@/components/Services/VentilationProblems";
import MechanicalServices from "@/components/Services/MechanicalServices";

export default function MechanicalPreventiveMaintenancePage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader title="Mechanical Preventive Maintenance" />
      
      {/* Qwick Services Section */}
      <QwickServices serviceSlug="mechanical-preventive-maintenance" />

      {/* Mechanical Services Section */}
      <MechanicalServices />

      {/* Ventilation Problems Section */}
      <VentilationProblems imageSrc="/ventilation.jpg" />

      {/* Services Area Section */}
      <ServicesArea />

      {/* Service Schedule Section */}
      <ServiceSchedule />       

      {/* Footer */}
      <Footer />
    </div>
  );
}

