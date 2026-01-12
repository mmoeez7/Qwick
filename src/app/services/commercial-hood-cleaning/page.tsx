import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import KitchenMaintenance from "@/components/Services/KitchenMaintenance";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";

export default function CommercialHoodCleaningPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader title="Commercial Hood Cleaning & NFPA 96 Compliance" imageSrc="/Services/hood.jpg" />
      
      {/* Qwick Services Section */}
      <QwickServices serviceSlug="commercial-hood-cleaning" />

      {/* Kitchen Maintenance Section */}
      <KitchenMaintenance />

      {/* Services Area Section */}
      <ServicesArea />

      {/* Service Schedule Section */}
      <ServiceSchedule />       

      {/* Footer */}
      <Footer />
    </div>
  );
}

