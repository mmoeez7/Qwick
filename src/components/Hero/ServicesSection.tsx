import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      icon: "/serviceSection/icon1.svg", // First icon
      title: "Routine Hood, Duct & Fan Cleaning",
      description: "Routine hood, duct, and fan cleaning to meet NFPA 96 standards, plus complete mechanical maintenance: fan belt replacements, hinge kit installation, rooftop grease containment, and access panel installations and repairs",
      badgeShape: "circle" // Icon in circle - Top-left
    },
    {
      icon: "/serviceSection/icon2.svg", // Lightning bolt
      title: "Fire Suppression & Makeup Air Solutions",
      description: "Certified inspection and testing of kitchen fire suppression systems. We also provide Make-Up Air unit service, air balancing, and supply air heating to ensure your kitchen remains safe, balanced, and compliant.",
      badgeShape: "square" // Lightning in square - Top-right
    },
    {
      icon: "/serviceSection/icon3.svg", // Filter/document icon
      title: "Multi-Stage Filtration Service",
      description: "We provide expert servicing for multi-stage filtration and pollution control units from brands like CaptiveAire, Halton, Accurex, and Gaylord. Our scope covers Water Wash technology, Electrostatic Precipitators (ESP), and media-based filtration, ensuring every unit operates at design specifications.",
      badgeShape: "square" // Filter icon in square - Bottom-left
    },
    {
      icon: "/serviceSection/icon4.svg", // Speech bubble
      title: "24/7 Emergency Support",
      description: "On-call technicians for urgent cleanings, shutdowns, or fire-related issues that can't wait",
      badgeShape: "square" // Speech bubble in square - Bottom-right
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Safety, Compliance & Reliability
          </h2>
          <p className="text-base sm:text-md md:text-xl text-gray-700 max-w-7xl mx-auto leading-relaxed">
            Qwick Services and Solutions LLC keeps your commercial kitchen compliant, safe, <br />and open for business with scheduled exhaust cleaning, certified fire protection service, and fast emergency response.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative ${index === 1 || index === 2 ? 'bg-[#F1FFDF]' : 'bg-[#F9FAFB]'} rounded-lg sm:rounded-xl p-6 sm:p-8 hover:shadow-lg transition-shadow ${
                index === 0 || index === 1 
                  ? 'md:col-span-3' 
                  : index === 2 
                  ? 'md:col-span-4' 
                  : 'md:col-span-2'
              }`}
            >
              {/* Icon Badge */}
              <div className={`absolute  w-10 h-10 sm:w-14 sm:h-14 bg-[#C1FF72] rounded-md flex items-center justify-center shadow-lg z-10`}>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-6 sm:h-6"
                />
              </div>

              {/* Content */}
              <div className="pt-14 sm:pt-16">
                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

