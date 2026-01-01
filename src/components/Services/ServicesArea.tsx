import Image from "next/image";

export default function ServicesArea() {
    const areas = [
        "New Jersey",
        "Maryland",
        "Virginia",
        "Delaware",
        "Washington, DC",
        "Pennsylvania",
        "North Carolina"
    ];

    return (
        <section className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-7xl">
                {/* Heading */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl max-w-4xl mx-auto font-bold text-gray-800 text-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 px-2 sm:px-4">
                    Qwick Services and Solutions LLC provides commercial kitchen
                    exhaust and fire safety services across
                </h2>

                {/* Description Paragraph */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 text-center max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16 leading-relaxed px-2 sm:px-4">
                    Visit our Service Areas page to see where we work most often
                </p>

                {/* Services Grid/Row */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-6 justify-center sm:justify-center">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-2 sm:gap-3 md:gap-4 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] flex-shrink-0"
                        >
                            {/* Checkmark Icon */}
                            <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                                <Image
                                    src="/Home/Trust/checkmark.svg"
                                    alt="Checkmark"
                                    width={24}
                                    height={24}
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                                />
                            </div>

                            {/* Service Text */}
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 font-bold leading-tight sm:leading-normal">
                                {area}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

