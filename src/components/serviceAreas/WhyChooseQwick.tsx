import Image from "next/image";

interface WhyChooseQwickProps {
  stateName: string;
}

export default function WhyChooseQwick({ stateName }: WhyChooseQwickProps) {
  const benefits = [
    "NFPA 96 compliance and certified technicians",
    "Before-and-after photos and detailed service reports",
    "Flexible scheduling, including night and weekend service",
    "24/7 emergency response for urgent issues"
  ];

  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <h2 
          data-animate
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-2"
        >
          Why Qwick Services and Solutions LLC for {stateName} Kitchens:
        </h2>

        {/* Benefits Grid/Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-animate
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
              
              {/* Benefit Text */}
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-bold">
                {benefit}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

