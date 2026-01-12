import Image from "next/image";

export default function ChooseUs() {
  const services = [
    {
      icon: "/Home/ChooseUs/sheild.svg",
      title: "Routine inspections, testing, and tagging of suppression systems",
    },
    {
        icon: "/Home/ChooseUs/touch.svg",
        title: "Nozzle, detection, and cylinder checks for code compliance",
      },
      {
        icon: "/Home/ChooseUs/repair.svg",
        title: "Repair and recharge options to restore protection quickly",
      }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start lg:items-center">
          {/* Left Section - Image with Overlay */}
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full lg:min-h-[500px] xl:min-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center order-2 lg:order-1">
            <Image
              src="/Van.svg"
              alt="Kitchen Maintenance and Care"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Section - Service Cards */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-[#E6FFC7] flex items-center justify-center p-2">
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

