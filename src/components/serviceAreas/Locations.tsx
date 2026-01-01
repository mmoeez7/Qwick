import Image from "next/image";

export default function Locations() {
  const locations = [
    {
      name: "New Jersey",
      image: "/ServiceAreas/newJersy.jpg",
      description: "Restaurant and commercial kitchen exhaust cleaning services throughout New Jersey, including key metro areas.",
    },
    {
      name: "Maryland",
      image: "/ServiceAreas/marryland.jpg",
      description: "NFPA-compliant hood cleaning and fire safety services for Maryland restaurants and commercial kitchens.",
    },
    {
      name: "Virginia",
      image: "/ServiceAreas/virginia.jpg",
      description: "Full-service kitchen exhaust, hood cleaning, and fire suppression support across Virginia.",
    },
    {
      name: "Washington, DC",
      image: "/ServiceAreas/washington.jpg",
      description: "Specialized commercial kitchen exhaust and fire safety services in Washington, DC.",
    },
    {
      name: "North Carolina",
      image: "/ServiceAreas/north-carolina.jpg",
      description: "Commercial kitchen exhaust and hood cleaning services for restaurants across North Carolina.",
    },
    {
      name: "Delaware",
      image: "/ServiceAreas/delaware.jpg",
      description: "Commercial kitchen exhaust and hood cleaning services for restaurants across Delaware.",
    },
    {
      name: "Pennsylvania",
      image: "/ServiceAreas/pennsylvania.jpg",
      description: "Kitchen exhaust, hood cleaning, and fire protection services for restaurants and commercial kitchens across Pennsylvania.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Grid of Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              data-animate
              className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 min-h-[240px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[230px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 33vw"
                />
              </div>

              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-7 lg:p-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {location.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6">
                  {location.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#A9FF3E] hover:text-[#C1FF72] font-semibold text-sm sm:text-base transition-colors group"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
