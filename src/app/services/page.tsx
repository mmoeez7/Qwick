import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import KitchenMaintenance from "@/components/Services/KitchenMaintenance";

export default function ServicesPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader />
      
      {/* Qwick Services Section */}
      <QwickServices />

      {/* Kitchen Maintenance Section */}
      <KitchenMaintenance />
    </div>
  );
}

