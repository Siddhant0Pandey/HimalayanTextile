/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ContentCard from '../contentcard/ContentCard';
import { sectionsData } from '../data/sectionsData';

export default function HeroSection({ sharedAudio = null }) {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const containerHeight = containerRef.current.offsetHeight;
        const viewportHeight = window.innerHeight;
        
      
        const scrollTop = Math.max(0, -rect.top);
        const maxScroll = containerHeight - viewportHeight;
        
        if (maxScroll <= 0) return;
        
        const progress = Math.min(scrollTop / maxScroll, 1);
        setScrollProgress(progress);
        
  
        const sectionProgress = progress * sectionsData.length;
        const newCurrentSection = Math.min(
          Math.floor(sectionProgress), 
          sectionsData.length - 1
        );
        
        setCurrentSection(newCurrentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const getCardTransform = (index) => {
    const totalSections = sectionsData.length;
    const progressPerSection = 1 / totalSections;
    const sectionStart = index * progressPerSection;
    const sectionEnd = (index + 1) * progressPerSection;
    
    if (scrollProgress < sectionStart) {
    
      return {
        y: 100,
        scale: 0.8,
        opacity: 0,
        zIndex: totalSections - index
      };
    } else if (scrollProgress >= sectionStart && scrollProgress < sectionEnd) {
     
      const sectionProgress = (scrollProgress - sectionStart) / progressPerSection;
      return {
        y: 0,
        scale: 1 - sectionProgress * 0.1,
        opacity: 1 - sectionProgress * 0.3,
        zIndex: totalSections - index
      };
    } else {
    
      return {
        y: -50,
        scale: 0.9,
        opacity: 0,
        zIndex: totalSections - index
      };
    }
  };

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${sectionsData.length * 100}vh` }}
      >
 
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          {sectionsData.map((section, index) => {
            const transform = getCardTransform(index);
            const isVisible = index <= currentSection;
            
            return (
              <motion.div
                key={`card-${index}`}
                className="absolute inset-0 w-full h-full"
                style={{ zIndex: transform.zIndex }}
                animate={{
                  y: `${transform.y}px`,
                  scale: transform.scale,
                  opacity: transform.opacity,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <ContentCard
                  {...section}
                  isVisible={isVisible}
                  delay={0} 
                  audio={sharedAudio}
                  stackedMode={true}
                />
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}