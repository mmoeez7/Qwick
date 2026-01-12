import Logo from "./Hero/Logo";
import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-start mt-16 sm:mt-20 justify-center h-[80dvh] px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-12 sm:pb-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/Home/hero/HeroBg.svg')",
        }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10 w-full">
        {/* Headline */}
        <h1 className="font-bold text-white mb-2 sm:mb-4 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[60px]">
          Efficiency, Safety & Reliability - That&apos;s Qwick.
        </h1>

        {/* Sub-headline */}
        <p className="text-base sm:text-xl md:text-2xl text-white mb-4 sm:mb-8 opacity-90">
          Where Commercial Safety Meets Operational Excellence.
        </p>

        {/* Survey Button */}
        <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
          <Link 
            href="/contact"
            className="bg-transparent border-2 border-[#C1FF72] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-4xl font-semibold text-base sm:text-lg hover:bg-[#C1FF72] hover:text-black transition-colors relative z-10 text-center"
          >
            Request a Survey 
          </Link>
        </div>

      </div>
    </div>
  );
}

