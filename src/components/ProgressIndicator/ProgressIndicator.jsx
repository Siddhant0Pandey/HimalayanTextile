/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ProgressIndicator({ sections, currentSection, onSectionChange }) {
  return (
    <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-40">
      <div className="flex flex-col space-y-3">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="group cursor-pointer"
            whileHover={{ scale: 1.2 }}
            onClick={() => onSectionChange(index)}
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSection 
                ? 'bg-white scale-125' 
                : 'bg-white/30 hover:bg-white/60'
            }`} />
            <div className={`text-xs mt-1 text-right transition-opacity duration-300 whitespace-nowrap ${
              index === currentSection ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
            }`}>
              {section.id}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}