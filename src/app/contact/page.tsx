import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import MapboxMap from "@/components/Contact/MapboxMap";
import ContactForm from "@/components/Contact/ContactForm";
import ContactHeader from "@/components/Contact/ContactHeader";
import ServicesArea from "@/components/Services/ServicesArea";
import EmergencyService from "@/components/Contact/EmergenctService";

export default function ContactPage() {
  return (
    <div className="relative h-auto bg-white">
      {/* Navbar */}
      <Navbar />
      
      {/* Contact Header */}
      <ContactHeader />
      
      {/* Contact Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Contact Information and Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-8">
                How to Reach Us
              </h2>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A9FF3E] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-black"
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
                </div>
                <div>
                  <a
                    href="mailto:contact@qwicksolutions.com"
                    className="text-base sm:text-lg text-black hover:underline"
                  >
                    contact@qwicksolutions.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A9FF3E] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-black"
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
                </div>
                <div>
                  <a
                    href="tel:+12026438113"
                    className="text-base sm:text-lg text-black hover:underline"
                  >
                    202-643-8113
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#A9FF3E] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-black"
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
                </div>
                <div>
                  <p className="text-base sm:text-lg text-black">
                    Sterling, VA 20166
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8">
              <MapboxMap />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Services Area Section */}
      <ServicesArea />

      {/* Emergency Service Section */}
      <EmergencyService />

      {/* Footer */}
      <Footer />
    </div>
  );
}

