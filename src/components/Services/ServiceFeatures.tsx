import Image from 'next/image';

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string; // Icon path - will be added later
}

interface ServiceFeaturesProps {
  heading: {
    highlight: string; // "PCU Services" - in lime green
  };
  introText: string;
  imageSrc?: string; // Image path - will be added later
  imageAlt?: string;
  features: ServiceFeature[];
}

export default function ServiceFeatures({
  heading,
  introText,
  imageSrc,
  imageAlt = "Service illustration",
  features
}: ServiceFeaturesProps) {
  return (
    <section className="pb-12 sm:pb-16 md:pb-20 lg:pb-40 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-20 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Section */}
          <div className="flex flex-col space-y-2 sm:space-y-8 lg:col-span-7">
            {/* Main Heading */}
            <h2 
              data-animate
              className="text-[24px] sm:text-[32px] md:text-[42px] lg:text-[42px] font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">{heading.highlight}</span>
            </h2>

            {/* Introductory Text */}
            <p 
              data-animate
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
            >
              {introText}
            </p>

            {/* Image Placeholder */}
            {imageSrc && (
              <div 
                data-animate
                className="relative w-[400px] h-[300px] sm:h-[400px] md:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            )}
          </div>

          {/* Right Section - Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:col-span-13">
            {features.map((feature, index) => (
              <div
                key={index}
                data-animate
                className="bg-gray-50 rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#A9FF3E] rounded-lg flex items-center justify-center">
                    {feature.icon ? (
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-7 sm:h-7"
                      />
                    ) : (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white rounded"></div>
                    )}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {feature.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

