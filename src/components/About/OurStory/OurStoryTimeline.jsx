/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import OurStoryAnimation from "./OurStoryAnimation";
import TextileParticles from "./TextileParicles";
import OurStoryAnimation2 from "./OurStoryAnimation2";

const endProgress = 0.6;
const timelineData = [
  {
    year: "1995",
    title: "Humble Beginnings",
    description:
      "Nanda Dangi founded the company in Rukum, Nepal, starting with hand spinning nettle and hemp yarn using locally sourced natural fibers.",
    image:
      "https://images.unsplash.com/photo-1516975369741-5c6ae9cf5fba?w=800&h=600&fit=crop&crop=center",
    color: "#edfeee",
  },
  {
    year: "2000",
    title: "Yarn Extraction Process Developed",
    description:
      "Improved traditional methods of fiber extraction and yarn making, laying the foundation for sustainable production.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2007",
    title: "Handloom Weaving Introduced",
    description:
      "Started handwoven fabric production, employing and empowering over 50 local women in rural Nepal.",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop&crop=center",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2011",
    title: "Machine Production in Kathmandu",
    description:
      "Established machine spinning and weaving units in Kathmandu, combining traditional knowledge with modern technology.",
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop&crop=center",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2017",
    title: "Export to India Begins",
    description:
      "Launched exports of yarn and handloom fabric to India, marking the first step into international trade.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&crop=center",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Began exporting eco-friendly home textile products to global markets under a sustainable and ethical model.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center",
    color: "from-green-600 to-emerald-800",
  },
];

const TimelineSection = ({ item, index, progress }) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["-40% end", "end start"],
  });

  // Smooth spring animations for better performance
  const smoothProgress = useSpring(sectionScrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Keep original year animation unchanged
  const yearOpacity = useTransform(smoothProgress, [0.05, 0.25], [0, 1]);
  const yearScale = useTransform(smoothProgress, [0.05, 0.25], [0.7, 1]);
  const yearY = useTransform(smoothProgress, [0.05, 0.25], [100, 0]);

  // Enhanced title animations - typewriter effect
  const titleOpacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);

  // Enhanced description animations - typewriter effect
  const descriptionOpacity = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);

  const imageOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const imageScale = useTransform(smoothProgress, [0.4, 0.7], [1.2, 1]);
  const imageY = useTransform(smoothProgress, [0.4, 0.7], [120, 0]);

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 relative overflow-hidden bg-highlight ${item.color}`}
    >
      <TextileParticles />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#edfeee]"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Year section - keeping original animation with responsive sizing */}
        <motion.div
          style={{ opacity: yearOpacity, scale: yearScale, y: yearY }}
          className="mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-green-600 mb-4 sm:mb-6 tracking-tight leading-none"
              style={{
                y: useTransform(smoothProgress, [0.1, 0.5], [200, 0]),
                rotateX: useTransform(smoothProgress, [0.1, 0.5], [90, 0]),
              }}
            >
              <motion.span
                style={{
                  display: "inline-block",
                  y: useTransform(smoothProgress, [0.15, 0.45], [100, 0]),
                }}
                className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6"
              >
                {item.year.split("").map((digit, i) => (
                  <motion.span
                    key={i}
                    style={{
                      display: "inline-block",
                      y: useTransform(
                        smoothProgress,
                        [0.1 + i * 0.05, 0.4 + i * 0.05],
                        [150, 0]
                      ),
                      opacity: useTransform(
                        smoothProgress,
                        [0.1 + i * 0.05, 0.3 + i * 0.05],
                        [0, 1]
                      ),
                      rotateY: useTransform(
                        smoothProgress,
                        [0.1 + i * 0.05, 0.4 + i * 0.05],
                        [180, 0]
                      ),
                    }}
                    className="origin-center"
                  >
                    {digit}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>
          </div>
          <motion.div
            className="w-16 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-white mx-auto rounded-full opacity-80"
            style={{
              scaleX: useTransform(smoothProgress, [0.3, 0.6], [0, 1]),
              opacity: useTransform(smoothProgress, [0.3, 0.6], [0, 0.8]),
            }}
          />
        </motion.div>

        {/* Title section with typing animation */}
        <motion.div className="mb-8 sm:mb-12 md:mb-16 pb-6 sm:pb-8 md:pb-12 overflow-hidden text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 leading-tight px-2 whitespace-pre-wrap break-words">
            {item.title.split(" ").map((word, wordIndex) => (
              <motion.span key={wordIndex} className="inline-block mr-1">
                {word.split("").map((char, charIndex) => {
                  const index = wordIndex * 10 + charIndex; // Adjust to stagger animation
                  return (
                    <motion.span
                      key={charIndex}
                      className="inline-block"
                      style={{
                        opacity: useTransform(
                          smoothProgress,
                          [0.15 + index * 0.008, 0.18 + index * 0.008],
                          [0, 1]
                        ),
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                <span className="inline-block">&nbsp;</span>
              </motion.span>
            ))}
            <motion.span
              className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 lg:h-12 bg-green-600 ml-1 align-middle"
              style={{
                opacity: useTransform(
                  smoothProgress,
                  [0.15 + item.title.length * 0.008, 0.4],
                  [0, 1]
                ),
              }}
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h2>
        </motion.div>

        {/* Main content - responsive layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Description section with typing animation */}
          <motion.div className="mb-8 sm:mb-12 md:mb-16 pb-6 sm:pb-8 md:pb-12 overflow-hidden flex-1 w-full lg:w-auto">
            <p
              className="text-base sm:text-lg md:text-xl lg:text-xl text-green-600 text-opacity-90 leading-relaxed sm:leading-normal max-w-4xl mx-auto lg:mx-0 text-center lg:text-left px-2"
              style={{
                wordBreak: "normal",
                overflowWrap: "break-word",
                whiteSpace: "normal",
              }}
            >
              {(() => {
                const words = item.description.split(" ");
                const startProgress = 0.25;
                const endProgress = 0.6;
                const totalWords = words.length;
                const wordInterval = (endProgress - startProgress) / totalWords;

                return words.map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-1"
                    style={{
                      opacity: useTransform(
                        smoothProgress,
                        [
                          startProgress + wordIndex * wordInterval,
                          startProgress +
                            wordIndex * wordInterval +
                            wordInterval * 0.6,
                        ],
                        [0, 1]
                      ),
                    }}
                  >
                    {word}
                  </motion.span>
                ));
              })()}
              <motion.span
                className="inline-block w-0.5 h-4 sm:h-5 md:h-6 lg:h-7 bg-green-600 bg-opacity-90 ml-1"
                style={{
                  opacity: useTransform(
                    smoothProgress,
                    [endProgress, 0.8],
                    [0, 1]
                  ),
                }}
                animate={{
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </p>
          </motion.div>

          {/* Image section with responsive sizing */}
          <motion.div
            style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
            className="relative flex-1 w-full lg:w-auto max-w-lg lg:max-w-3xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-2xl  ">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            {/* Decorative elements with responsive positioning */}
            <div className="absolute -top-3 sm:-top-4 md:-top-6 -left-3 sm:-left-4 md:-left-6 w-4 sm:w-6 md:w-8 h-4 sm:h-6 md:h-8 bg-white bg-opacity-20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 w-6 sm:w-8 md:w-12 h-6 sm:h-8 md:h-12 bg-white bg-opacity-15 rounded-full blur-sm"></div>
            <div className="absolute top-2 sm:top-3 md:top-4 -right-2 sm:-right-3 md:-right-4 w-3 sm:w-4 md:w-6 h-3 sm:h-4 md:h-6 bg-white bg-opacity-25 rounded-full blur-sm"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with refined animation - hide on mobile for better UX */}
      {index < timelineData.length - 1 && !isMobile && (
        <motion.div
          animate={{
            x: [0, 12, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-4 sm:w-5 md:w-6 h-8 sm:h-9 md:h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-0.5 sm:w-1 h-2 sm:h-2.5 md:h-3 bg-white bg-opacity-70 rounded-full mt-1.5 sm:mt-2"
              animate={{ height: [8, 6, 8] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
};

const OurStoryTimeline = () => {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative">
      {timelineData.map((item, index) => (
        <React.Fragment key={item.year}>
          <TimelineSection item={item} index={index} />

          {/* Insert custom component after 2007 (index 2) */}
          {index === 2 && <OurStoryAnimation />}
          {index === 4 && <OurStoryAnimation2/>}
        </React.Fragment>
      ))}

      {/* Final section - fully responsive */}
      <div className="min-h-screen bg-emerald-800 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-white max-w-5xl mx-auto space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
            The Journey Continues
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-2">
            From rural Nepal to global markets, our commitment to sustainable
            and ethical textile production drives us forward into the future.
          </p>
          <div className="pt-4 sm:pt-6 md:pt-8">
            <motion.div
              className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-green-800 to-emerald-500 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStoryTimeline;
