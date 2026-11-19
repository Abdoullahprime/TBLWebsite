import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RatesStrip from "@/components/RatesStrip";
import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";
import DigitalFeature from "@/components/DigitalFeature";
import TrustStats from "@/components/TrustStats";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <RatesStrip />
        <QuickLinks />
        <Services />
        <DigitalFeature />
        <TrustStats />
      </main>
      <Footer />
    </>
  );
}
