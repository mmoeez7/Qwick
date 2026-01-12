import Image from "next/image";

interface ServicesHeaderProps {
  title: string;
  imageSrc?: string;
}

export default function ServicesHeader({ title, imageSrc = "/Services/Header.png" }: ServicesHeaderProps) {
  return (
    <div className="relative z-10 flex flex-col items-start mt-16 sm:mt-20 justify-center h-[50dvh] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${imageSrc}')`,
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Headline */}
        <h1 
          data-animate
          className="font-bold text-white mb-2 sm:mb-4 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[60px]"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}

