import FirstHero from "../components/Fabric/FirstHero";
import HeroSection from "../components/Fabric/HeroSection";
import StorySection from "../components/Fabric/StorySection";
import React from "react";
export default function Fabric() {
  return (
    <div className="min-h-screen bg-[#edfeee] text-[#1d1f10] font-['Roboto_Slab',sans-serif] overflow-x-hidden">
      <FirstHero />
      <HeroSection />

      <StorySection />
    </div>
  );
}
