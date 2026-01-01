import React from 'react'
export default function ServiceAreaHeader() {
  return (
    <div className="relative z-10 flex flex-col items-start mt-16 sm:mt-20 justify-center h-[50dvh] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/ServiceAreas/servicearea.jpg')",
        }}
      />
      {/* Content Container */} 
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Headline */}
        <h1 
          data-animate
          className="font-bold text-white mb-2 sm:mb-4 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[60px]"
        >
          Service Areas
        </h1>

        <p 
          data-animate
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed"
        >
        Qwick Services and Solutions LLC delivers professional commercial kitchen
        exhaust, hood & duct cleaning, fire suppression, and HVAC make‑up air services across multiple states. Our teams currently serve customers in New Jersey, Maryland, Virginia, Washington DC, Delaware, Pennsylvania, and North Carolina.
        </p>
      </div>
    </div>
  );
}