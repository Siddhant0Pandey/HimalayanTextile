import React, { useState, useEffect, useRef } from 'react';

function YarnProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      title: "Raw Material Sourcing",
      description: "Premium natural fibers from certified organic farms, ensuring sustainability and quality.",
      details: [
        "Organic cotton from certified farms",
        "Sustainable wool from ethical suppliers", 
        "Bamboo fibers for eco-friendly options",
        "Quality testing at source"
      ],
      duration: "2-3 weeks"
    },
    {
      id: 2,
      title: "Fiber Processing", 
      description: "Advanced cleaning and preparation techniques that preserve natural fiber properties.",
      details: [
        "Gentle washing and scouring",
        "Natural drying processes",
        "Fiber grading and sorting", 
        "Quality control checks"
      ],
      duration: "1-2 weeks"
    },
    {
      id: 3,
      title: "Carding & Alignment",
      description: "Specialized machinery aligns fibers in parallel formation for consistent yarn.",
      details: [
        "Automated carding systems",
        "Fiber alignment verification",
        "Blend consistency monitoring",
        "Pre-spinning preparation"
      ],
      duration: "3-5 days"
    },
    {
      id: 4,
      title: "Spinning Excellence",
      description: "State-of-the-art spinning technology transforms fibers into premium yarn.",
      details: [
        "High-speed spinning frames",
        "Tension control systems", 
        "Twist optimization",
        "Continuous quality monitoring"
      ],
      duration: "1-2 weeks"
    },
    {
      id: 5,
      title: "Quality Assurance",
      description: "Rigorous testing ensures every batch meets strict standards for performance.",
      details: [
        "Tensile strength testing",
        "Color fastness verification",
        "Thickness consistency check", 
        "Final quality certification"
      ],
      duration: "2-3 days"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
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
  }, [isVisible]);

  return (
    <div ref={containerRef} className="min-h-screen py-24" style={{ backgroundColor: '#F0F7F4' }}>
      <div className="max-w-6xl mx-auto px-8">
        
        {/* Minimal Header */}
        <div className="text-center mb-24">
          <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: '#1fa951' }}></div>
          <h1 className="text-5xl font-normal mb-6 tracking-tight" style={{ color: '#1d1f10' }}>
            From Fiber to Yarn
          </h1>
          <p className="text-lg max-w-2xl mx-auto font-normal leading-relaxed" style={{ color: '#729a78' }}>
            A refined 5-step process transforming natural fibers into premium yarn through precision and care.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-5 gap-8 mb-24">
          {processSteps.map((step, index) => (
            <div key={step.id} className="text-center">
              {/* Step Number */}
              <button
                onClick={() => setActiveStep(index)}
                className={`w-12 h-12 mx-auto mb-6 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                  activeStep === index 
                    ? 'text-white border-opacity-0' 
                    : 'border-opacity-30 hover:border-opacity-50'
                }`}
                style={{
                  backgroundColor: activeStep === index ? '#1fa951' : 'transparent',
                  borderColor: '#1fa951',
                  color: activeStep === index ? '#eaeeff' : '#729a78'
                }}
              >
                {index + 1}
              </button>
              
              {/* Step Title */}
              <h3 className={`text-sm font-medium mb-2 transition-colors duration-300`}
                  style={{ color: activeStep === index ? '#1d1f10' : '#729a78' }}>
                {step.title}
              </h3>
              
              {/* Duration */}
              <p className="text-xs font-normal" style={{ color: '#729a78' }}>
                {step.duration}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Line */}
        <div className="relative mb-16">
          <div className="h-px w-full" style={{ backgroundColor: '#729a78', opacity: 0.2 }}></div>
          <div 
            className="absolute top-0 left-0 h-px transition-all duration-1000 ease-out"
            style={{ 
              width: `${((activeStep + 1) / processSteps.length) * 100}%`,
              backgroundColor: '#1fa951'
            }}
          ></div>
        </div>

        {/* Active Step Details */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-normal mb-4" style={{ color: '#1d1f10' }}>
              {processSteps[activeStep].title}
            </h2>
            <p className="text-lg font-normal leading-relaxed" style={{ color: '#729a78' }}>
              {processSteps[activeStep].description}
            </p>
          </div>

          {/* Process Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {processSteps[activeStep].details.map((detail, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: '#edfeee' }}
              >
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#1fa951' }}></div>
                <span className="font-normal" style={{ color: '#1d1f10' }}>{detail}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default YarnProcess;