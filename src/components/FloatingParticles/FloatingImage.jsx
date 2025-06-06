/* eslint-disable no-unused-vars */
import { motion, useInView, AnimatePresence } from 'framer-motion';
import cottonImg from '/icons/COTTON.png'
import flaxImg from '/icons/FLAX.png'
import nettleImg from '/icons/NETTLE.png'

export const FloatingTextileImage = () => {
  const elements = [
    {
      id: 1,
      x: -10, 
      y: -20,
      delay: 0,
      type: 'png',
      content: cottonImg,
      size: 'w-90 h-90'
    },
    { 
      id: 2,
      x: -15,
      y: 20,
      delay: 3,
      type: 'png',
      content: flaxImg,
      size: 'w-90 h-90'
    },
    {
      id: 3,
      x: -5,
      y: 60,
      delay: 6,
      type: 'png',
      content: nettleImg,
   size: 'w-90 h-90'
    },
  ];


  const generateFloatingPath = (baseX, baseY, elementId) => {
    const positions = [];
    const numPoints = 8; 
    
    for (let i = 0; i < numPoints; i++) {
      const progress = i / (numPoints - 1);
     
      const waveX = Math.sin(progress * Math.PI * 2 + elementId) * 15;
      const waveY = Math.cos(progress * Math.PI * 1.5 + elementId * 0.5) * 10;
      
      positions.push({
        x: (baseX + progress * 60) % 100, 
        y: baseY + waveY + (Math.sin(progress * Math.PI + elementId) * 8)
      });
    }
    
    return positions;
  };

  return (
    <div className="absolute w-full h-screen overflow-hidden">
      {elements.map((element) => {
        const floatingPath = generateFloatingPath(element.x, element.y, element.id);
        
        return (
          <motion.div
            key={element.id}
            className={`absolute ${element.size}`}
            initial={{ 
              left: `${element.x}%`, 
              top: `${element.y}%`,
              opacity: 0,
              scale: 0.5,
              rotate: 0
            }}
            animate={{
              left: floatingPath.map(pos => `${pos.x}%`),
              top: floatingPath.map(pos => `${pos.y}%`),
              opacity: [0, 1, 1, 1, 1, 1, 1, 0.8],
              scale: [0.8, 1, 1.02, 0.98, 1.01, 0.99, 1, 1],
              rotate: [0, 5, -3, 8, -2, 4, -1, 0],
              y: [0, -2, 0, 2, 0, -1, 0, 1] // Additional floating bob
            }}
            transition={{
              duration: 12 + element.id * 2, 
              delay: element.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear", 
              times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
            }}
          >
            <img 
              src={element.content} 
              alt="Textile floating element"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </motion.div>
        );
      })}
    </div>
  );
};