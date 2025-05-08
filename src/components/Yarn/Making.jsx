import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Making() {
  const [activeMethod, setActiveMethod] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const theme = {
    primary: "#1fa951",
    secondary: "#729a78",
    light: "#edfeee",
    lightText: "#eaeeff",
    darkText: "#1d1f10",
    fontDisplay: "'Roboto Slab', sans-serif",
  };

  // Custom SVG icons
  const SettingsIcon = ({ color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );

  const HandsIcon = ({ color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 11.5V14c0 .8.7 1.5 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5v-2.5a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 7 11.5z"></path>
      <path d="M7 13h9m-9-1.5h9m-3-3V5.5a1.5 1.5 0 0 0-1.5-1.5h-3A1.5 1.5 0 0 0 7 5.5V10"></path>
      <path d="M16 13v2.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 18.5 6h-3a1.38 1.38 0 0 0-1 .41"></path>
      <path d="M9 17v1a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1v-1"></path>
      <path d="M13 17v1a1 1 0 0 0 1 1h0a1 1 0 0 0 1-1v-1"></path>
    </svg>
  );

  const ChevronRightIcon = ({ color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );

  const yarnMethods = [
    {
      id: 1,
      title: "Machine Spun",
      description:
        "Machine spinning uses advanced technology to transform raw fibers into yarn with perfect consistency. Industrial equipment processes large volumes efficiently, creating uniform yarns ideal for commercial textiles and everyday garments. This method ensures precise tension control and identical thickness throughout, making it perfect for projects requiring consistency.",
      icon: <SettingsIcon color={theme.primary} />,
      color: theme.light,
      accent: theme.primary,
      features: [
        "High production volume",
        "Consistent yarn thickness",
        "Precise tension control",
        "Uniform texture and appearance",
        "Cost-effective for commercial use",
      ],
    },
    {
      id: 2,
      title: "Hand Spun",
      description:
        "Hand spinning is an ancient craft where artisans manually transform fibers into yarn using simple tools like drop spindles or spinning wheels. This traditional method allows for creative control over thickness, texture, and twist, resulting in unique, characterful yarns. Hand-spun yarns have natural variations that add charm and personality to finished projects.",
      icon: <HandsIcon color={theme.secondary} />,
      color: theme.light,
      accent: theme.secondary,
      features: [
        "Unique character and texture",
        "Artisanal quality",
        "Creative control over thickness",
        "Natural variations in twist and density",
        "Connection to traditional craft practices",
      ],
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
        setActiveMethod((prev) => (prev + 1) % yarnMethods.length);
      }, 8000);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      clearInterval(interval);
    };
  }, [isVisible, yarnMethods.length]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen py-16 px-4 md:px-8 bg-gradient-to-br from-white to-green-50"
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
          Explore the two primary methods of transforming natural fibers into
          beautiful yarn: traditional hand spinning and modern machine
          production.
        </p>

        {/* Method Selection */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          {yarnMethods.map((method, index) => (
            <motion.div
              key={method.id}
              className="w-full md:w-1/2 max-w-md"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className={`p-6 rounded-xl cursor-pointer h-full transition-all duration-300 ${
                  activeMethod === index
                    ? "border-4 shadow-lg"
                    : "border-2 opacity-80"
                }`}
                style={{
                  borderColor: method.accent,
                  backgroundColor: method.color,
                  boxShadow:
                    activeMethod === index
                      ? `0 10px 15px -3px ${method.accent}30`
                      : "none",
                }}
                onClick={() => setActiveMethod(index)}
              >
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
                      backgroundColor: "white",
                      borderWidth: "2px",
                      borderColor: method.accent,
                    }}
                  >
                    {method.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{
                      color:
                        activeMethod === index
                          ? theme.primary
                          : theme.secondary,
                    }}
                  >
                    {method.title}
                  </h3>
                </div>
                <p className="mb-2 text-sm" style={{ color: theme.darkText }}>
                  {activeMethod === index
                    ? method.description.substring(0, 70) + "..."
                    : ""}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Method Detail */}
        <motion.div
          key={activeMethod}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          style={{
            borderRadius: "1rem",
            overflow: "hidden",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            backgroundColor: yarnMethods[activeMethod].color,
            borderWidth: "2px",
            borderColor: yarnMethods[activeMethod].accent,
          }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-6 md:p-8">
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
                    backgroundColor: "white",
                    borderWidth: "2px",
                    borderColor: yarnMethods[activeMethod].accent,
                  }}
                >
                  {yarnMethods[activeMethod].icon}
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: theme.primary }}
                >
                  {yarnMethods[activeMethod].title}
                </h3>
              </div>
              <p className="mb-6" style={{ color: theme.darkText }}>
                {yarnMethods[activeMethod].description}
              </p>
              <div>
                <h4
                  className="font-semibold mb-3"
                  style={{ color: theme.primary }}
                >
                  Key Features:
                </h4>
                <ul className="space-y-2">
                  {yarnMethods[activeMethod].features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mt-1 mr-2 flex-shrink-0">
                        <ChevronRightIcon
                          color={yarnMethods[activeMethod].accent}
                        />
                      </span>
                      <span style={{ color: theme.darkText }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
              <div className="text-center p-8 rounded-lg bg-white bg-opacity-80 shadow-md">
                <div
                  className="w-24 h-24 mx-auto mb-4 flex items-center justify-center"
                  style={{
                    backgroundColor: yarnMethods[activeMethod].color,
                    borderRadius: "50%",
                    borderWidth: "3px",
                    borderColor: yarnMethods[activeMethod].accent,
                  }}
                >
                  {yarnMethods[activeMethod].icon}
                </div>
                <h4
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.primary }}
                >
                  {yarnMethods[activeMethod].title}
                </h4>
                <p className="text-sm" style={{ color: theme.darkText }}>
                  {activeMethod === 0
                    ? "Industrial efficiency meets consistent quality"
                    : "Traditional craftsmanship with unique character"}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mt-8 mb-8">
          {yarnMethods.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveMethod(index)}
              className="mx-2 px-4 py-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  index === activeMethod ? theme.primary : "transparent",
                color: index === activeMethod ? "white" : theme.secondary,
                borderWidth: "2px",
                borderColor:
                  index === activeMethod ? theme.primary : theme.secondary,
                fontWeight: index === activeMethod ? "bold" : "normal",
              }}
            >
              {yarnMethods[index].title}
            </button>
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
      </motion.div>
    </div>
  );
}
