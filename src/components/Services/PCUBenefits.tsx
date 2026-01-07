import Image from 'next/image';

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export default function PCUBenefits() {
  const benefits: Benefit[] = [
    {
      title: "Reliable performance",
      description: "Maintain grease, smoke, and odor capture at design levels to protect indoor and outdoor air quality.",
      icon: "/Home/serviceSection/icon1.svg"
    },
    {
      title: "Protected equipment",
      description: "Reduce strain on fans, motors, and controls caused by clogged cells and filters, helping prevent premature failures.",
      icon: "/Home/serviceSection/icon2.svg"
    },
    {
      title: "Compliance support",
      description: "Helps address landlord requirements, mechanical codes, and local emission or nuisance standards related to discharge.",
      icon: "/Home/serviceSection/icon3.svg"
    },
    {
      title: "Predictable scheduling",
      description: "Planned service intervals based on cooking volume, unit type, and operating hours.",
      icon: "/Home/serviceSection/icon4.svg"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h2 
            data-animate
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4"
          >
            <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
              Benefits of a PCU Maintenance Program
            </span>
          </h2>
          <p 
            data-animate
            className="text-base sm:text-lg md:text-xl text-gray-700 font-bold"
          >
            We offer the best maintenance benefits
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-animate
              className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#C1FF72] rounded-lg flex items-center justify-center">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

