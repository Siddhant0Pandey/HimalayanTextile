/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Droplets, Wind, Sparkles } from 'lucide-react';

const processSteps = [
  { 
    name: "Raw Fiber", 
    image: "/assets/img/Fiber/fibre.jpg", 
    story: "High in the Himalayas, wild nettle grows naturally in pristine mountain conditions",
    icon: Leaf,
    step: "01"
  },
  { 
    name: "Degummed", 
    image: "/assets/img/extra/nettle.jpg", 
    story: "Traditional water processing removes natural impurities while preserving fiber strength",
    icon: Droplets,
    step: "02"
  },
  { 
    name: "Yarn", 
    image: "/assets/img/fabrics.jpg", 
    story: "Ancient spinning techniques transform clean fibers into strong, durable threads",
    icon: Wind,
    step: "03"
  },
  { 
    name: "Fabric", 
    image: "/assets/img/extra/nettle.jpg", 
    story: "Master weavers craft sustainable textiles using generations of inherited wisdom",
    icon: Sparkles,
    step: "04"
  },
];

const ProcessCard = ({ step, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: false, 
    amount: 0.3,
    margin: "-50px 0px -50px 0px"
  });
  
  const StepIcon = step.icon;
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -60 : 60,
      y: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.2,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: (index * 0.2) + 0.3
      }
    }
  };

  const timelineDotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: (index * 0.2) + 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative flex items-center mb-16 last:mb-0 overflow-x-hidden">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 -z-10">
        {index < processSteps.length - 1 && (
          <motion.div
            className="w-full bg-gray-400"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 0.8, delay: (index * 0.2) + 0.5 }}
          />
        )}
      </div>

      {/* Content */}
      <div className={`flex items-center w-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card */}
        <motion.div
          ref={cardRef}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="flex">
              <div className="w-32 h-32 relative overflow-hidden flex-shrink-0">
                <img 
                  src={step.image} 
                  alt={step.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
              
              <motion.div 
                variants={textVariants}
                className="flex-1 p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-gray-400">{step.step}</span>
                  <StepIcon size={20} className="text-gray-600" />
                  <h3 className="text-lg font-semibold text-gray-800">{step.name}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.story}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Timeline dot */}
        <motion.div 
          variants={timelineDotVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full border-4 border-white shadow-lg z-10"
        />
        
        {/* Empty space on the other side */}
        <div className="w-5/12"></div>
      </div>
    </div>
  );
};

export default function ProcessSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pb-12">
      {/* Header Section */}
      <motion.div
        ref={titleRef}
        variants={titleVariants}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        className="pt-20 pb-16 px-4 sm:px-8 text-center"
      >

        <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-gray-800">  

          From Mountain to Market
        </h1>
        
        <motion.p 
          variants={subtitleVariants}
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
          A journey through ancient wisdom and modern sustainability
        </motion.p>
      </motion.div>

      {/* Timeline Section */}
      <div className="px-4 sm:px-8 lg:px-16 pb-20">
        <div className="max-w-6xl mx-auto relative">
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.name}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}