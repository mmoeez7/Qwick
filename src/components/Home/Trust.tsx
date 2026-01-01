import Image from "next/image";

export default function Trust() {
  const services = [
    "Scheduled exhaust and hood cleaning programs",
    "Certified NFPA 96 and fire code compliance service",
    "Detailed after-service photos and reports",
    "24/7 emergency response for urgent issues"
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-gray-800 text-center mb-2 sm:mb-4 md:mb-6 px-2">
          Trusted by Restaurateurs, Backed by Fire-Safety Experts
        </h2>

        {/* Description Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-700 text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 leading-relaxed px-2 text-center">
          Qwick Services and Solutions LLC is run by technicians who specialize in commercial kitchen exhaust and fire protection. Restaurants, hotels, and commercial kitchens across NJ, MD, VA, DC, DE, PA, and NC rely on us to stay clean, safe, and code-compliant.
        </p>

        {/* Services Grid/Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0"
            >
              {/* Checkmark Icon */}
              <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                <Image
                  src="/Home/Trust/checkmark.svg"
                  alt="Checkmark"
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </div>
              
              {/* Service Text */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-bold">
                {service}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

