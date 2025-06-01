/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Recycle, Heart, Globe, Droplet, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const sustainabilityStats = [
    { icon: Leaf, value: "100%", label: "Organic Materials", delay: 0 },
    { icon: Droplet, value: "75%", label: "Water Saved", delay: 0.1 },
    { icon: Recycle, value: "90%", label: "Waste Recycled", delay: 0.2 },
    { icon: Globe, value: "15+", label: "Global Markets", delay: 0.3 }
  ];

  const floatingElements = [
    { icon: Leaf, top: '20%', left: '10%', size: 'w-8 h-8', delay: 0 },
    { icon: Wind, top: '30%', right: '15%', size: 'w-6 h-6', delay: 0.5 },
    { icon: Droplet, bottom: '25%', left: '8%', size: 'w-5 h-5', delay: 1 },
    { icon: Heart, top: '60%', right: '20%', size: 'w-7 h-7', delay: 1.5 },
    { icon: Recycle, top: '15%', right: '30%', size: 'w-6 h-6', delay: 0.8 },
  ];

  const coreValues = [
    { 
      icon: Leaf, 
      title: "Eco Innovation", 
      description: "Pioneering sustainable textile technologies that reduce environmental impact while maintaining premium quality." 
    },
    { 
      icon: Heart, 
      title: "Ethical Practice", 
      description: "Building fair partnerships with communities and ensuring responsible sourcing throughout our supply chain." 
    },
    { 
      icon: Globe, 
      title: "Global Impact", 
      description: "Spreading sustainable textile solutions across 15+ countries, creating positive change worldwide." 
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-green-100 overflow-hidden min-h-screen"
      style={{ background: '#edfeee' }}
    >
      {/* Animated Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className={`absolute w-96 h-96 bg-gradient-to-r from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            top: '10%',
            left: '10%',
            animation: 'float 6s ease-in-out infinite',
            transitionDelay: '100ms'
          }}
        />
        <div 
          className={`absolute w-80 h-80 bg-gradient-to-r from-green-300/25 to-emerald-300/25 rounded-full blur-3xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            bottom: '20%',
            right: '15%',
            animation: 'float 8s ease-in-out infinite reverse',
            transitionDelay: '200ms'
          }}
        />
        <div 
          className={`absolute w-64 h-64 bg-gradient-to-r from-teal-300/20 to-green-300/20 rounded-full blur-2xl transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
          style={{
            top: '50%',
            right: '30%',
            animation: 'float 7s ease-in-out infinite',
            transitionDelay: '300ms'
          }}
        />
      </div>

      {/* Floating Sustainability Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <div
              key={index}
              className={`absolute ${element.size} text-emerald-400/40 z-10 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-4'
              }`}
              style={{
                top: element.top,
                left: element.left,
                right: element.right,
                bottom: element.bottom,
                animation: `float ${4 + index}s ease-in-out infinite`,
                animationDelay: `${element.delay}s`,
                transitionDelay: `${400 + index * 100}ms`
              }}
            >
              <Icon className="w-full h-full" />
            </div>
          );
        })}
      </div>

      <div className="relative z-20 container mx-auto px-6 py-20 flex items-center">
        <div className="w-full max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-12">
              <div className="space-y-2">
                {/* Badge */}
                <div 
                  className={`inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-medium mb-4 transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <Leaf className="w-4 h-4 mr-2" />
                  About Us
                </div>
                
                {/* Main Title */}
                <h1 
                  className={`text-4xl lg:text-5xl font-bold text-gray-900 leading-tight transition-all duration-900 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                  Weaving{' '}
                  <span className={`bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent transition-all duration-700 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: '500ms' }}>
                    Tomorrow's
                  </span>
                  <br />
                  <span className={`transition-all duration-800 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}>
                    Sustainability
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p 
                  className={`text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  Himalayan Textile Industries Ltd. transforms natural fibers into extraordinary textiles, 
                  pioneering sustainable practices that honor both tradition and innovation.
                </p>
              </div>

              <div className="space-y-6">
                {/* Description Paragraph */}
                <p 
                  className={`text-gray-700 leading-relaxed transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  Founded by visionary{' '}
                  <span className={`font-bold text-emerald-700 italic transition-all duration-600 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
                  }`}
                  style={{ transitionDelay: '700ms' }}>
                    Baburam Dangi
                  </span>
                  , we've evolved from a local textile maker into a 
                  global leader in sustainable fabric solutions. Our commitment to eco-friendly practices 
                  and premium quality serves marquee clients across Nepal and 15+ international markets.
                </p>

                {/* Buttons */}
                <div 
                  className={`flex flex-col sm:flex-row gap-4 transition-all duration-800 ease-out ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  <Link to='/our-story' className={`group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                    isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '700ms' }}>
                    <span className="relative z-10">Discover Our Story</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Link>
                  
                  {/* <button className={`px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-700 ${
                    isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-90'
                  }`}
                  style={{ transitionDelay: '800ms' }}>
                    View Products
                  </button> */}
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Stats */}
            <div 
              className={`transform transition-all duration-1000 ease-out ${
                isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-16 opacity-0 scale-90'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative">
                {/* Central Hub */}
                <div className={`relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-emerald-100 transition-all duration-1000 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '500ms' }}>
                  {/* Stats Header */}
                  <div 
                    className={`text-center mb-8 transition-all duration-800 ease-out ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                    }`}
                    style={{ transitionDelay: '600ms' }}
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Impact</h3>
                    <p className="text-gray-600">Measuring success through sustainability</p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {sustainabilityStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={index}
                          className={`text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 transform transition-all duration-800 ease-out hover:scale-105 hover:shadow-lg ${
                            isVisible ? 'translate-y-0 opacity-100 scale-100 rotate-0' : 'translate-y-12 opacity-0 scale-75 rotate-3'
                          }`}
                          style={{ transitionDelay: `${700 + stat.delay * 200}ms` }}
                        >
                          <div 
                            className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl mb-3 transition-all duration-600 ease-out ${
                              isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}
                            style={{ transitionDelay: `${800 + stat.delay * 200}ms` }}
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div 
                            className={`text-2xl font-bold text-gray-900 mb-1 transition-all duration-700 ease-out ${
                              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${900 + stat.delay * 200}ms` }}
                          >
                            {stat.value}
                          </div>
                          <div 
                            className={`text-sm text-gray-600 transition-all duration-700 ease-out ${
                              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                            style={{ transitionDelay: `${1000 + stat.delay * 200}ms` }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Connecting Lines Animation */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  {[...Array(3)].map((_, i) => (
                    <circle
                      key={i}
                      cx={`${30 + i * 20}%`}
                      cy={`${40 + i * 15}%`}
                      r="2"
                      fill="url(#lineGradient)"
                      className={`transition-all duration-1000 ease-out ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                      style={{ 
                        animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
                        animationDelay: `${i * 0.5}s`,
                        transitionDelay: `${900 + i * 200}ms`
                      }}
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Section - Values */}
          <div 
            className={`mt-20 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            {/* Values Header */}
            <div 
              className={`text-center mb-12 transition-all duration-800 ease-out ${
                isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every thread we weave carries our commitment to environmental stewardship and social responsibility
              </p>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index} 
                    className={`group text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-emerald-100 hover:bg-white/80 transition-all duration-800 ease-out hover:shadow-xl hover:-translate-y-1 ${
                      isVisible ? 'translate-y-0 opacity-100 scale-100 rotate-0' : 'translate-y-12 opacity-0 scale-90 rotate-1'
                    }`}
                    style={{ transitionDelay: `${1000 + index * 200}ms` }}
                  >
                    <div 
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl mb-4 group-hover:scale-110 transition-all duration-700 ease-out ${
                        isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                      }`}
                      style={{ transitionDelay: `${1100 + index * 200}ms` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 
                      className={`text-xl font-semibold text-gray-900 mb-3 transition-all duration-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${1200 + index * 200}ms` }}
                    >
                      {value.title}
                    </h4>
                    <p 
                      className={`text-gray-600 leading-relaxed transition-all duration-700 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: `${1300 + index * 200}ms` }}
                    >
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;