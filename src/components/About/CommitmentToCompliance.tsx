import Image from "next/image";

export default function CommitmentToCompliance() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full h-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full h-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="w-full">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Main Heading with Gradient */}
                            <h2
                                data-animate
                                className="text-[24px] sm:text-[36px] md:text-[42px] lg:text-[42px] font-bold leading-tight"
                            >
                                <span className="flex flex-wrap bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
                                    Commitment to Compliance & Documentation
                                </span>
                            </h2>

                            {/* Paragraphs */}
                            <div
                                data-animate
                                className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                            >
                                <p className="font-semibold text-xl md:text-2xl lg:text-2xl">
                                    Fire codes, health regulations, and insurance requirements continue to evolve, and Qwick Services and Solutions LLC is committed to staying ahead of those changes.
                                </p>
                                <p className="leading-6">
                                    Technicians document each visit with service tags, digital reports, and photos covering hoods, ducts, fans, and suppression components where applicable. These records help demonstrate due diligence during audits or investigations and make it easier to answer questions from inspectors and risk managers.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image with Gradient Border */}
                    <div className="w-full relative">
                        {/* Gradient Border Container */}
                        <div
                            data-animate
                            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden"
                        >
                            {/* Gradient Background Layer */}
                            <div
                                className="absolute inset-0 rounded-2xl sm:rounded-3xl"
                                style={{
                                    backgroundImage: 'url(/Services/Gradient.png)',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            />
                            {/* Image Container with padding for border effect */}
                            <div className="relative w-full h-full p-3 sm:p-4 md:p-5">
                                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
                                    <Image
                                        src="/Services/service-man.png"
                                        alt="Technician inspecting commercial kitchen exhaust hood"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

