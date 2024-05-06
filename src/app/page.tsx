import ComingSoon from "@/components/ComingSoon";
import CreonPass from "@/components/CreonPass";
import Footer from "@/components/Footer";
import Frame from "@/components/Frame";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurMission from "@/components/OurMission";
import Profiting from "@/components/Profiting";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CreonPass />
      <Profiting />
      <OurMission />
      <ComingSoon />
      <Frame />
      <Footer />
    </>
  );
}
