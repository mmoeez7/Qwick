import React from 'react';
import Image from 'next/image';

export default function QwickServices() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full h-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full h-auto mb-40">
                {/* Left Column - Text Content */}
                <div className="w-full mb-6 sm:mb-8 lg:mb-8">
                    <div className="space-y-6 sm:space-y-8">
                        {/* Main Heading */}
                        <h1 
                            data-animate
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight tracking-wide"
                        >
                            Qwick Services and Solutions LLC provides inspection, testing, and maintenance for commercial kitchen fire suppression systems so they activate quickly and reliably when you need them most.
                        </h1>
                    </div>
                </div>

                {/* Right Column - Split into two halves */}
                <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                    {/* First Half - Paragraphs */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-4 sm:space-y-6">
                            {/* Sub-heading with Gradient */}
                            <h2 
                                data-animate
                                className="text-xl sm:text-2xl md:text-3xl lg:text-[42px] font-bold"
                            >
                                <span className="bg-gradient-to-r from-[#A9FF3E] to-black bg-clip-text text-transparent">
                                    Get Full services of Fire
                                </span>{' '}
                                <span className="text-gray-800">Suppression Service</span>
                            </h2>

                            {/* Paragraphs */}
                            <div 
                                data-animate
                                className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                            >
                                <p>
                                    Kitchen fire suppression systems are your last line of defense when a flare‑up or grease fire occurs on the cooking line. Our certified technicians perform routine inspections to verify that nozzles are correctly aimed, fusible links and detection lines are in good condition, and cylinders are properly pressurized and within code date ranges. We review your system against manufacturer specifications and NFPA standards, making adjustments or recommendations where coverage has changed due to new appliances or layout shifts.
                                </p>
                                <p>
                                    When required, we perform system tests to verify proper detection and discharge, ensuring that shut‑offs and interlocks for gas and electric equipment function as designed. If deficiencies are found, Qwick Services and Solutions LLC can repair, recharge, or coordinate replacement components to restore your system to full readiness. Upon completion, you receive updated tags, documentation, and clear notes you can present to your fire marshal, insurer, and corporate safety team
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Half - Image with Gradient Border */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Gradient Border Container */}
                        <div 
                            data-animate
                            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full lg:min-h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden"
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
