import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import RealMoments from "@/components/RealMoments";
import HowItWorks from "@/components/HowItWorks";
import GlobalMap from "@/components/GlobalMap";
import ForHosts from "@/components/ForHosts";
import HostShowcase from "@/components/HostShowcase";
import Testimonials from "@/components/Testimonials";
import TrustBadges from "@/components/TrustBadges";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <GlobalMap />
      <Categories />
      <HostShowcase />
      <RealMoments />
      <HowItWorks />
      <ForHosts />
      <Testimonials />
      <TrustBadges />
      <DownloadCTA />
      <Footer />
    </>
  );
}
