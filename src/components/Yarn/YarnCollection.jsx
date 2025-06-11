import React, { useState, useRef, useEffect } from 'react';
import { yarnTypes } from '../data/yarnTypes';

const YarnCollection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = cardRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, index]));
            }, index * 100);
          }
        }
      });
    }, observerOptions);

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToCardRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--color-highlight)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <style jsx>{`
        :root {
          --color-primary: #1fa951;
          --color-secondary: #729a78;
          --color-light: #edfeee;
          --color-highlight: #F0F7F4;
          --color-lightText: #eaeeff;
          --color-darkText: #1d1f10;
        }
      `}</style>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            ref={headingRef}
            className="text-4xl md:text-6xl font-normal mb-6 tracking-tight"
            style={{ 
              color: 'var(--color-primary)',
              lineHeight: '1.1'
            }}
          >
            Premium Yarn Collection
          </h1>
          <div 
            className="w-16 h-px mx-auto mb-8"
            style={{ backgroundColor: 'var(--color-secondary)' }}
          ></div>
          <p
            ref={subheadingRef}
            className="text-lg md:text-xl font-normal leading-relaxed"
            style={{ 
              color: 'var(--color-darkText)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Handcrafted, sustainable yarns sourced directly from the magnificent Himalayan region
          </p>
        </div>
      </div>

      {/* Yarn Cards Section */}
      <div ref={cardsContainerRef} className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {yarnTypes.map((yarn, index) => (
            <div
              key={yarn.id}
              ref={addToCardRefs}
              className="group cursor-pointer transition-all duration-500 ease-out h-full"
              style={{
                transform: visibleCards.has(index) ? 'translateY(0)' : 'translateY(30px)',
                opacity: visibleCards.has(index) ? 1 : 0,
              }}
            >
              <div 
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                style={{ border: '1px solid rgba(31, 169, 81, 0.1)' }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-56 flex-shrink-0">
                  <img
                    src={yarn.image}
                    alt={yarn.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: 'rgba(31, 169, 81, 0.85)' }}
                  >
                    <span className="text-white text-lg font-normal tracking-wide">
                      Explore {yarn.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3
                    className="text-2xl font-normal mb-4 tracking-wide"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {yarn.name}
                  </h3>
                  <p 
                    className="mb-6 leading-relaxed font-normal flex-grow"
                    style={{ color: 'var(--color-darkText)' }}
                  >
                    {yarn.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-3 mt-auto">
                    <h4
                      className="text-sm uppercase tracking-wider font-medium"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      Key Features
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {yarn.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs uppercase tracking-wide font-medium rounded-full"
                          style={{
                            backgroundColor: 'var(--color-light)',
                            color: 'var(--color-primary)',
                            border: '1px solid rgba(31, 169, 81, 0.2)'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div 
        className="h-1"
        style={{ 
          background: 'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
        }}
      ></div>
    </div>
  );
};

export default YarnCollection;