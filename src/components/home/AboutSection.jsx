/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  Leaf,
  Recycle,
  Heart,
  Globe,
  Droplet,
  Wind,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      sectionRef.current.addEventListener("mousemove", handleMouseMove);
    }

    // Auto-rotate core values
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 3);
    }, 4000);

    return () => {
      clearInterval(interval);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        sectionRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const sustainabilityStats = [
    {
      icon: Leaf,
      value: "100%",
      label: "Organic Materials",
      color: "from-green-500 to-green-500",
    },
    {
      icon: Droplet,
      value: "85%",
      label: "Water Saved",
      color: "from-emerald-500 to-emerald-500",
    },
    {
      icon: Recycle,
      value: "90%",
      label: "Waste Recycled",
      color: "from-emerald-500 to-emerald-500",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Global Markets",
      color: "from-green-500 to-green-500",
    },
  ];

  const coreValues = [
    {
      icon: Leaf,
      title: "Eco Innovation",
      description:
        "Pioneering sustainable textile technologies that reduce environmental impact while maintaining premium quality.",
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: Heart,
      title: "Ethical Practice",
      description:
        "Building fair partnerships with communities and ensuring responsible sourcing throughout our supply chain.",
      color: "from-emerald-400 to-green-600",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description:
        "Spreading sustainable textile solutions across 15+ countries, creating positive change worldwide.",
      color: "from-emerald-400 to-cyan-600",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-50 overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0">
        {/* Dynamic gradient blob that follows mouse */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${mousePosition.x - 10}%`,
            top: `${mousePosition.y - 10}%`,
            transform: `translate(-50%, -50%) scale(${isVisible ? 1 : 0.5})`,
          }}
        />

        {/* Animated mesh background */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-emerald-400 rounded-full transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
              style={{
                left: `${10 + (i % 4) * 25}%`,
                top: `${15 + Math.floor(i / 4) * 30}%`,
                animation: isVisible
                  ? `float ${3 + (i % 3)}s ease-in-out infinite`
                  : "none",
                animationDelay: `${i * 0.2}s`,
                transitionDelay: `${i * 100}ms`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Staggered Animation */}
          <div className="text-center mb-20">
            <div
              className={`inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-emerald-200 mb-8 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-8 opacity-0 scale-90"
              }`}
            >
              <Leaf className="w-5 h-5 mr-2 text-emerald-600" />
              <span className="text-emerald-700 font-semibold">
                About Himalayan Textile Industries
              </span>
            </div>

            <h1
              className={`text-4xl lg:text-6xl font-bold mb-6 transition-all duration-1200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <span className="text-gray-900">Weaving </span>
              <span
                className="text-emerald-800"
                style={{
                  backgroundSize: "200% 200%",
                  animation: isVisible
                    ? "gradientShift 3s ease-in-out infinite"
                    : "none",
                }}
              >
                Tomorrow's
              </span>
              <br />
              <span className="text-gray-900">Sustainability</span>
            </h1>

            <p
              className={`text-xl lg:text-1xl text-gray-600 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              Since 1995,
              <span className="font-bold text-emerald-700">
                
                Himalayan Textile Industries
              </span>
              has been a leader in Nepal’s textile industry, specializing in
              manufacturing natural fibers, yarns, fabrics, and eco-friendly
              fashion products. By combining traditional handmade craftsmanship
              with modern technology, we create <span className="font-bold text-emerald-600">sustainable products</span> that
              preserve artisan heritage while protecting our planet.
            </p>

            {/* Animated scroll indicator */}
            <div
              className={`mt-12 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-emerald-600 animate-bounce" />
            </div>
          </div>

          {/* Interactive Stats Section */}
          <div className="mb-32 pb-12">
            <div
              className={`text-center mb-16 transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Measurable Impact
              </h2>
              <p className="text-lg text-gray-600">
                Numbers that reflect our commitment to sustainability
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 ">
              {sustainabilityStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden transition-all duration-800 mb-4 ${
                      isVisible
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-12 opacity-0 scale-75"
                    }`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="relative bg-white rounded-2xl p-8  border  hover:shadow-md hover:shadow-emerald-50 hover:-translate-y-2 transition-all duration-500 group">
                      {/* Animated background on hover */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                      />

                      <div className="relative z-10 text-center">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-300">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>

                      {/* Ripple effect on hover */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ animation: "ripple 1s ease-out infinite" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="relative bg-emerald-700  rounded-3xl p-16 text-center overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-32 h-32 bg-white/10 rounded-full blur-xl"
                    style={{
                      left: `${10 + i * 12}%`,
                      top: `${20 + (i % 2) * 60}%`,
                      animation: `float ${4 + (i % 3)}s ease-in-out infinite`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Ready to Weave the Future?
                </h3>
                <p className="text-xl text-emerald-100 mb-10 max-w-3xl mx-auto">
                  Join us in creating textiles that make a positive impact on
                  both your business and our planet.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="/our-story"
                    className="group inline-flex items-center px-10 py-4 bg-white text-emerald-600 font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    Discover Our Story
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(-25px) rotate(0deg);
          }
          75% {
            transform: translateY(-10px) rotate(-1deg);
          }
        }

        @keyframes gradientShift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
