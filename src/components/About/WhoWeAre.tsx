import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-40 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-10 right-0 w-[200px] h-[108px] xs:w-[250px] xs:h-[135px] sm:w-[350px] sm:h-[190px] md:w-[450px] md:h-[244px] lg:w-[550px] lg:h-[298px] xl:w-[650px] xl:h-[352px] 2xl:w-[700px] 2xl:h-[380px] opacity-100 pointer-events-none overflow-hidden">
        <Image
          src="/About/Pattern.svg"
          alt="Pattern"
          width={700}
          height={350}
          className="object-contain w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left Column - Heading (Stacked Vertically) */}
          <div className="flex flex-col lg:col-span-1">
            <h2 
              data-animate
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8"
            >
              <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
                Who <br className="hidden sm:block" />We Are
              </span>
            </h2>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:col-span-2">
            <p 
              data-animate
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            >
              <strong className="text-gray-900">Qwick Services and Solutions LLC</strong> is a commercial kitchen exhaust and fire safety company. We keep restaurants, hotels, and commercial kitchens clean, safe, and code-compliant.
            </p>
            <p 
              data-animate
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed"
            >
              Every visit is performed by trained technicians who understand the pressures of busy kitchens and the importance of passing inspections. We were founded to be a reliable, NFPA-focused partner, combining technical expertise with clear communication, photo documentation, and predictable scheduling to reduce fire risk, support staff, and keep businesses operational.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

