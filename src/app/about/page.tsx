import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer/Footer";
import WhoWeAre from "@/components/About/WhoWeAre";
import MissionValues from "@/components/About/MissionValues";

export default function AboutPage() {
  return (
    <div className="relative h-auto">
      {/* Navbar */}
      <Navbar />
      
      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Mission & Values Section */}
      <MissionValues />

      {/* Footer */}
      <Footer />
    </div>
  );
}

