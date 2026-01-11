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

