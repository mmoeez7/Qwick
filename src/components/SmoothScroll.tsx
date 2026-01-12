"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScrollProvider() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical" as const,
      gestureOrientation: "vertical" as const,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add("animate-in");
          observer.unobserve(element);
        }
      });
    }, observerOptions);

    // Check if element is already in viewport
    const isInViewport = (element: Element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Observe all sections and animated elements
    const observeElements = () => {
      const sections = document.querySelectorAll("section");
      const cards = document.querySelectorAll("[data-animate]");
      
      sections.forEach((section) => {
        // If section is already in viewport, animate it immediately
        if (isInViewport(section)) {
          section.classList.add("animate-in");
        } else {
          observer.observe(section);
        }
      });
      
      cards.forEach((card) => {
        if (isInViewport(card)) {
          card.classList.add("animate-in");
        } else {
          observer.observe(card);
        }
      });
    };

    // Wait for DOM to be ready
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", observeElements);
    } else {
      // DOM is already ready, but wait a bit for React to render
      setTimeout(observeElements, 100);
    }

    // Observe new elements as they're added (for dynamic content)
    const mutationObserver = new MutationObserver(observeElements);
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      lenis.destroy();
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (lenisRef.current) {
        // Use Lenis to scroll to top immediately
        try {
          lenisRef.current.scrollTo(0, { immediate: true });
        } catch (e) {
          // Fallback if Lenis scrollTo fails
          window.scrollTo(0, 0);
        }
      } else {
        // Fallback to window scroll if Lenis not ready
        window.scrollTo(0, 0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

