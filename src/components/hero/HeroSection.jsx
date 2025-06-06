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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const containerHeight = containerRef.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            
            const scrollTop = Math.max(0, -rect.top);
            const maxScroll = containerHeight - viewportHeight;
            
            if (maxScroll <= 0) {
              setScrollProgress(0);
              setCurrentSection(0);
              ticking = false;
              return;
            }
            
            const progress = Math.min(scrollTop / maxScroll, 1);
            setScrollProgress(progress);
            
            // Smoother section transition with overlap
            const sectionProgress = progress * (sectionsData.length - 0.5);
            const newCurrentSection = Math.min(
              Math.max(0, Math.floor(sectionProgress)), 
              sectionsData.length - 1
            );
            
            setCurrentSection(newCurrentSection);
          }
          ticking = false;
        });
        ticking = true;
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
    
    // Add overlap for smoother transitions
    const overlapFactor = 0.2;
    const adjustedSectionEnd = sectionEnd + (progressPerSection * overlapFactor);
    
    if (scrollProgress < sectionStart) {
      // Card hasn't entered yet
      const preEnterProgress = Math.max(0, (scrollProgress - Math.max(0, sectionStart - progressPerSection * 0.3)) / (progressPerSection * 0.3));
      return {
        y: 100 - (preEnterProgress * 20), // Start moving up slightly before fully entering
        scale: 0.85 + (preEnterProgress * 0.1),
        opacity: preEnterProgress * 0.3,
        zIndex: totalSections - index,
        blur: 8 - (preEnterProgress * 2)
      };
    } else if (scrollProgress >= sectionStart && scrollProgress < sectionEnd) {
      // Card is active
      const sectionProgress = (scrollProgress - sectionStart) / progressPerSection;
      const easeProgress = 1 - Math.pow(1 - sectionProgress, 3); // Ease out cubic
      
      return {
        y: 0,
        scale: 1 - (easeProgress * 0.05), // Minimal scale change
        opacity: 1,
        zIndex: totalSections - index + 10, // Higher z-index for active card
        blur: 0
      };
    } else if (scrollProgress >= sectionEnd && scrollProgress < adjustedSectionEnd) {
      // Card is transitioning out with overlap
      const exitProgress = (scrollProgress - sectionEnd) / (progressPerSection * overlapFactor);
      const easeExitProgress = Math.pow(exitProgress, 2); // Ease in quad
      
      return {
        y: -(easeExitProgress * 80),
        scale: 1 - (easeExitProgress * 0.15),
        opacity: 1 - (easeExitProgress * 0.8),
        zIndex: totalSections - index,
        blur: easeExitProgress * 4
      };
    } else {
      // Card has exited
      return {
        y: -100,
        scale: 0.8,
        opacity: 0,
        zIndex: totalSections - index,
        blur: 8
      };
    }
  };

  const getVideoScale = (index) => {
    const totalSections = sectionsData.length;
    const progressPerSection = 1 / totalSections;
    const sectionStart = index * progressPerSection;
    const sectionEnd = (index + 1) * progressPerSection;
    
    if (scrollProgress >= sectionStart && scrollProgress < sectionEnd) {
      // Video should be full width when card is active
      const sectionProgress = (scrollProgress - sectionStart) / progressPerSection;
      const scaleProgress = Math.min(sectionProgress * 2, 1); // Faster scale in
      return 1 + (scaleProgress * 0.05); // Slight zoom for engagement
    }
    
    return 1;
  };

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="relative w-full"
        style={{ height: `${sectionsData.length * 100}vh` }}
      >
        {/* Sticky container for smooth animations */}
        <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
          {sectionsData.map((section, index) => {
            const transform = getCardTransform(index);
            const videoScale = getVideoScale(index);
            const isVisible = scrollProgress >= (index / sectionsData.length) - 0.1;
            
            return (
              <motion.div
                key={`card-${index}`}
                className="absolute inset-0 w-full h-full"
                style={{ 
                  zIndex: transform.zIndex,
                  filter: `blur(${transform.blur || 0}px)`,
                  backfaceVisibility: 'hidden', // Prevent flickering
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'translateZ(0)', // Hardware acceleration
                }}
                animate={{
                  y: transform.y,
                  scale: transform.scale,
                  opacity: transform.opacity,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoothness
                }}
              >
                {/* Enhanced ContentCard with video scaling */}
                <div 
                  className="relative w-full h-full"
                  style={{
                    transform: `scale(${videoScale})`,
                    transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}
                >
                  <ContentCard
                    {...section}
                    isVisible={isVisible}
                    delay={0} 
                    audio={sharedAudio}
                    stackedMode={true}
                  />
                </div>
              </motion.div>
            );
          })}

          {/* Progress indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <div className="flex space-x-2">
              {sectionsData.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentSection ? 'bg-white' : 'bg-white/30'
                  }`}
                  animate={{
                    scale: index === currentSection ? 1.5 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

          {/* Smooth background transition */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
            style={{ zIndex: -1 }}
            animate={{
              opacity: scrollProgress > 0.1 ? 0.3 : 0.6,
            }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
    </div>
  );
}