import ServicesHeader from "@/components/Services/ServicesHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import CoverArea from "@/components/serviceAreas/CoverArea";
import WhatQwickCanDoSection from "@/components/Home/Hero/WhatQwickCanDoSection";
import WhyChooseQwick from "@/components/serviceAreas/WhyChooseQwick";

export default function VirginiaPage() {
    return (
        <div className="relative h-auto">
            {/* Navbar */}
            <Navbar />

            {/* Service Area Header */}
            <ServicesHeader title="Commercial Kitchen Exhaust Cleaning in Virginia" />

            {/* Intro Paragraph */}
            <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <p 
                        data-animate
                        className="text-base sm:text-2xl md:text-4xl lg:text-4xl font-bold text-gray-700 leading-relaxed text-left"
                    >
                        Qwick Services and Solutions LLC helps Virginia restaurants and commercial kitchens keep their exhaust systems, hoods, ducts, and fire suppression equipment clean and code-compliant. Our trained technicians work around your schedule to minimize downtime while meeting NFPA standards.
                    </p>
                </div>
            </section>

            {/* What Qwick Can Do Section */}
            <WhatQwickCanDoSection />

            {/* Cover Area Section */}
            <CoverArea stateName="Virginia" />

            {/* Why Choose Qwick Section */}
            <WhyChooseQwick stateName="Virginia" />

            {/* Footer */}
            <Footer />
        </div>
    );
}

