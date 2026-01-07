import React from 'react'

interface ServiceAreaHeaderProps {
  title?: string;
}

export default function ServiceAreaHeader({ title = "Service Areas" }: ServiceAreaHeaderProps) {
  const defaultDescription = "Qwick Services and Solutions LLC delivers professional commercial kitchen exhaust, hood & duct cleaning, fire suppression, and HVAC make‑up air services across multiple states. Our teams currently serve customers in New Jersey, Maryland, Virginia, Washington DC, Delaware, Pennsylvania, and North Carolina.";
  
  const cityDescriptions: Record<string, string> = {
    "New Jersey": "Restaurant and commercial kitchen exhaust cleaning services throughout New Jersey, including key metro areas. Our certified technicians provide NFPA 96 compliant services across the Garden State.",
    "Maryland": "NFPA-compliant hood cleaning and fire safety services for Maryland restaurants and commercial kitchens. Professional exhaust system maintenance across Maryland.",
    "Virginia": "Full-service kitchen exhaust, hood cleaning, and fire suppression support across Virginia. Trusted commercial kitchen maintenance throughout the Commonwealth.",
    "Washington, DC": "Specialized commercial kitchen exhaust and fire safety services in Washington, DC. Expert compliance services for DC-area restaurants and commercial kitchens.",
    "North Carolina": "Commercial kitchen exhaust and hood cleaning services for restaurants across North Carolina. Comprehensive fire safety solutions throughout the Tar Heel State.",
    "Delaware": "Commercial kitchen exhaust and hood cleaning services for restaurants across Delaware. Professional NFPA compliance services throughout the First State.",
    "Pennsylvania": "Kitchen exhaust, hood cleaning, and fire protection services for restaurants and commercial kitchens across Pennsylvania. Trusted commercial kitchen maintenance throughout the Keystone State.",
  };

  const description = cityDescriptions[title] || defaultDescription;

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
          {title}
        </h1>

        <p 
          data-animate
          className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed"
        >
          {description}
        </p>
      </div>
    </div>
  );
}