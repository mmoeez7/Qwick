"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingContactButton() {
  const pathname = usePathname();

  // Hide button on contact page to avoid redundancy
  if (pathname === "/contact") return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 group"
      aria-label="Contact Us"
    >
      {/* Animated Rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-full h-full rounded-full border-2 border-[#A9FF3E] opacity-75 animate-ping" />
        <div className="absolute w-full h-full rounded-full border-2 border-[#A9FF3E] opacity-50 animate-pulse" />
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#A9FF3E] opacity-30 animate-spin-slow" />
      </div>

      {/* Main Button */}
      <div className="relative bg-[#A9FF3E] text-black rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white px-3 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Contact Us
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black" />
      </div>
    </Link>
  );
}

