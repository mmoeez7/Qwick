import React from 'react';
import Image from 'next/image';
import { servicesContent } from './servicesContent';

interface QwickServicesProps {
    serviceSlug?: string;
}

export default function QwickServices({ serviceSlug = "default" }: QwickServicesProps) {
    // Get content for the service, fallback to default if not found
    const content = servicesContent[serviceSlug] || servicesContent["default"];
    const { mainHeading, subHeading, paragraphs } = content;
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white w-full h-auto">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl w-full h-auto mb-40">
                {/* Left Column - Text Content */}
                <div className="w-full mb-20 sm:mb-20 lg:mb-25">
                    <div className="space-y-6 sm:space-y-8">
                        {/* Main Heading */}
                        <h1 
                            data-animate
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-800 leading-tight tracking-wide"
                        >
                            {mainHeading}
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
                                    {subHeading.gradientText}
                                </span>
                            </h2>

                            {/* Paragraphs */}
                            <div 
                                data-animate
                                className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed"
                            >
                                {paragraphs.map((paragraph, index) => (
                                    <p key={index}>
                                        {paragraph}
                                    </p>
                                ))}
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
