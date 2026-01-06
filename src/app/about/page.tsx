import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import WhoWeAre from "@/components/About/WhoWeAre";
import MissionValues from "@/components/About/MissionValues";
import WhatQwickCanDoSection from "@/components/Home/Hero/WhatQwickCanDoSection";
import WhoWeServe from "@/components/About/WhoWeServe";
import WhyKitchensChooseQwick from "@/components/About/WhyKitchensChooseQwick";
import CommitmentToCompliance from "@/components/About/CommitmentToCompliance";
import AboutSchedule from "@/components/About/AboutSchedule";

export default function AboutPage() {
    const aboutSlides = [
        {
            title: "HVAC & Make-Up Air",
            subtitle: "",
            description: "Service for rooftop units and make-up air systems to balance airflow, reduce negative pressure, and keep staff more comfortable on the line",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Preventive Maintenance Programs",
            subtitle: "",
            description: "Planned cleaning and inspection schedules that keep you ahead of grease buildup, component wear, and code deadlines",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "24/7 Emergency Service",
            subtitle: "",
            description: "Rapid response for shutdowns, failed inspections, or post-incident cleanups so you can return to safe operations as quickly as possible.",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Kitchen Exhaust Cleaning",
            subtitle: "",
            description: "Complete hood, duct, and fan cleaning to NFPA 96 standards, removing grease and buildup from canopy to rooftop for safer operation and better draft.",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Hood & Duct Cleaning",
            subtitle: "",
            description: "Deep cleaning of hood interiors, plenum areas, and ductwork to improve airflow, reduce fire risk, and support smoother inspections.",
            bgColor: "bg-[#E6FFC7]"
        },
        {
            title: "Fire Suppression Service",
            subtitle: "",
            description: "Inspection, testing, and maintenance of kitchen fire suppression systems so they discharge properly, shut down fuel sources, and satisfy AHJ requirements",
            bgColor: "bg-[#E6FFC7]"
        },
    ];

    return (
        <div className="relative h-auto">
            {/* Navbar */}
            <Navbar />

            {/* Who We Are Section */}
            <WhoWeAre />

            {/* Mission & Values Section */}
            <MissionValues />

            {/* What Qwick Can Do Section */}
            <WhatQwickCanDoSection
                slides={aboutSlides}
                title="What Qwick Can Do For You"
                subtitle="End-to-End Solutions for Your Commercial Kitchen"
            />

            {/* Who We Serve Section */}
            <WhoWeServe />

            {/* Why Kitchens Choose Qwick Section */}
            <WhyKitchensChooseQwick />

            {/* Commitment to Compliance & Documentation Section */}
            <CommitmentToCompliance />

            {/* About Schedule Section */}
            <AboutSchedule />

            {/* Footer */}
            <Footer />
        </div>
    );
}

