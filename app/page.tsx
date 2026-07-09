import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioSections from "@/components/PortfolioSections";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <HeroSection />
      <PortfolioSections />
    </>
  );
}
