import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import QwickServices from "@/components/Services/QwickServices";
import KitchenMaintenance from "@/components/Services/KitchenMaintenance";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import ServiceSchedule from "@/components/Services/ServiceSchedule";
import ServiceFeatures from "@/components/Services/ServiceFeatures";
import EquipmentServices from "@/components/Services/EquipmentServices";

export default function PollutionControlUnitPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Services Header */}
      <ServicesHeader title="Pollution Control Unit (PCU) Service" />
      
      {/* Qwick Services Section */}
      <QwickServices serviceSlug="pollution-control-unit" />

      {/* Service Features Section */}
      <ServiceFeatures
        heading={{
          highlight: "Our PCU Services"
        }}
        introText="Our PCU service programs are tailored to the specific configuration and duty of your system. Typical services include:"
        imageSrc="/Services/PCU.png"
        imageAlt="PCU Service illustration"
        features={[
          {
            title: "ESP Cell Cleaning",
            icon: "/Services/Click.svg",
            description: "We remove, soak, and clean electrostatic precipitator cells using manufacturer-appropriate detergents and wash methods to restore ionization efficiency and collection performance. This helps maintain high capture rates for fine grease and smoke while keeping pressure drop within design limits."
          },
          {
            title: "Carbon Bank Exchange",
            icon: "/Services/Comment.svg",
            description: "Our team removes and replaces saturated activated carbon panels or odor media to restore odor control performance and reduce complaints from neighbors, guests, or nearby tenants. Media handling and disposal follow recommended practices for used carbon."
          },
          {
            title: "HEPA & Bag Filter Replacement",
            icon: "/Services/Fast.svg",
            description: "We schedule and perform replacement of pre-filters, bag filters, MERV-rated media, and HEPA modules to maintain proper airflow and static pressure through the unit. Correct filter change intervals help prevent fan overload, nuisance shutdowns, and control faults."
          },
          {
            title: "System Diagnostics & Inspection",
            icon: "/Services/Light.svg",
            description: "Technicians inspect detergent wash systems, pumps, and spray manifolds where installed, check UV lamps or other advanced stages if equipped, and verify readings on differential pressure / Magnarelli gauges against acceptable ranges. Any abnormal conditions are documented with recommendations."
          }
        ]}
      />

      {/* Equipment Services Section */}
      <EquipmentServices
        heading={{
          highlight: "Equipment We Commonly Service"
        }}
        introText="Qwick Solutions services a wide range of commercial kitchen PCUs and related technologies, including but not limited to:"
        buttonText="Hire Us Today"
        buttonLink="#"
        imageSrc="/Services/PCU.png"
        imageAlt="Equipment service illustration"
        equipment={[
          {
            title: "Captive Aire PCU and SP-equipped systems",
            icon: "/Services/Pie.svg",
            iconColor: "green"
          },
          {
            title: "Halton and Accurex pollution control units",
            icon: "/Services/Balloon.svg",
            iconColor: "orange"
          },
          {
            title: "ESP-based filtration modules and media-only systems",
            icon: "/Services/Crown.svg",
            iconColor: "purple"
          },
          {
            title: "Integrated odor control and carbon modules",
            icon: "/Services/Hand.svg",
            iconColor: "blue"
          }
        ]}
        disclaimer="If your unit is not listed, our team can review the model documentation and develop a maintenance plan consistent with manufacturer guidance"
      />

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

