import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section 1: Brand Logo and Intro Text
      gsap.from('.footer-brand', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer-brand',
          start: 'top bottom',
        },
      });

      // Section 2: Navigation Columns
      gsap.from('.footer-column', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.footer-columns',
          start: 'top 80%',
        },
      });

      // Section 3: Footer Badge
      gsap.from('.footer-badge', {
        y: 50,
        opacity: 0,
        delay: 0.3,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.footer-badge',
          start: 'top 85%',
        },
      });

      // Optional: floating animation for bg visuals
      gsap.to('.floating-shape', {
        y: 20,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'sine.inOut',
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white w-full mt-auto overflow-hidden"
    >
      {/* Optional Floating Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="floating-shape w-32 h-32 bg-white/5 rounded-full blur-2xl absolute top-10 left-10"></div>
        <div className="floating-shape w-24 h-24 bg-white/10 rounded-full blur-2xl absolute bottom-10 right-10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 space-y-20">
        {/* Section 1: Brand Intro */}
        <div className="footer-brand text-center space-y-4">
          <img
            src="/assets/img/logo/logo1.png"
            alt="logo"
            className="mx-auto w-48"
          />
          <p className="text-lg max-w-xl mx-auto text-gray-300">
            Crafting threads of culture, sustainability, and craftsmanship since
            the Himalayas met the loom.
          </p>
        </div>

        {/* Section 2: Navigation Columns */}
        <div className="footer-columns grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            {
              title: 'Products',
              links: ['Fibre', 'Yarn', 'Fabric', 'Cotton', 'Wool'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Team', 'Careers', 'Vision'],
            },
            {
              title: 'Explore',
              links: ['Blog', 'Gallery', 'Testimonials'],
            },
            {
              title: 'Support',
              links: ['Contact', 'FAQs', 'Privacy Policy'],
            },
          ].map((section, idx) => (
            <div key={idx} className="footer-column space-y-4">
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-white transition duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Section 3: Footer Badge */}
        <div className="footer-badge border-t border-gray-800 pt-10 text-center text-gray-500 text-sm">
          &copy; 2025 Himalayan Textiles. All rights reserved. | Sustainable
          Threads for a Better World.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
