import ServiceAreaHeader from "@/components/serviceAreas/ServiceAreaHeader";
import Navbar from "@/components/Navbar";
import Locations from "@/components/serviceAreas/Locations";
import ServicesArea from "@/components/Services/ServicesArea";
import Footer from "@/components/Footer/Footer";
import CoverArea from "@/components/serviceAreas/CoverArea";

export default function ServiceAreaPage() {
    return (
        <div className="relative h-auto">
            {/* Navbar */}
            <Navbar />

            {/* Service Area Header */}
            <ServiceAreaHeader />

            {/* Locations Section */}
            <Locations />

            {/* Cover Area Section */}
            <CoverArea />

            {/* Footer */}
            <Footer />
        </div>
    );
}

