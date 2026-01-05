"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./Home/Hero/Logo";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (item: string) => {
    setOpenDropdown(openDropdown === item ? null : item);
  };

  const handleServicesHover = () => {
    setOpenDropdown("Services");
  };

  const handleServicesLeave = () => {
    // Small delay to allow clicking on dropdown items
    setTimeout(() => {
      if (dropdownRef.current && !dropdownRef.current.matches(':hover')) {
        setOpenDropdown(null);
      }
    }, 200);
  };

  const handleServiceAreasClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== "/serviceArea") {
      // Navigate to service area page
      router.push("/serviceArea");
    } else {
      // If already on service area page, just toggle dropdown
      toggleDropdown("Service Areas");
    }
  };

  const services = [
    { name: "Commercial Hood Cleaning & NFPA 96 Compliance", href: "/services/commercial-hood-cleaning", slug: "commercial-hood-cleaning" },
    { name: "Grease trap and Line jetting services", href: "/services/grease-trap-line-jetting", slug: "grease-trap-line-jetting" },
    { name: "Fire Suppression Service", href: "/services/fire-suppression", slug: "fire-suppression" },
    { name: "HVAC & Make‑Up Air", href: "/services/hvac-makeup-air", slug: "hvac-makeup-air" },
    { name: "Pollution Control Unit (PCU) Service", href: "/services/pollution-control-unit", slug: "pollution-control-unit" },
    { name: "Mechanical Preventive Maintenance", href: "/services/mechanical-preventive-maintenance", slug: "mechanical-preventive-maintenance" },
    { name: "Emergency Service", href: "/services/emergency-service", slug: "emergency-service" },
  ];

  const navItems = [
    { name: "Home", href: "#home", hasDropdown: false },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Service Areas", href: "#service-areas", hasDropdown: true },
    { name: "About", href: "#about", hasDropdown: true },
    { name: "Contact", href: "#contact", hasDropdown: true },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is outside the dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      // Add event listener with a small delay to avoid immediate closure
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Logo />
            <Image 
              src="/Home/hero/Navbar-Logo.svg" 
              alt="QWICK Services and Solutions" 
              width={108} 
              height={38}
              className="h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 w-auto hidden sm:block"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-5 xl:gap-6 2xl:gap-8">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                ref={item.hasDropdown && openDropdown === item.name && item.name !== "Services" ? dropdownRef : null} 
                className="relative group"
              >
                {item.hasDropdown ? (
                  <>
                    {item.name === "Services" ? (
                      <div
                        ref={dropdownRef}
                        onMouseEnter={handleServicesHover}
                        onMouseLeave={handleServicesLeave}
                        className="relative"
                      >
                        <button
                          className="text-white hover:text-[#C1FF72] transition-colors text-xs sm:text-sm flex items-center gap-1 whitespace-nowrap"
                        >
                          {item.name}
                          <svg
                            className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {openDropdown === item.name && (
                          <div 
                            className="absolute top-full left-0 mt-2 bg-black border border-gray-800 rounded-lg shadow-lg py-2 z-50 w-72 sm:w-80 md:w-96"
                          >
                            {services.map((service, index) => (
                              <Link
                                key={index}
                                href={service.href}
                                className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-[#C1FF72] transition-colors text-sm"
                                onClick={() => setOpenDropdown(null)}
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : item.name === "Service Areas" ? (
                      <button
                        onClick={handleServiceAreasClick}
                        className="text-white hover:text-[#C1FF72] transition-colors text-xs sm:text-sm flex items-center gap-1 whitespace-nowrap"
                      >
                        {item.name}
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="text-white hover:text-[#C1FF72] transition-colors text-xs sm:text-sm flex items-center gap-1 whitespace-nowrap"
                      >
                        {item.name}
                        <svg
                          className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    )}
                    {openDropdown === item.name && item.name !== "Services" && (
                      <div 
                        className={`absolute top-full left-0 mt-2 bg-black border border-gray-800 rounded-lg shadow-lg py-2 z-50 w-40 sm:w-44 md:w-48`}
                      >
                        <>
                          <a
                            href={`${item.href}-1`}
                            className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-[#C1FF72] transition-colors text-sm"
                          >
                            1
                          </a>
                          <a
                            href={`${item.href}-2`}
                            className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-[#C1FF72] transition-colors text-sm"
                          >
                            2
                          </a>
                          <a
                            href={`${item.href}-3`}
                            className="block px-4 py-2 text-white hover:bg-gray-900 hover:text-[#C1FF72] transition-colors text-sm"
                          >
                            3
                          </a>
                        </>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href === "#home" ? "/" : item.href}
                    className="text-white hover:text-[#C1FF72] transition-colors text-xs sm:text-sm whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            <button className="text-[10px] sm:text-xs md:text-sm relative bg-[#C1FF72] text-black px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-4xl font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              <span className="hidden sm:inline">Pay invoice</span>
              <span className="sm:hidden">Pay</span>
            </button>
            <button className="text-[10px] sm:text-xs md:text-sm bg-black border border-white text-white px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-4xl font-semibold hover:bg-white hover:text-black transition-colors hidden md:flex whitespace-nowrap">
              <span>Get a Quote</span>
            </button>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-1.5 sm:p-2 hover:bg-gray-900 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 bg-black">
            <nav className="py-3 sm:py-4 space-y-1 sm:space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <>
                      {item.name === "Services" ? (
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-white hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                        >
                          {item.name}
                          <svg
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      ) : item.name === "Service Areas" ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            if (pathname !== "/serviceArea") {
                              router.push("/serviceArea");
                            } else {
                              toggleDropdown(item.name);
                            }
                          }}
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-white hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                        >
                          {item.name}
                          <svg
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      ) : (
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 text-white hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                        >
                          {item.name}
                          <svg
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                      {openDropdown === item.name && (
                        <div className="pl-3 sm:pl-4 space-y-0.5 sm:space-y-1">
                          {item.name === "Services" ? (
                            services.map((service, index) => (
                              <Link
                                key={index}
                                href={service.href}
                                className="block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-300 hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                {service.name}
                              </Link>
                            ))
                          ) : (
                            <>
                              <a
                                href={`${item.href}-1`}
                                className="block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-300 hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                1
                              </a>
                              <a
                                href={`${item.href}-2`}
                                className="block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-300 hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                2
                              </a>
                              <a
                                href={`${item.href}-3`}
                                className="block px-3 sm:px-4 py-1.5 sm:py-2 text-gray-300 hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                3
                              </a>
                            </>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href === "#home" ? "/" : item.href}
                      className="block px-3 sm:px-4 py-2 sm:py-2.5 text-white hover:text-[#C1FF72] hover:bg-gray-900 transition-all text-xs sm:text-sm rounded"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 sm:pt-4 border-t border-gray-800 px-3 sm:px-4 mt-2">
                <button className="w-full text-xs sm:text-sm bg-black border border-white text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-4xl font-semibold hover:bg-white hover:text-black transition-colors">
                  Get a Quote
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

