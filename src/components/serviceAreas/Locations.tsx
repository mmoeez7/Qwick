import Image from "next/image";
import Link from "next/link";

export default function Locations() {
  const locations = [
    {
      name: "New Jersey",
      image: "/ServiceAreas/newJersy.jpg",
      description: "Restaurant and commercial kitchen exhaust cleaning services throughout New Jersey, including key metro areas.",
      slug: "new-jersey",
    },
    {
      name: "Maryland",
      image: "/ServiceAreas/marryland.jpg",
      description: "NFPA-compliant hood cleaning and fire safety services for Maryland restaurants and commercial kitchens.",
      slug: "maryland",
    },
    {
      name: "Virginia",
      image: "/ServiceAreas/virginia.jpg",
      description: "Full-service kitchen exhaust, hood cleaning, and fire suppression support across Virginia.",
      slug: "virginia",
    },
    {
      name: "Washington, DC",
      image: "/ServiceAreas/washington.jpg",
      description: "Specialized commercial kitchen exhaust and fire safety services in Washington, DC.",
      slug: "washington-dc",
    },
    {
      name: "North Carolina",
      image: "/ServiceAreas/north-carolina.jpg",
      description: "Commercial kitchen exhaust and hood cleaning services for restaurants across North Carolina.",
      slug: "north-carolina",
    },
    {
      name: "Delaware",
      image: "/ServiceAreas/delaware.jpg",
      description: "Commercial kitchen exhaust and hood cleaning services for restaurants across Delaware.",
      slug: "delaware",
    },
    {
      name: "Pennsylvania",
      image: "/ServiceAreas/pennsylvania.jpg",
      description: "Kitchen exhaust, hood cleaning, and fire protection services for restaurants and commercial kitchens across Pennsylvania.",
      slug: "pennsylvania",
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
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-black/20 hover:scale-[1.02] transition-all duration-500 ease-in-out min-h-[240px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[230px] border border-transparent hover:border-[#A9FF3E]/30"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={location.image}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 33vw"
                />
              </div>

              {/* Overlay for text readability with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 group-hover:from-black/90 group-hover:via-black/40 group-hover:to-black/10 transition-all duration-500" />
              
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#A9FF3E]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-6 md:p-7 lg:p-8 transform transition-transform duration-500 group-hover:translate-y-0">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 transition-all duration-500 group-hover:text-[#C1FF72]">
                  {location.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6 transition-all duration-500 group-hover:text-white">
                  {location.description}
                </p>
                <Link
                  href={`/serviceArea/${location.slug}`}
                  className="inline-flex items-center gap-2 text-[#A9FF3E] hover:text-[#C1FF72] font-semibold text-sm sm:text-base transition-all duration-300 group/link"
                >
                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">Learn More</span>
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 group-hover/link:translate-x-2"
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
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
