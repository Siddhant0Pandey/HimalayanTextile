import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Animation() {
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

  const SettingsIcon = ({ color }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.4 15C19.1667 15.5 19.2667 16.1 19.7 16.5L19.7667 16.5667C20.1333 16.9333 20.3333 17.4333 20.3333 17.9667C20.3333 18.5 20.1333 19.0333 19.7667 19.3667C19.4 19.7333 18.9 19.9333 18.3667 19.9333C17.8333 19.9333 17.3333 19.7333 16.9667 19.3667L16.9 19.3C16.5 18.8667 15.9 18.7667 15.4 19C14.9 19.2333 14.6 19.7333 14.6 20.2667V20.4C14.6 21.5 13.7 22.4 12.6 22.4H11.4C10.3 22.4 9.4 21.5 9.4 20.4V20.3C9.4 19.7333 9.06667 19.2333 8.53333 19.0333C8.03333 18.8 7.46667 18.9 7.06667 19.3L7 19.3667C6.63333 19.7333 6.13333 19.9333 5.6 19.9333C5.06667 19.9333 4.56667 19.7333 4.2 19.3667C3.83333 19 3.63333 18.5 3.63333 17.9667C3.63333 17.4333 3.83333 16.9333 4.2 16.5667L4.26667 16.5C4.7 16.1 4.8 15.5 4.56667 15C4.33333 14.5 3.83333 14.2 3.3 14.2H3.13333C2.03333 14.2 1.13333 13.3 1.13333 12.2V11C1.13333 9.9 2.03333 9 3.13333 9H3.23333C3.8 9 4.3 8.66667 4.5 8.13333C4.73333 7.63333 4.63333 7.06667 4.23333 6.66667L4.16667 6.6C3.8 6.23333 3.6 5.73333 3.6 5.2C3.6 4.66667 3.8 4.16667 4.16667 3.8C4.53333 3.43333 5.03333 3.23333 5.56667 3.23333C6.1 3.23333 6.6 3.43333 6.96667 3.8L7.03333 3.86667C7.43333 4.26667 8 4.36667 8.5 4.13333H8.56667C9.06667 3.9 9.36667 3.4 9.36667 2.86667V2.8C9.36667 1.7 10.2667 0.8 11.3667 0.8H12.5667C13.6667 0.8 14.5667 1.7 14.5667 2.8V2.9C14.5667 3.46667 14.9 3.96667 15.4333 4.16667C15.9333 4.4 16.5 4.3 16.9 3.9L16.9667 3.83333C17.3333 3.46667 17.8333 3.26667 18.3667 3.26667C18.9 3.26667 19.4 3.46667 19.7667 3.83333C20.1333 4.2 20.3333 4.7 20.3333 5.23333C20.3333 5.76667 20.1333 6.26667 19.7667 6.63333L19.7 6.7C19.3 7.1 19.2 7.66667 19.4333 8.16667V8.23333C19.6667 8.73333 20.1667 9.03333 20.7 9.03333H20.7667C21.8667 9.03333 22.7667 9.93333 22.7667 11.0333V12.2333C22.7667 13.3333 21.8667 14.2333 20.7667 14.2333H20.6667C20.1 14.2333 19.6 14.5667 19.4 15.0667V15Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const HandsIcon = ({ color }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 6.5C13.5 6.5 17.5 7.5 17.5 10C17.5 12.5 14.5 12.5 14.5 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 6.5C10 6.5 6 7.5 6 10C6 12.5 9 12.5 9 12.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 17.5C16.5 17.5 12.5 16.5 12.5 14C12.5 11.5 15.5 11.5 15.5 11.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 17.5C7.5 17.5 11.5 16.5 11.5 14C11.5 11.5 8.5 11.5 8.5 11.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const ChevronRightIcon = ({ color }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const yarnMethods = [
    {
      id: 1,
      title: "Machine Spun",
      description:
        "Machine spinning uses advanced technology to transform raw fibers into yarn with perfect consistency...",
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
        "Hand spinning is an ancient craft where artisans manually transform fibers into yarn using simple tools...",
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
      {/* Header */}
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
          beautiful yarn...
        </p>

        {/* Method selection cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {yarnMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
              onClick={() => setActiveMethod(index)}
              className="cursor-pointer flex-1 max-w-md"
            >
              <div
                className={`rounded-xl p-6 transition-all duration-300 transform ${
                  activeMethod === index
                    ? "scale-105 shadow-lg"
                    : "scale-100 shadow"
                }`}
                style={{
                  backgroundColor: method.color,
                  borderLeft: `4px solid ${method.accent}`,
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="mr-3">{method.icon}</div>
                  <h3
                    className="text-xl font-semibold"
                    style={{ color: method.accent }}
                  >
                    {method.title}
                  </h3>
                </div>
                <p className="mb-4 text-sm" style={{ color: theme.darkText }}>
                  {method.description}
                </p>
                <div
                  className="flex items-center text-sm font-medium"
                  style={{ color: method.accent }}
                >
                  <span>Learn more</span>
                  <ChevronRightIcon color={method.accent} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Method details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 mb-16"
        >
          {yarnMethods.map((method, index) => (
            <div
              key={method.id}
              className={`transition-all duration-500 ${
                activeMethod === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ color: method.accent }}
                >
                  {method.title} Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {method.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        activeMethod === index
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -10 }
                      }
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                      className="flex items-start"
                    >
                      <div
                        className="h-6 w-6 rounded-full flex items-center justify-center mr-3 mt-1"
                        style={{ backgroundColor: method.accent }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p style={{ color: theme.darkText }}>{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Final decorative yarn line */}
        <div className="relative mt-16 py-8">
          <div
            className="absolute left-0 right-0 h-1 top-1/2 transform -translate-y-1/2"
            style={{
              background: `linear-gradient(to right, transparent, ${theme.primary}, transparent)`,
            }}
          ></div>
          <div className="relative z-10 text-center">
            <span
              className="text-sm font-medium"
              style={{ color: theme.secondary }}
            >
              Spinning innovation and tradition together
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
