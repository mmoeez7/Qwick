import Image from "next/image";

export default function WhoWeServe() {
  const customers = [
    "Independent and multi-unit restaurants",
    "Hotels, resorts, and event venues",
    "Universities, schools, and campus dining",
    "Hospitals, senior living, and healthcare facilities",
    "Corporate cafeterias and institutional kitchens",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Half Green, Half White Background - Horizontal Split */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 right-0 h-1/2 bg-white "></div>
        <div className="absolute left-0 bottom-0 right-0 h-1/2  bg-[#E6FFC7]"></div>
      </div>

      {/* Background Pattern - Subtle curved lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="#FFFBFC" strokeWidth="2" fill="none" />
          <path d="M0,500 Q300,300 600,500 T1200,500" stroke="#A9FF3E" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-5 lg:gap-8">
          {/* Left Side - Image */}
          <div className="relative w-full lg:w-1/3 h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px] xl:h-[520px] bg-gray-100 rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden">
            <Image
              src="/About/aboutus.jpg"
              alt="Qwick Services team"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side - Content Card */}
          <div className="w-full lg:w-2/3">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
                Who We Serve
              </span>
            </h2>

            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg h-full p-6 sm:p-8 md:p-10 lg:p-6">

              {/* Introductory Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-6 sm:mb-8">
                Qwick Services and Solutions LLC supports a wide range of commercial kitchen operations across New Jersey, Maryland, Virginia, Washington, DC, Delaware, Pennsylvania, and North Carolina.
              </p>

              {/* Subtitle */}
              <h3 className="text-base sm:text-lg md:text-xl text-black mb-4 sm:mb-6">
                Typical customers include:
              </h3>

              {/* Customer Categories Grid */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                {customers.map((customer, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-1 sm:p-5 shadow-sm hover:shadow-md transition-shadow "
                  >
                    <p className="text-xs sm:text-xs md:text-sm font-bold text-black leading-relaxed">
                      {customer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Concluding Paragraph */}
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed">
                Whether you manage a single location or oversee a regional portfolio, Qwick Services and Solutions LLC can standardize cleaning intervals, documentation, and communication across your sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

