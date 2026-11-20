import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RatesStrip from "@/components/RatesStrip";
import QuickLinks from "@/components/QuickLinks";
import NewsTicker from "@/components/NewsTicker";
import WhyBankWithUs from "@/components/WhyBankWithUs";
import MobileBanking from "@/components/MobileBanking";
import ExchangeRates from "@/components/ExchangeRates";
import NewsCards from "@/components/NewsCards";
import ImportantLinks from "@/components/ImportantLinks";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <NewsTicker />
        <RatesStrip />
        <QuickLinks />
        <WhyBankWithUs />
        <MobileBanking />
        <ExchangeRates />
        <NewsCards />
        <ImportantLinks />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
