/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Making() {
  const [activeMethod, setActiveMethod] = useState(0);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const theme = {
    bg: "#0A0B0D",
    surface: "#111215",
    accent: "#1fa951",
    secondary: "#729a78",
    text: {
      primary: "#eaeeff",
      secondary: "#edfeee",
      muted: "#729a78"
    }
  };

  // Minimalist SVG icons
  const SettingsIcon = ({ color, size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="2"></circle>
      <path d="M12 8v8M8 12h8"></path>
    </svg>
  );

  const HandsIcon = ({ color, size = 20 }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"></path>
      <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v6"></path>
      <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8V6a2 2 0 1 1 4 0"></path>
    </svg>
  );

  const ArrowIcon = ({ color }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12l7-7-7-7"></path>
    </svg>
  );

  const yarnMethods = [
    {
      id: 1,
      title: "Machine Spun",
      description:
        "Machine spinning uses advanced technology to transform raw fibers into yarn with perfect consistency. Industrial equipment processes large volumes efficiently, creating uniform yarns ideal for commercial textiles and everyday garments. This method ensures precise tension control and identical thickness throughout, making it perfect for projects requiring consistency.",
      icon: <SettingsIcon color={theme.accent} size={24} />,
      accent: theme.accent,
      number: "01",
      videoSrc: "/assets/img/yarn/vido2.mp4",
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
      icon: <HandsIcon color={theme.secondary} size={24} />,
      accent: theme.secondary,
      number: "02",
      videoSrc: "/assets/img/yarn/vide.mp4",
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
      className="min-h-screen"
      style={{ backgroundColor: theme.bg }}
    >

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent" style={{ backgroundColor: theme.accent }}></div>
            <span 
              className="text-xs uppercase tracking-[0.2em] font-medium"
              style={{ color: theme.text.muted }}
            >
              Yarn Production Methods
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent" style={{ backgroundColor: theme.accent }}></div>
          </div>
          
          <h1 
            className="text-5xl md:text-7xl font-light mb-6 tracking-tight"
            style={{ color: theme.text.primary }}
          >
            The Art of
            <br />
            <span className="text-[#1fa951] font-normal" style={{
              // backgroundImage: `linear-gradient(to right, ${theme.accent}, ${theme.secondary})`
            }}>
              Yarn Making
            </span>
          </h1>
          
          <p 
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: theme.text.secondary }}
          >
            Explore the two primary methods of transforming natural fibers into
            beautiful yarn: traditional hand spinning and modern machine production.
          </p>
        </motion.div>

        {/* Method Selector */}
        <div className="flex justify-center mb-16">
          <div className="flex border rounded-full p-1 bg-gray-900/50 backdrop-blur-sm" style={{ borderColor: '#374151' }}>
            {yarnMethods.map((method, index) => (
              <button
                key={index}
                onClick={() => setActiveMethod(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeMethod === index 
                    ? 'shadow-lg' 
                    : 'hover:text-white'
                }`}
                style={{
                  backgroundColor: activeMethod === index ? method.accent : 'transparent',
                  color: activeMethod === index ? '#1d1f10' : '#9CA3AF'
                }}
              >
                {method.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <motion.div
          key={activeMethod}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center border"
                style={{ 
                  borderColor: yarnMethods[activeMethod].accent + '40',
                  backgroundColor: yarnMethods[activeMethod].accent + '10'
                }}
              >
                {yarnMethods[activeMethod].icon}
              </div>
              <div>
                <div 
                  className="text-6xl font-light opacity-30 leading-none"
                  style={{ color: yarnMethods[activeMethod].accent }}
                >
                  {yarnMethods[activeMethod].number}
                </div>
                <h2 
                  className="text-3xl font-light -mt-2"
                  style={{ color: theme.text.primary }}
                >
                  {yarnMethods[activeMethod].title}
                </h2>
              </div>
            </div>

            <p 
              className="text-lg leading-relaxed"
              style={{ color: theme.text.secondary }}
            >
              {yarnMethods[activeMethod].description}
            </p>

            <div className="space-y-4">
              <h3 
                className="text-lg font-medium"
                style={{ color: theme.text.primary }}
              >
                Key Features
              </h3>
              <div className="space-y-3">
                {yarnMethods[activeMethod].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div 
                      className="w-1 h-1 rounded-full transition-all duration-200 group-hover:w-2"
                      style={{ backgroundColor: yarnMethods[activeMethod].accent }}
                    />
                    <span 
                      className="text-sm group-hover:translate-x-1 transition-transform duration-200"
                      style={{ color: theme.text.secondary }}
                    >
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-2xl blur-2xl opacity-20"
              style={{ backgroundColor: yarnMethods[activeMethod].accent }}
            />
            <div 
              className="relative rounded-2xl overflow-hidden border backdrop-blur-sm"
              style={{ 
                borderColor: yarnMethods[activeMethod].accent + '30',
                backgroundColor: theme.surface + '80'
              }}
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src={yarnMethods[activeMethod].videoSrc}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Video Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 
                        className="font-medium"
                        style={{ color: theme.text.primary }}
                      >
                        {yarnMethods[activeMethod].title}
                      </h4>
                      <p 
                        className="text-xs mt-1"
                        style={{ color: theme.text.muted }}
                      >
                        {activeMethod === 0
                          ? "Industrial efficiency meets consistent quality"
                          : "Traditional craftsmanship with unique character"}
                      </p>
                    </div>
                    <div 
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: yarnMethods[activeMethod].accent }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-20">
          <div className="flex gap-3">
            {yarnMethods.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveMethod(index)}
                className="relative"
              >
                <div 
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    activeMethod === index ? 'opacity-100' : 'opacity-30'
                  }`}
                  style={{ backgroundColor: yarnMethods[index].accent }}
                />
                {activeMethod === index && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: yarnMethods[index].accent }}
                    layoutId="activeIndicator"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}