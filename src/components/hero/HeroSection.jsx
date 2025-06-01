/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentCard from '../contentcard/ContentCard'
import {useScrollNavigation} from '../../hooks/useScrollNavigation'
import {sectionsData} from '../data/sectionsData'
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import ScrollHint from '../ScrollHint/ScrollHint'
import HeroTitle from "../home/HeroTitle";

export default function HeroSection({ sharedAudio = null }) {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  useScrollNavigation({
    containerRef,
    currentSection,
    setCurrentSection,
    totalSections: sectionsData.length
  });

  return (
    <div className="relative">
   
      <div 
        ref={containerRef}
        className="sticky top-0 w-full h-screen bg-highlight text-darkText overflow-hidden z-10"
      >
        {/* <ProgressIndicator
          sections={sectionsData}
          currentSection={currentSection}
          onSectionChange={setCurrentSection}
        /> */}

        <ScrollHint currentSection={currentSection} totalSections={sectionsData.length} />

        <div className="relative h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full"
            >
              <ContentCard
                {...sectionsData[currentSection]}
                isVisible={true}
                delay={150}
                audio={sharedAudio}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <div 
        className="h-screen bg-transparent" 
        style={{ 
          height: `${sectionsData.length * 100}vh` 
        }}
      />
    </div>
  );
}