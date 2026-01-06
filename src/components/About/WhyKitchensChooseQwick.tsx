import Image from "next/image";

export default function WhyKitchensChooseQwick() {
  const features = [
    {
      icon: "/Home/serviceSection/icon1.svg",
      title: "NFPA 96-aligned processes",
      description: "Workflows, chemicals, and reporting aligned with current standards and inspector expectations"
    },
    {
      icon: "/Home/serviceSection/icon3.svg",
      title: "Trained technicians",
      description: "Field staff receive hands-on training specific to commercial kitchens, exhaust systems, and suppression equipment."
    },
    {
      icon: "/Home/serviceSection/icon2.svg",
      title: "Photo-rich reporting",
      description: "Every service includes before-and-after images and notes your team can review, store, and share with landlords or insurers"
    },
    {
      icon: "/Home/serviceSection/icon4.svg",
      title: "Proactive reminders",
      description: "Recurring service schedules and reminders help you avoid lapses that can lead to citations, shutdowns, or insurance issues"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Section */}
          <div className="lg:col-span-1 flex flex-col space-y-6">
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C1FF72] flex items-center justify-center">
              <Image
                src="/Services/Fast.svg"
                alt="Lightning bolt"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>

            {/* Heading */}
            <h2 className="flex flex-wrap text-[24px] sm:text-[36px] md:text-[42px] lg:text-[42px] font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
                Why Kitchens Choose Qwick
              </span>
            </h2>

            {/* Descriptive Paragraph */}
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Customers choose Qwick Services and Solutions LLC because they want more than a 'once and done' cleaning—they want a long-term safety partner.
            </p>

            {/* Call-to-Action Box */}
            <div className="bg-[#B7F46C] rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3">
                Hearing a rattle?
              </h3>
              <p className="text-base sm:text-lg text-black leading-relaxed">
                A noisy fan is a warning sign. Call us before it fails during the dinner rush.
              </p>
            </div>
          </div>

          {/* Right Section - Feature Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-[#C1FF72] rounded-lg sm:rounded-xl flex items-center justify-center p-2 sm:p-3">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={56}
                      height={56}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

