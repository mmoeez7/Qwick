import Image from 'next/image';
import Link from 'next/link';

export interface EquipmentItem {
  title: string;
  icon: string;
  iconColor: 'green' | 'orange' | 'purple' | 'blue';
}

interface EquipmentServicesProps {
  heading: {
    highlight: string; // "Equipment We Commonly Service"
  };
  introText: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  equipment: EquipmentItem[];
  disclaimer?: string;
}

const iconColorClasses = {
  green: 'bg-green-200',
  orange: 'bg-orange-200',
  purple: 'bg-purple-200',
  blue: 'bg-blue-200',
};

export default function EquipmentServices({
  heading,
  introText,
  buttonText = "Hire Us Today",
  buttonLink = "/contact",
  imageSrc,
  imageAlt = "Equipment service illustration",
  equipment,
  disclaimer
}: EquipmentServicesProps) {
  return (
    <section className="pb-8 sm:pb-10 md:pb-12 lg:pb-40 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 sm:space-y-6">
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

            {/* Button */}
            <div data-animate>
              <Link
                href={buttonLink}
                className="inline-flex items-center gap-2 bg-[#A9FF3E] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:bg-[#95E62E] transition-colors"
              >
                {buttonText}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Image */}
            {imageSrc && (
              <div 
                data-animate
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100"
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

          {/* Right Section - Equipment Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 bg-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
            {equipment.map((item, index) => (
              <div
                key={index}
                data-animate
                className="bg-white  rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-5">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 ${iconColorClasses[item.iconColor]} rounded-lg flex items-center justify-center`}>
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={24}
                      height={24}
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
                  </div>
                </div>

                {/* Equipment Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        {disclaimer && (
          <div className="mt-8 sm:mt-10 md:mt-12">
            <p 
              data-animate
              className="text-base sm:text-lg md:text-xl lg:text-[24px] text-gray-600 font-bold max-w-[900px] mx-auto text-center leading-tight"
              style={{ 
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {disclaimer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

