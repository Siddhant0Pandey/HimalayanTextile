/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import OurStoryAnimation from "./OurStoryAnimation";
import TextileParticles from "./TextileParicles";
import OurStoryAnimation2 from "./OurStoryAnimation2";
import AnimatedMapPins from "../../storymap/AnimatedMapPins";

const endProgress = 0.6;
const timelineData = [
  {
    year: "1995",
    title: "Humble Beginnings",
    description:
      "Nanda Dangi founded the company in Rukum, Nepal, starting with hand spinning nettle and hemp yarn using locally sourced natural fibers.",
    image: "/assets/img/factory.png",
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
    image: "/assets/img/handloom.jpg",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2011",
    title: "Machine Production in Kathmandu",
    description:
      "Established machine spinning and weaving units in Kathmandu, combining traditional knowledge with modern technology.",
    image: "/assets/img/machinespun.jpg",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2017",
    title: "Export to India Begins",
    description:
      "Launched exports of yarn and handloom fabric to India, marking the first step into international trade.",
    color: "from-green-600 to-emerald-800",
  },
  {
    year: "2023",
    title: "Global Expansion",
    description:
      "Began exporting eco-friendly home textile products to global markets under a sustainable and ethical model.",
    color: "from-green-600 to-emerald-800",
  },
];

const TimelineSection = ({ item, index }) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const { scrollYProgress: sectionScrollProgress } = useScroll({
    target: sectionRef,
    offset: ["-40% end", "end start"],
  });

  const smoothProgress = useSpring(sectionScrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const yearOpacity = useTransform(smoothProgress, [0.05, 0.25], [0, 1]);
  const yearScale = useTransform(smoothProgress, [0.05, 0.25], [0.7, 1]);
  const yearY = useTransform(smoothProgress, [0.05, 0.25], [100, 0]);

  const titleOpacity = useTransform(smoothProgress, [0.2, 0.5], [0, 1]);
  const descriptionOpacity = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);

  const imageOpacity = useTransform(smoothProgress, [0.4, 0.7], [0, 1]);
  const imageScale = useTransform(smoothProgress, [0.4, 0.7], [1.2, 1]);
  const imageY = useTransform(smoothProgress, [0.4, 0.7], [120, 0]);

  const hasImage = !!item.image;

  return (
    <div
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 relative overflow-hidden bg-highlight ${item.color}`}
    >
      <TextileParticles />

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#edfeee]"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
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
        </motion.div>

        <motion.div className="mb-8 sm:mb-12 md:mb-16 pb-6 sm:pb-8 md:pb-12 overflow-hidden text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 leading-tight px-2 whitespace-pre-wrap break-words">
            {item.title}
          </h2>
        </motion.div>

        <div
          className={`flex flex-col ${
            hasImage ? "lg:flex-row" : "lg:flex-col"
          } gap-8 lg:gap-12 items-center`}
        >
          <motion.div className="mb-0 sm:mb-12 md:mb-16 pb-6 sm:pb-8 md:pb-12 overflow-hidden flex-1 w-full">
            <p
              className={`text-base sm:text-lg md:text-xl text-green-600 text-opacity-90 leading-relaxed max-w-4xl mx-auto ${
                hasImage ? "text-center lg:text-left" : "text-center"
              } px-2`}
            >
              {(() => {
                const words = item.description.split(" ");
                const totalWords = words.length;
                const wordInterval = (endProgress - 0.25) / totalWords;

                return words.map((word, wordIndex) => (
                  <motion.span
                    key={wordIndex}
                    className="inline-block mr-1"
                    style={{
                      opacity: useTransform(
                        smoothProgress,
                        [
                          0.25 + wordIndex * wordInterval,
                          0.25 + wordIndex * wordInterval + wordInterval * 0.6,
                        ],
                        [0, 1]
                      ),
                    }}
                  >
                    {word}
                  </motion.span>
                ));
              })()}
            </p>
          </motion.div>

          {hasImage && (
            <motion.div
              style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
              className="relative flex-1 w-full max-w-lg lg:max-w-3xl mx-auto"
            >
              <div className="relative h-[80vh]">
                <img src={item.image} className="w-full xl:h-60 object-cover" />
              </div>

              {/* Decorative blobs */}
              <div className="absolute -top-3 -left-3 w-4 h-4 bg-white bg-opacity-20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white bg-opacity-15 rounded-full blur-sm"></div>
              <div className="absolute top-2 -right-2 w-3 h-3 bg-white bg-opacity-25 rounded-full blur-sm"></div>
            </motion.div>
          )}
        </div>
      </div>

      {index < timelineData.length - 1 && !isMobile && (
        <motion.div
          animate={{ x: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-4 h-8 border-2 border-white border-opacity-50 rounded-full flex justify-center backdrop-blur-sm">
            <motion.div
              className="w-0.5 h-2 bg-white bg-opacity-70 rounded-full mt-1.5"
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
          {index === 2 && <OurStoryAnimation />}
          {index === 4 && <OurStoryAnimation2 />}
          {index === 5 && <AnimatedMapPins />}
        </React.Fragment>
      ))}

      <div className="min-h-screen bg-emerald-800 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-white max-w-5xl mx-auto space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight px-2">
            The Journey Continues
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed px-2">
            From rural Nepal to global markets, our commitment to sustainable
            and ethical textile production drives us forward into the future.
          </p>
          <div className="pt-4">
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
