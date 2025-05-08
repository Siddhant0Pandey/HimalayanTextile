import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiScissors,
  FiWind,
  FiDroplet,
  FiFeather,
  FiChevronRight,
} from "react-icons/fi";

export default function Making() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const theme = {
    primary: "#1fa951",
    secondary: "#729a78",
    light: "#edfeee",
    highlight: "#f6edd9",
    lightText: "#eaeeff",
    darkText: "#1d1f10",
    fontDisplay: "'Roboto Slab', sans-serif",
  };

  const processSteps = [
    {
      id: 1,
      title: "Harvesting & Sorting",
      description:
        "Fibers are carefully harvested from premium sources like sheep, alpaca, or cotton plants. The raw materials are then meticulously sorted by quality, length, and texture.",
      icon: <FiFeather style={{ color: theme.primary }} />,
      color: theme.light,
      accent: theme.primary,
      image: "/api/placeholder/800/500",
    },
    {
      id: 2,
      title: "Cleaning & Carding",
      description:
        "Raw fibers undergo a thorough cleaning process to remove impurities. Then, carding aligns the fibers in the same direction, creating soft, fluffy sheets ready for spinning.",
      icon: <FiWind style={{ color: theme.secondary }} />,
      color: theme.light,
      accent: theme.secondary,
      image: "/api/placeholder/800/500",
    },
    {
      id: 3,
      title: "Spinning & Plying",
      description:
        "The prepared fibers are twisted together, creating a continuous strand. Multiple strands are then plied together in the opposite direction for strength and balance.",
      icon: <FiScissors style={{ color: theme.primary }} />,
      color: theme.light,
      accent: theme.primary,
      image: "/api/placeholder/800/500",
    },
    {
      id: 4,
      title: "Dyeing & Finishing",
      description:
        "The yarn is dyed using natural or synthetic colorants. Finally, it undergoes finishing treatments like steaming or washing to set the twist and enhance softness.",
      icon: <FiDroplet style={{ color: theme.secondary }} />,
      color: theme.light,
      accent: theme.secondary,
      image: "/api/placeholder/800/500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    let interval;
    if (isVisible) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 5000);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      clearInterval(interval);
    };
  }, [isVisible, processSteps.length]);

  const getStepStatus = (index) => {
    if (index === activeStep) return "active";
    if (index < activeStep) return "completed";
    return "upcoming";
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-16 px-4 md:px-8"
      style={{
        backgroundImage: `linear-gradient(135deg, ${theme.light} 0%, ${theme.highlight} 100%)`,
        fontFamily: theme.fontDisplay,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: theme.primary }}
        >
          The Art of Yarn Making
        </h2>
        <p
          className="text-lg text-center max-w-3xl mx-auto mb-16"
          style={{ color: theme.darkText }}
        >
          Discover our meticulous four-stage process that transforms raw natural
          fibers into luxurious, premium-quality yarn for your creative
          projects.
        </p>

        {/* Timeline Steps */}
        <div className="flex flex-wrap justify-center mb-12 relative">
          <div
            className="absolute top-5 left-0 right-0 h-1 hidden md:block"
            style={{ backgroundColor: theme.secondary, opacity: 0.3 }}
          />
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className={`relative z-10 px-4 mb-6 md:mb-0 w-full md:w-1/4 ${
                getStepStatus(index) === "active" ? "scale-110" : "scale-100"
              }`}
              animate={
                getStepStatus(index) === "active"
                  ? { scale: 1.05 }
                  : { scale: 1 }
              }
              transition={{ duration: 0.3 }}
            >
              <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveStep(index)}
              >
                <motion.div
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "0.5rem",
                    borderWidth: "2px",
                    borderColor: step.accent,
                    backgroundColor:
                      getStepStatus(index) === "active"
                        ? "#ffffff"
                        : step.color,
                  }}
                  animate={
                    getStepStatus(index) === "active"
                      ? {
                          scale: [1, 1.2, 1],
                          backgroundColor: ["#ffffff", step.color, "#ffffff"],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: getStepStatus(index) === "active" ? Infinity : 0,
                    repeatDelay: 1,
                  }}
                >
                  {step.icon}
                </motion.div>
                <h3
                  className="text-center font-semibold"
                  style={{
                    color:
                      getStepStatus(index) === "active"
                        ? theme.primary
                        : theme.secondary,
                  }}
                >
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step Content */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            backgroundColor: processSteps[activeStep].color,
            borderWidth: "2px",
            borderColor: processSteps[activeStep].accent,
          }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2">
              <img
                src={processSteps[activeStep].image}
                alt={processSteps[activeStep].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    backgroundColor: processSteps[activeStep].color,
                    borderWidth: "2px",
                    borderColor: processSteps[activeStep].accent,
                  }}
                >
                  {processSteps[activeStep].icon}
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: theme.primary }}
                >
                  {processSteps[activeStep].title}
                </h3>
              </div>
              <p className="mb-6" style={{ color: theme.darkText }}>
                {processSteps[activeStep].description}
              </p>
              <div className="mt-auto"></div>
            </div>
          </div>
        </motion.div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-8">
          {processSteps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              style={{
                width: "0.75rem",
                height: "0.75rem",
                borderRadius: "50%",
                margin: "0 0.5rem",
                backgroundColor:
                  index === activeStep ? theme.primary : theme.secondary,
                opacity: index === activeStep ? 1 : 0.3,
              }}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Yarn Motion Line */}
        <div className="relative mt-16 py-8">
          <div
            className="absolute left-0 right-0 h-1 top-1/2 transform -translate-y-1/2"
            style={{
              background: `linear-gradient(to right, transparent, ${theme.primary}, transparent)`,
            }}
          >
            <motion.div
              style={{
                position: "absolute",
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                backgroundColor: theme.primary,
                borderWidth: "4px",
                borderColor: "white",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                top: "50%",
                transform: "translateY(-50%)",
              }}
              animate={{ left: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* Call to Action */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3
            className="text-2xl font-bold mb-4"
            style={{ color: theme.primary }}
          >
            Experience Our Craft Firsthand
          </h3>
          <p
            className="mb-6 max-w-2xl mx-auto"
            style={{ color: theme.darkText }}
          >
            Join one of our workshops to see the entire process and create your
            own custom yarn under the guidance of master artisans.
          </p>
          <button
            className="font-semibold py-3 px-8 rounded-full transition-colors shadow-lg"
            style={{
              backgroundColor: theme.primary,
              color: theme.light,
            }}
          >
            Book a Workshop
          </button>
        </motion.div> */}
      </motion.div>
    </div>
  );
}
