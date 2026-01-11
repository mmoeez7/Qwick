"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
    icon?: string;
    title: string;
    subtitle: string;
    description: string;
    bgColor?: string;
}

interface WhatQwickCanDoSectionProps {
    slides?: Slide[];
    title?: string;
    subtitle?: string;
}

export default function WhatQwickCanDoSection({ 
    slides: customSlides, 
    title: customTitle,
    subtitle: customSubtitle 
}: WhatQwickCanDoSectionProps = {}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Detect screen size
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 640);
            setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const defaultSlides: Slide[] = [
        {
            title: "HVAC & Make-Up Air",
            subtitle: "",
            description: "Service for rooftop units and make-up air systems to balance airflow, reduce negative pressure, and keep staff more comfortable on the line",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Preventive Maintenance Programs",
            subtitle: "",
            description: "Planned cleaning and inspection schedules that keep you ahead of grease buildup, component wear, and code deadlines",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "24/7 Emergency Service",
            subtitle: "",
            description: "Rapid response for shutdowns, failed inspections, or post-incident cleanups so you can return to safe operations as quickly as possible.",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Kitchen Exhaust Cleaning",
            subtitle: "",
            description: "Complete hood, duct, and fan cleaning to NFPA 96 standards, removing grease and buildup from canopy to rooftop for safer operation and better draft.",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Hood & Duct Cleaning",
            subtitle: "",
            description: "Deep cleaning of hood interiors, plenum areas, and ductwork to improve airflow, reduce fire risk, and support smoother inspections.",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Fire Suppression Service",
            subtitle: "",
            description: "Inspection, testing, and maintenance of kitchen fire suppression systems so they discharge properly, shut down fuel sources, and satisfy AHJ requirements",
            bgColor: "bg-[#E6FFC7]"
        },
    ];

    const slides = customSlides || defaultSlides;
    const sectionTitle = customTitle || "What Qwick Can Do For You";
    const sectionSubtitle = customSubtitle || "End-to-End Solutions for Your Commercial Kitchen";

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Auto-slide every 2 seconds (similar to Swiper autoplay)
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [slides.length, isPaused]);

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold 
               bg-gradient-to-r from-[#A9FF3E] to-white 
               bg-clip-text text-transparent">
                        {sectionTitle}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mt-5">
                        {sectionSubtitle}
                    </p>
                </div>

                {/* Slider Container */}
                <div 
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 sm:left-4 md:left-1/2 md:-translate-x-[450px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center shadow-lg transition-colors"
                        aria-label="Previous slide"
                    >
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-2 sm:right-4 md:right-auto md:left-1/2 md:translate-x-[450px] top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center shadow-lg transition-colors"
                        aria-label="Next slide"
                    >
                        <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Slides Container */}
                    <div className="overflow-hidden px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16">
                        <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[500px] md:h-[500px] lg:h-[600px]">
                            {slides.map((slide, index) => {
                                // Calculate relative position to current slide
                                let position = index - currentSlide;
                                
                                // Handle infinite loop
                                if (position > 1) position -= slides.length;
                                if (position < -1) position += slides.length;
                                
                                // Determine card state
                                const isActive = position === 0;
                                const isLeft = position === -1 || position === slides.length - 1;
                                const isRight = position === 1 || position === -(slides.length - 1);
                                const isVisible = isActive || isLeft || isRight;
                                
                                if (!isVisible) return null;
                                
                                // Calculate transform and scale - responsive values
                                let translateX = 0;
                                let scale = 0.7;
                                let opacity = 0.4;
                                let zIndex = 1;
                                let maxWidth = '90%';
                                
                                if (isActive) {
                                    translateX = 0;
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 10;
                                    maxWidth = isMobile ? '95%' : isTablet ? '500px' : '600px';
                                } else if (isLeft) {
                                    translateX = isMobile ? -45 : isTablet ? -38 : -35;
                                    scale = isMobile ? 0.6 : isTablet ? 0.7 : 0.75;
                                    opacity = isMobile ? 0.25 : isTablet ? 0.4 : 0.5;
                                    zIndex = 2;
                                    maxWidth = isMobile ? '85%' : isTablet ? '400px' : '450px';
                                } else if (isRight) {
                                    translateX = isMobile ? 45 : isTablet ? 38 : 35;
                                    scale = isMobile ? 0.6 : isTablet ? 0.7 : 0.75;
                                    opacity = isMobile ? 0.25 : isTablet ? 0.4 : 0.5;
                                    zIndex = 2;
                                    maxWidth = isMobile ? '85%' : isTablet ? '400px' : '450px';
                                }
                                
                                return (
                                    <div
                                        key={index}
                                        className="absolute transition-all duration-500 ease-in-out"
                                        style={{
                                            transform: `translateX(${translateX}%) scale(${scale})`,
                                            opacity: opacity,
                                            zIndex: zIndex,
                                            width: '100%',
                                            maxWidth: maxWidth,
                                        }}
                                    >
                                        <div
                                            className={`relative ${slide.bgColor || "bg-[#E6FFC7]"} rounded-lg sm:rounded-xl shadow-lg h-full ${
                                                isActive 
                                                    ? 'p-6 sm:p-8 md:p-10 lg:p-12' 
                                                    : 'p-4 sm:p-6 md:p-8'
                                            }`}
                                        >
                                            {/* Content */}
                                            <div className="text-center">
                                                <h3 className={`font-bold text-black mb-2 ${
                                                    isActive 
                                                        ? 'text-xl sm:text-2xl md:text-3xl' 
                                                        : 'text-base sm:text-lg md:text-xl'
                                                }`}>
                                                    {slide.title}
                                                </h3>
                                                <h4 className={`font-bold text-black mb-4 sm:mb-6 ${
                                                    isActive 
                                                        ? 'text-lg sm:text-xl md:text-2xl' 
                                                        : 'text-sm sm:text-base md:text-lg'
                                                }`}>
                                                    {slide.subtitle}
                                                </h4>
                                                <p className={`text-gray-700 leading-relaxed ${
                                                    isActive 
                                                        ? 'text-sm sm:text-base md:text-lg' 
                                                        : 'text-xs sm:text-sm md:text-base'
                                                }`}>
                                                    {slide.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

