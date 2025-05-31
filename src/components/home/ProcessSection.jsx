/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Leaf, Droplets, Wind, Sparkles, ArrowRight, Mountain, Eye, Zap } from 'lucide-react';

const processSteps = [
  { 
    name: "Raw Fiber", 
    image: "/assets/img/Fiber/fibre.jpg", 
    color: "#8B4513",
    story: "High in the Himalayas, wild nettle grows naturally in pristine mountain conditions",
    icon: Leaf,
    step: "01",
    gradient: "from-amber-600 to-orange-700"
  },
  { 
    name: "Degummed", 
    image: "/assets/img/extra/nettle.jpg", 
    color: "#228B22",
    story: "Traditional water processing removes natural impurities while preserving fiber strength",
    icon: Droplets,
    step: "02",
    gradient: "from-emerald-600 to-teal-700"
  },
  { 
    name: "Yarn", 
    image: "/assets/img/fabrics.jpg", 
    color: "#4169E1",
    story: "Ancient spinning techniques transform clean fibers into strong, durable threads",
    icon: Wind,
    step: "03",
    gradient: "from-blue-600 to-indigo-700"
  },
  { 
    name: "Fabric", 
    image: "/assets/img/extra/nettle.jpg", 
    color: "#9932CC",
    story: "Master weavers craft sustainable textiles using generations of inherited wisdom",
    icon: Sparkles,
    step: "04",
    gradient: "from-purple-600 to-pink-700"
  },
];

const ProcessCard = ({ step, index, isActive, onActivate }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { 
    once: false, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  });
  
  const StepIcon = step.icon;
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isEven ? -200 : 200,
      y: 50,
      rotateY: isEven ? -45 : 45,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.2,
        delay: index * 0.2
      }
    },
    exit: {
      opacity: 0,
      x: isEven ? 100 : -100,
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      className={`relative group cursor-pointer ${isEven ? 'justify-self-start' : 'justify-self-end'}`}
      style={{ perspective: "1000px" }}
      onHoverStart={() => onActivate(index)}
      onClick={() => onActivate(index)}
    >
      {/* Floating Background Elements */}
      <motion.div
        className="absolute -inset-8 rounded-3xl opacity-20"
        style={{ 
          background: `conic-gradient(from 0deg, ${step.color}40, transparent, ${step.color}20, transparent, ${step.color}40)` 
        }}
        animate={{
          rotate: isActive ? [0, 360] : [0, 180],
          scale: isActive ? [1, 1.2, 1] : [0.8, 1, 0.8]
        }}
        transition={{
          duration: isActive ? 8 : 12,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Main Card */}
      <motion.div
        className={`relative w-80 h-96 rounded-2xl overflow-hidden backdrop-blur-lg border border-white/20 bg-gradient-to-br ${step.gradient} bg-opacity-10`}
        animate={{
          rotateY: isActive ? [0, 5, -5, 0] : 0,
          z: isActive ? 50 : 0,
          boxShadow: isActive 
            ? `0 25px 50px -12px ${step.color}60, 0 0 0 1px ${step.color}40`
            : `0 10px 25px -5px rgba(0,0,0,0.3)`
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.05,
          rotateY: isEven ? 8 : -8,
          transition: { duration: 0.3 }
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${step.image})`,
              filter: 'blur(2px) brightness(0.7)'
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${step.gradient} opacity-60`} />
          
          {/* Animated Mesh Overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${step.color}40 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, ${step.color}20 1px, transparent 1px)`,
              backgroundSize: '50px 50px, 30px 30px'
            }}
            animate={{
              backgroundPosition: isActive 
                ? ['0% 0%, 0% 0%', '100% 100%, -100% -100%']
                : ['0% 0%, 0% 0%', '50% 50%, -50% -50%']
            }}
            transition={{
              duration: isActive ? 4 : 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 p-6 h-full flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-start justify-between">
            <motion.div
              className="flex items-center gap-3"
              animate={{ 
                scale: isActive ? 1.1 : 1,
                rotate: isActive ? [0, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-5xl font-black text-white/30">{step.step}</span>
              <motion.div
                animate={{ 
                  rotate: isActive ? 360 : 0,
                  scale: isActive ? [1, 1.3, 1] : 1
                }}
                transition={{ 
                  duration: isActive ? 2 : 1,
                  repeat: isActive ? Infinity : 0
                }}
              >
                <StepIcon size={32} className="text-white/80" />
              </motion.div>
            </motion.div>

            {/* Floating Particles */}
            {isActive && (
              <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -100, -200],
                      x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 150],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Title */}
          <motion.h3 
            className="text-2xl font-bold text-white mb-2"
            animate={{ 
              y: isActive ? [0, -5, 0] : 0,
              textShadow: isActive 
                ? `0 0 20px ${step.color}80`
                : '0 2px 4px rgba(0,0,0,0.5)'
            }}
            transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
          >
            {step.name}
          </motion.h3>

          {/* Story */}
          <motion.p 
            className="text-white/90 text-sm leading-relaxed flex-grow"
            animate={{ opacity: isActive ? 1 : 0.8 }}
          >
            {step.story}
          </motion.p>

          {/* Progress Bar */}
          <motion.div 
            className="w-full h-1 bg-white/20 rounded-full mt-4 overflow-hidden"
            whileHover={{ height: 6 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: step.color }}
              animate={{ 
                width: isActive ? "100%" : "0%",
                boxShadow: isActive ? `0 0 10px ${step.color}` : 'none'
              }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>
        </div>

        {/* Holographic Edge Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          style={{
            background: `linear-gradient(45deg, transparent, ${step.color}40, transparent, ${step.color}60, transparent) border-box`,
            mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude'
          }}
          animate={{
            background: isActive 
              ? [
                  `linear-gradient(0deg, transparent, ${step.color}40, transparent, ${step.color}60, transparent) border-box`,
                  `linear-gradient(90deg, transparent, ${step.color}40, transparent, ${step.color}60, transparent) border-box`,
                  `linear-gradient(180deg, transparent, ${step.color}40, transparent, ${step.color}60, transparent) border-box`,
                  `linear-gradient(270deg, transparent, ${step.color}40, transparent, ${step.color}60, transparent) border-box`,
                  `linear-gradient(360deg, transparent, ${step.color}40, transparent, ${step.color}60, transparent) border-box`
                ]
              : `linear-gradient(45deg, transparent, ${step.color}20, transparent) border-box`
          }}
          transition={{
            duration: isActive ? 3 : 2,
            repeat: isActive ? Infinity : 0,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Connection Line */}
      {index < processSteps.length - 1 && (
        <motion.div
          className={`absolute ${isEven ? 'left-full' : 'right-full'} top-1/2 w-32 h-0.5 -translate-y-1/2`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 0.6 } : { scaleX: 0, opacity: 0 }}
          transition={{ delay: (index + 1) * 0.3, duration: 0.8 }}
          style={{ 
            background: `linear-gradient(90deg, ${step.color}60, ${processSteps[index + 1]?.color}60)`,
            transformOrigin: isEven ? 'left' : 'right'
          }}
        >
          <motion.div
            className="absolute right-0 top-1/2 -translate-y-1/2"
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowRight size={16} className="text-white/60" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function ProcessSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const processRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const titleInView = useInView(titleRef, { once: false, amount: 0.3 });
  const processInView = useInView(processRef, { once: false, amount: 0.1 });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
  
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      rotateX: -90,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.5,
        staggerChildren: 0.2
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -50, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      x: 0, 
      filter: "blur(0px)",
      transition: { duration: 1, delay: 0.5 }
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden text-white"
      style={{ perspective: "1000px" }}
    >
      {/* Dynamic Background System */}
      <motion.div 
        className="absolute inset-0"
        style={{ 
          y: backgroundY,
          scale: backgroundScale
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(/assets/img/bg/mountain-proces.jpg)',
            filter: 'blur(8px) brightness(0.6) saturate(1.2)'
          }}
        />
        
        {/* Animated Gradient Overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(16,185,129,0.3), rgba(59,130,246,0.3), rgba(147,51,234,0.3))',
              'linear-gradient(135deg, rgba(147,51,234,0.3), rgba(16,185,129,0.3), rgba(59,130,246,0.3))',
              'linear-gradient(225deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3), rgba(16,185,129,0.3))',
              'linear-gradient(315deg, rgba(16,185,129,0.3), rgba(147,51,234,0.3), rgba(59,130,246,0.3))'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      {/* Interactive Light Orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.1), transparent)',
          left: mouseX,
          top: mouseY,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(40px)'
        }}
      />
      
      <motion.div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(100,255,200,0.2), transparent)',
          left: mouseX,
          top: mouseY,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(20px)'
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Enhanced Header Section */}
        <motion.div
          ref={titleRef}
          variants={titleVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
          className="pt-20 pb-16 px-4 sm:px-8 text-center"
        >
          <motion.div className="relative">
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 relative"
              style={{ perspective: "1000px" }}
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  rotateY: titleInView ? [0, 5, -5, 0] : 0
                }}
                transition={{
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" },
                  rotateY: { duration: 4, repeat: Infinity }
                }}
                style={{ backgroundSize: '300% 300%' }}
              >
                From Mountain
              </motion.span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-l from-purple-200 via-pink-200 to-white bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                  rotateY: titleInView ? [0, -5, 5, 0] : 0
                }}
                transition={{
                  backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear", delay: 1 },
                  rotateY: { duration: 4, repeat: Infinity, delay: 0.5 }
                }}
                style={{ backgroundSize: '300% 300%' }}
              >
                to Market
              </motion.span>
            </motion.h1>

            {/* 3D Floating Elements around title */}
            {titleInView && [...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/60 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [0, -30, 0, 30, 0],
                  x: [0, 20, 0, -20, 0],
                  rotateZ: [0, 180, 360],
                  opacity: [0, 1, 0.5, 1, 0]
                }}
                transition={{
                  duration: 6 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
          
          <motion.p 
            variants={subtitleVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4 mb-8"
          >
            A journey through ancient wisdom and modern sustainability
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ delay: 1, duration: 0.8, type: "spring" }}
          >
            <span className="text-lg font-semibold">Discover Our Process</span>
            <motion.div
              animate={{ y: [0, 15, 0], rotateX: [0, 180, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Eye size={28} className="text-cyan-400" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Revolutionary Process Layout */}
        <motion.div
          ref={processRef}
          className="px-4 sm:px-8 lg:px-16 py-16"
          initial={{ opacity: 0 }}
          animate={processInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Spiral/Orbital Layout for Desktop */}
          <div className="hidden lg:block relative max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-32 items-center min-h-screen">
              {processSteps.map((step, index) => (
                <ProcessCard
                  key={step.name}
                  step={step}
                  index={index}
                  isActive={activeStep === index}
                  onActivate={setActiveStep}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Mobile Layout */}
          <div className="lg:hidden space-y-16">
            {processSteps.map((step, index) => (
              <ProcessCard
                key={step.name}
                step={step}
                index={index}
                isActive={activeStep === index}
                onActivate={setActiveStep}
              />
            ))}
          </div>

          {/* Enhanced Progress Navigation */}
          <motion.div 
            className="flex justify-center items-center space-x-6 mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            {processSteps.map((step, index) => (
              <motion.button
                key={index}
                className="relative group"
                onClick={() => setActiveStep(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-4 h-4 rounded-full transition-all duration-300 relative z-10"
                  style={{ 
                    backgroundColor: index === activeStep ? step.color : 'rgba(255,255,255,0.3)' 
                  }}
                  animate={{ 
                    scale: index === activeStep ? 1.5 : 1,
                    boxShadow: index === activeStep 
                      ? `0 0 30px ${step.color}, 0 0 60px ${step.color}40`
                      : 'none'
                  }}
                />
                
                {/* Ripple Effect */}
                {index === activeStep && (
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: step.color }}
                    animate={{
                      scale: [1, 2, 3],
                      opacity: [0.8, 0.3, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                )}
                
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white/70 group-hover:text-white transition-colors">
                  {step.step}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}