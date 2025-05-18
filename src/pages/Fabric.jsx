import CraftSection from "../components/Fabric/CraftSection";
import HeroSection from "../components/Fabric/HeroSection";
import StorySection from "../components/Fabric/StorySection";

export default function Fabric() {
  return (
    <div className="min-h-screen bg-[#edfeee] text-[#1d1f10] font-['Roboto_Slab',sans-serif] overflow-x-hidden">
      <HeroSection />
      <CraftSection />
      <StorySection />
    </div>
  );
}
