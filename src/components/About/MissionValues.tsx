import Image from "next/image";

export default function MissionValues() {
  const values = [
    {
      title: "Safety first",
      description: "Every recommendation and service is grounded in fire code, NFPA 96 standards, and best practices for commercial cooking operations."
    },
    {
      title: "Reliability:",
      description: "On-time arrivals, clear scopes of work, and consistent quality from visit to visit—whether you operate a single location or a multi-unit group"
    },
    {
      title: "Transparency",
      description: "Before-and-after photos, detailed reports, and clear notes so you always know what was done, why it mattered, and what is due next."
    },
    {
      title: "Respect for your operation",
      description: "Night and off-hours scheduling, careful masking and cleanup, and technicians who treat your kitchen like their own workplace."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">
          <h2 
            data-animate
            className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[42px] font-bold leading-tight mb-8"
          >
            <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
              Our Mission & Values
            </span>
          </h2>
        </div>

        {/* Mission Statement */}
        <div className="mb-12 sm:mb-16">
          <p 
            data-animate
            className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed max-w-5xl"
          >
            To protect commercial kitchens from preventable fire and ventilation hazards by delivering NFPA-compliant exhaust cleaning, fire suppression service, and preventive maintenance with honesty, reliability, and professionalism.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              data-animate
              className="bg-gray-100 rounded-lg p-6 sm:p-8"
            >
              <div className="flex flex-col items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#A9FF3E] flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/About/comment.svg"
                    alt={value.title}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

