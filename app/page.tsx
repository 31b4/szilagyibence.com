import AppWrapper from "@/components/AppWrapper";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <AppWrapper>
      <Navbar />
      <HeroSection />
      <PortfolioSections />
    </AppWrapper>
  );
}
