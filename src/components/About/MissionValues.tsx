export default function MissionValues() {
  const values = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Safety first",
      description: "Every recommendation and service is grounded in fire code, NFPA 96 standards, and best practices for commercial cooking operations."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Reliability:",
      description: "On-time arrivals, clear scopes of work, and consistent quality from visit to visit—whether you operate a single location or a multi-unit group"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Transparency",
      description: "Before-and-after photos, detailed reports, and clear notes so you always know what was done, why it mattered, and what is due next."
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
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
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-[#A9FF3E] flex items-center justify-center flex-shrink-0 text-white">
                  {value.icon}
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

