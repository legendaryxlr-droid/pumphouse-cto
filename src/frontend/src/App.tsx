import CommunitySection from "./components/CommunitySection";
import DexScreenerSection from "./components/DexScreenerSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HowToBuySection from "./components/HowToBuySection";
import JupiterSwapSection from "./components/JupiterSwapSection";
import LoreSection from "./components/LoreSection";
import Marquee from "./components/Marquee";
import MemeGallery from "./components/MemeGallery";
import NavHeader from "./components/NavHeader";
import PriceTickerBar from "./components/PriceTickerBar";
import TokenomicsSection from "./components/TokenomicsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      {/* 1. Top marquee bar */}
      <Marquee bgClass="bg-secondary" textClass="text-secondary-foreground" />

      {/* 2. Nav/Header */}
      <NavHeader />

      {/* 3. Price ticker */}
      <PriceTickerBar />

      {/* 4. Hero */}
      <HeroSection />

      {/* 5. Lore */}
      <LoreSection />

      {/* 6. How to Buy */}
      <HowToBuySection />

      {/* 7. Jupiter Swap */}
      <JupiterSwapSection />

      {/* 8. Tokenomics */}
      <TokenomicsSection />

      {/* 9. Meme Gallery */}
      <MemeGallery />

      {/* 10. Community Tweets */}
      <CommunitySection />

      {/* 11. DEX Screener */}
      <DexScreenerSection />

      {/* 12. Footer with bottom marquee */}
      <Footer />
    </div>
  );
}
