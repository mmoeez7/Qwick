import Image from "next/image";

export default function ContactHeader() {
  return (
    <section className="relative w-full overflow-hidden pt-10">
      {/* Background with gradient and dots pattern */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#B7F46C]/46"></div>
        {/* Dots Pattern */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/Contact/DotsBg.svg"
            alt="Background pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            <span className="text-[#A9FF3E]">Contact Qwick Services</span>{" "}
            <span className="text-black">and Solutions LLC</span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-gray-800 max-w-4xl mx-auto leading-relaxed">
            Have a question, need a quote, or dealing with an urgent kitchen exhaust or fire safety issue? Qwick Services and Solutions LLC is here to help with NFPA-focused service and clear communication.
          </p>
        </div>
      </div>
    </section>
  );
}

