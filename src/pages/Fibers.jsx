import React from "react";
import HeroSection from "../components/Fiber/HeroSection";
import GoodnessSection from "../components/Fiber/GoodnessSection";
import FiberMain from "../components/Fiber/FiberMain";
import AnimationSection from "../components/Fiber/AnimationSection";
import MinimalisticCTA from "../components/Yarn/MinimalisticCTA";

const Fibers = () => {
  return (
    <div>
      <HeroSection />
      <GoodnessSection />
      <AnimationSection />
      <FiberMain />
      <MinimalisticCTA/>
    </div>
  );
};

export default Fibers;
