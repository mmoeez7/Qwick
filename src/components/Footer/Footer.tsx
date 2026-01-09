import Image from "next/image";
import Link from "next/link";
import Logo from "../Home/Hero/Logo";

export default function Footer() {
  const quickLinks = [
    "Home",
    "Services",
    "Solutions",
    "About",
    "Contact"
  ];

  const popularServices = [
    "Exhaust System Cleaning",
    "Repairs & Emergency",
    "Installations & Upgrades",
    "Preventive Maintenance",
    "Fire Suppression"
  ];

  const serviceAreas = [
    "Washington DC",
    "Maryland",
    "Virginia",
    "Pennsylvania",
    "Delaware",
    "North Carolina"
  ];

  const socialIcons = [
    { name: "facebook", src: "/Home/footer/icon facebook.svg" },
    { name: "youtube", src: "/Home/footer/icon youtube.svg" },
    { name: "instagram", src: "/Home/footer/icon instagram.svg" },
    { name: "linkedin", src: "/Home/footer/icon linkedin.svg" }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Top Section - Three Columns */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Company Info */}
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity w-fit">
                <Logo />
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-white">QWICK</span>
                  <span className="text-xs sm:text-sm text-gray-400">Services and Solutions</span>
                </div>
              </Link>

              {/* Tagline */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Your trusted partner for commercial kitchen maintenance, safety, and compliance.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                {socialIcons.map((icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:opacity-70 transition-opacity"
                    aria-label={icon.name}
                  >
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Middle Column - Quick Links & Popular Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm sm:text-base text-gray-300 hover:text-[#C1FF72] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Services */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Popular Services</h3>
                <ul className="space-y-3">
                  {popularServices.map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-sm sm:text-base text-gray-300 hover:text-[#C1FF72] transition-colors"
                      >
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Us */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#C1FF72] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base text-gray-300">
                    Sterling, Virginia, 20166
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#C1FF72] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <a
                    href="mailto:info@quickservices.com"
                    className="text-sm sm:text-base text-gray-300 hover:text-[#C1FF72] transition-colors"
                  >
                    contact@qwicksolutions.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#C1FF72] mt-1 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href="tel:+18005550123"
                    className="text-sm sm:text-base text-gray-300 hover:text-[#C1FF72] transition-colors"
                  >
                    +1 (800) 555-0123
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="border-t border-gray-800 py-8 sm:py-10">
          <h3 className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8">Service Areas</h3>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(to right, #C1FF72, white)',
                }}
              >
                <button
                  className="w-full px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-black text-sm sm:text-base text-white hover:bg-[#C1FF72] hover:text-black transition-colors"
                >
                  {area}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Copyright & Legal */}
        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base text-gray-400">
              © 2025 Qwick Services & Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm sm:text-base text-gray-400 hover:text-[#C1FF72] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="text-sm sm:text-base text-gray-400 hover:text-[#C1FF72] transition-colors"
              >
                Terms of Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

