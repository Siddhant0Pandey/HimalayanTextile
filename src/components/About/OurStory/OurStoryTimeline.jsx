import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Camera, Leaf, Users, Factory, Globe, Home } from "lucide-react";

const timelineData = [
  {
    year: 1995,
    title: "Humble Beginnings",
    description:
      "Nanda Dangi founded the company in Rukum, Nepal, starting with hand spinning nettle and hemp yarn, using locally sourced, natural fibers.",
    icon: Leaf,
    color: "from-green-500 to-emerald-600",
  },
  {
    year: 2000,
    title: "Yarn Extraction Process Developed",
    description:
      "Improved traditional methods of fiber extraction and yarn making, laying the foundation for sustainable production.",
    icon: Factory,
    color: "from-green-500 to-emerald-600",
  },
  {
    year: 2007,
    title: "Handloom Weaving Introduced",
    description:
      "Started handwoven fabric production, employing and empowering over 50 local women in rural Nepal.",
    icon: Users,
    color: "from-green-500 to-emerald-600",
  },
  {
    year: 2011,
    title: "Machine-Spun Yarn & Fabric Production in Kathmandu",
    description:
      "Established machine spinning and weaving units in Kathmandu to scale up production of natural yarns and fabrics, combining traditional knowledge with modern technology.",
    icon: Factory,
    color: "from-green-500 to-emerald-600",
  },
  {
    year: 2017,
    title: "Export to India Begins",
    description:
      "Launched exports of yarn and handloom fabric to India, marking the company's first step into international trade.",
    icon: Globe,
    color: "from-green-500 to-emerald-600",
  },
  {
    year: 2023,
    title: "Global Expansion in Home Textiles",
    description:
      "Began exporting eco-friendly home textile products—such as rugs, fabrics, and accessories—to global markets under a sustainable and ethical model.",
    icon: Home,
    color: "from-green-500 to-emerald-600",
  },
];

const TimelineEvent = ({ event, index, isLast }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.3, once: false });
  const [digits, setDigits] = useState(["0", "0", "0", "0"]);
  const isLeft = index % 2 === 0;

  // Animate year digits like a clock
  useEffect(() => {
    if (isInView) {
      const yearStr = event.year.toString();
      const targetDigits = yearStr.padStart(4, "0").split("");

      // Reset to 0000 first
      setDigits(["0", "0", "0", "0"]);

      // Then animate each digit
      targetDigits.forEach((digit, i) => {
        setTimeout(() => {
          setDigits((prev) => {
            const newDigits = [...prev];
            newDigits[i] = digit;
            return newDigits;
          });
        }, i * 150 + 200);
      });
    } else {
      setDigits(["0", "0", "0", "0"]);
    }
  }, [isInView, event.year]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const photoVariants = {
    hidden: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: {
      x: isLeft ? -100 : 100,
      opacity: 0,
      y: 20,
    },
    visible: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.4,
      },
    },
  };

  const yearVariants = {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const digitVariants = {
    initial: {
      y: 50,
      rotateX: 90,
      opacity: 0,
    },
    animate: {
      y: 0,
      rotateX: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const IconComponent = event.icon;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-32 h-[100vh] ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Content Side */}
      <motion.div
        className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}
        variants={textVariants}
      >
        <motion.h3
          className="text-2xl font-bold text-gray-800 mb-4"
          variants={textVariants}
        >
          {event.title}
        </motion.h3>
        <motion.p
          className="text-gray-600 leading-relaxed text-lg"
          variants={textVariants}
        >
          {event.description}
        </motion.p>
      </motion.div>

      {/* Timeline Center */}
      <div className="w-2/12 flex flex-col items-center relative">
        {/* Year Display */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-6 mb-6 border-4 border-gray-100"
          variants={yearVariants}
        >
          <div className="flex space-x-1">
            {digits.map((digit, i) => (
              <motion.div
                key={`${event.year}-${i}`}
                className="w-12 h-16 bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-lg flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                variants={digitVariants}
                initial="initial"
                animate="animate"
                style={{ perspective: "1000px" }}
              >
                <motion.span
                  key={digit}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: i * 0.1,
                  }}
                >
                  {digit}
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Line */}
        <div className="w-1 bg-gradient-to-b from-gray-300 to-gray-400 h-24 rounded-full relative">
          <motion.div
            className="absolute top-0 left-0 w-full bg-emerald-800 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {!isLast && (
          <div className="w-1 bg-gradient-to-b from-gray-300 to-gray-400 h-32 rounded-full" />
        )}
      </div>

      {/* Photo Side */}
      <motion.div
        className={`w-5/12 ${isLeft ? "pl-12" : "pr-12"}`}
        variants={photoVariants}
      >
        <motion.div
          className={`relative w-80 h-60 bg-gradient-to-br ${event.color} rounded-3xl shadow-2xl overflow-hidden`}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Photo Placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              backgroundImage: `url('/assets/img/bgImage1.png')`,
            }}
          >
            <motion.div
              // className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
              style={{
                backgroundImage: `url('/assets/img/bgImage1.png')`,
              }}
            >
              {/* <IconComponent size={48} className="text-white mb-4" /> */}
              {/* <motion.div
                className="flex items-center space-x-2 text-white"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 }}
              >
                {/* <Camera size={20} /> */}
              {/* <span className="text-sm font-medium">Photo</span> */}
              {/* </motion.div> */}
            </motion.div>
          </div>

          {/* Corner Badge */}
          {/* <motion.div
            className="absolute top-4 right-4 bg-white bg-opacity-25 backdrop-blur-sm rounded-full px-3 py-1"
            initial={{ scale: 0, rotate: 180 }}
            animate={
              isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 180 }
            }
            transition={{ delay: 1, type: "spring", stiffness: 200 }}
          >
            <span className="text-white text-sm font-bold">{event.year}</span>
          </motion.div> */}

          {/* Decorative Elements */}
          {/* <motion.div
            className="absolute -top-4 -left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"
            animate={
              isInView
                ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }
                : {}
            }
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          /> */}
          {/* <motion.div
            className="absolute -bottom-4 -right-4 w-12 h-12 bg-white bg-opacity-10 rounded-full"
            animate={
              isInView
                ? {
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                  }
                : {}
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const OurStoryTimeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="min-h-screen  overflow-hidden bg-light">
      {/* Animated Background */}
      <motion.div
        className="fixed inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-20 left-20 w-72 h-72  rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-72 h-72  rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72  rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000" />
      </motion.div>

      <div ref={containerRef} className="relative z-10">
        {/* Header */}
        <motion.div
          className="text-center py-20"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <motion.h1
            className="text-6xl font-bold bg-gradient-to-r from-green-800 via-emerald-800 to-cyan-800 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            Our Journey
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            From humble beginnings in rural Nepal to global sustainable textile
            innovation
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto px-8 pb-20">
          {timelineData.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center pb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-gray-500 text-lg">The journey continues...</div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStoryTimeline;
