import Image from "next/image";

export default function ChooseUs() {
  const services = [
    {
      icon: "/ChooseUs/sheild.svg",
      title: "Certified NFPA 96 Experts",
      description: "Ensure your kitchen meets all fire safety codes with certified commercial exhaust technicians.",
      link: "Learn More →"
    },
    {
      icon: "/ChooseUs/timer.svg",
      title: "24/7 Emergency Response",
      description: "Immediate support for urgent kitchen issues so you can stay open and compliant.",
      link: "Learn More →"
    },
    {
      icon: "/ChooseUs/repair.svg",
      title: "Preventive Maintenance",
      description: "Regular inspections and cleaning to prevent breakdowns, protect equipment, avoid failed inspections.",
      link: "Learn More →"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading and Description */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
              Why Choose
            </span>{" "}
            <span className="text-gray-800">Us</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Restaurants trust Qwick for reliable, code-compliant kitchen exhaust and fire safety service across NJ, MD, VA, DC, DE, PA, and NC.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Section - Service Cards */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-[#C1FF72] flex items-center justify-center p-2 sm:p-3">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      {service.description}
                    </p>
                    <a
                      href="#"
                      className="text-sm sm:text-base font-semibold text-[#1a5d1a] hover:text-[#A9FF3E] transition-colors inline-flex items-center gap-1"
                    >
                      {service.link}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section - Image with Overlay */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src="/ChooseUs/ChooseUS.svg"
              alt="Kitchen Maintenance and Care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            
            {/* Dark Green Overlay */}
            <div className="absolute bottom-0 right-0 w-full sm:w-3/4 md:w-2/3 lg:w-3/5 bg-[#1a5d1a] p-6 sm:p-8 md:p-10 lg:p-12 rounded-tl-xl sm:rounded-tl-2xl">
              {/* Logo */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#1a5d1a] rounded-lg flex items-center justify-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#A9FF3E] rounded-lg flex items-center justify-center">
                    <span className="text-[#1a5d1a] font-bold text-xl sm:text-2xl md:text-3xl">Q</span>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Kitchen Maintenance
                <br />
                and Care
              </h3>

              {/* Footer Text */}
              <p className="text-sm sm:text-base md:text-lg text-white/90">
                Essential Tips for a Beautiful Kitchen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

