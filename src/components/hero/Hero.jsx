/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentCard from '../contentcard/ContentCard'
import {useScrollNavigation} from '../../hooks/useScrollNavigation'
import {sectionsData} from '../data/sectionsData'
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'
import ScrollHint from '../ScrollHint/ScrollHint'




export default function Hero({ sharedAudio = null }) {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);


  useScrollNavigation({
    containerRef,
    currentSection,
    setCurrentSection,
    totalSections: sectionsData.length
  });

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen bg-lightText text-darkText overflow-hidden relative"
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
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-full"
          >
            <ContentCard
              {...sectionsData[currentSection]}
              isVisible={true}
              delay={200}
              audio={sharedAudio}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}