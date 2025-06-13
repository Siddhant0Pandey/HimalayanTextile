import { useState, useEffect } from "react";
import { collections } from "../data/fabricCollection";
import CTASection from "./CTASection";
import HeroSection from "./HeroSection";
import PhilosophySection from "./PhilosophySection";
import CollectionsSection from "./CollectionSection";

export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    setIsVisible(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

 

  return (
    <div className="min-h-screen bg-[#edfeee] text-[#1d1f10] font-sans">
      
      <HeroSection isVisible={isVisible} />
      
      <PhilosophySection isVisible={isVisible} />
      
      <CollectionsSection 
        collections={collections}
        openIndexes={openIndexes}
        toggleDescription={toggleDescription}
        isMobile={isMobile}
        isVisible={isVisible}
      />
      
      {/* <CTASection isVisible={isVisible} /> */}
      
    </div>
  );
}
