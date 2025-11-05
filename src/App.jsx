import NeonHeader from "./components/NeonHeader";
import HeroSection from "./components/HeroSection";
import FeatureGrid from "./components/FeatureGrid";
import FooterCTA from "./components/FooterCTA";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Subtle scanline effect */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:100%_3px]" />

      <NeonHeader />
      <HeroSection />
      <FeatureGrid />
      <FooterCTA />
    </div>
  );
}

export default App;
