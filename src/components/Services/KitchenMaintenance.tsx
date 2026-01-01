import Image from "next/image";

export default function ChooseUs() {
  const services = [
    {
      icon: "/Home/ChooseUs/sheild.svg",
      title: "Interior hood and duct degreasing for better airflow and safety",
    },
    {
        icon: "/Home/ChooseUs/sheild.svg",
        title: "Interior hood and duct degreasing for better airflow and safety",
      },
      {
        icon: "/Home/ChooseUs/sheild.svg",
        title: "Interior hood and duct degreasing for better airflow and safety",
      }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F9F9F9] h-[70dvh]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl -mt-45 ">

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          {/* Left Section - Image with Overlay */}
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center">
            <Image
              src="/Home/ChooseUs/ChooseUS.svg"
              alt="Kitchen Maintenance and Care"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right Section - Service Cards */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-5 md:space-y-6">
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

