"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if splash screen has been shown in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      // If already seen, don't show splash screen
      setIsVisible(false);
      return;
    }

    // Start fade out animation after 3.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 3500);

    // Hide completely after animation finishes
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Q Logo with scale animation */}
      <div className="animate-pulse mb-6 sm:mb-8">
        <Image
          src="/Q.svg"
          alt="Q"
          width={150}
          height={140}
          className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-44"
        />
      </div>

      {/* Company Name */}
      <div className="text-center space-y-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-wide">
          QWICK.
        </h1>
      </div>
    </div>
  );
}

