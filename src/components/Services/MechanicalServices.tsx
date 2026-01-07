import Image from "next/image";

export default function MechanicalServices() {
  const services = [
    {
      icon: "/Home/serviceSection/icon1.svg",
      title: "Exhaust Fan Repair",
      description: "Replacement of worn belts, seized bearings, and burnt-out motors."
    },
    {
      icon: "/Home/serviceSection/icon3.svg",
      title: "Fan Replacement",
      description: "Installation of new Upblast or Utility Set exhaust fans when repairs aren't enough."
    },
    {
      icon: "/Home/serviceSection/icon2.svg",
      title: "VFD Solutions",
      description: "Troubleshooting and installing Variable Frequency Drives to control fan speed and energy usage."
    },
    {
      icon: "/Home/serviceSection/icon4.svg",
      title: "Make-Up Air (MUA) Service",
      description: "Servicing filters and belts on your supply air units to prevent \"negative pressure\" and slamming doors."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            {/* Icon */}
            <div 
              data-animate
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C1FF72] flex items-center justify-center"
            >
              <Image
                src="/Services/Fast.svg"
                alt="Lightning bolt"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>

            {/* Heading */}
            <h2 
              data-animate
              className="flex flex-wrap text-[24px] sm:text-[36px] md:text-[42px] lg:text-[42px] font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
                Our Mechanical Services
              </span>
            </h2>

            {/* Descriptive Paragraph */}
            <p 
              data-animate
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              Our PCU service programs are tailored to the specific configuration and duty of your system. Typical services include:
            </p>

            {/* Call-to-Action Box */}
            <div 
              data-animate
              className="bg-[#B7F46C] rounded-2xl p-6 sm:p-8"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                Hearing a rattle?
              </h3>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                A noisy fan is a warning sign. Call us before it fails during the dinner rush.
              </p>
            </div>
          </div>

          {/* Right Section - Service Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  data-animate
                  className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-[#C1FF72] rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

