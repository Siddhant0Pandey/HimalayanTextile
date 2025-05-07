import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-animate', {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top bottom',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-light text-darkText w-full mt-auto">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-darkText footer-animate">
            <img src='/assets/img/logo/logo1.png' alt='logo1' className='w-64' />
          </div>

          <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
            {['Facebook', 'Instagram', 'Twitter'].map((platform, i) => (
              <li key={i}>
                <a
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  
                    {platform === 'Facebook' && (
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    )}
                    {platform === 'Instagram' && (
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06..."
                        clipRule="evenodd"
                      />
                    )}
                    {platform === 'Twitter' && (
                      <path
                        d="M8.29 20.251c7.547 0 11.675-6.253..."
                      />
                    )}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 dark:border-gray-800">
          {[
            {
              title: 'Materials',
              links: ['Fibre', 'Yarn', 'Fabrics', 'Wool', 'Cotton'],
            },
            {
              title: 'Company',
              links: ['About', 'Meet the Team', 'Accounts Review'],
            },
            {
              title: 'Helpful Links',
              links: ['Contact', 'FAQs'],
            },
            {
              title: 'Legal',
              links: ['Accessibility', 'Returns Policy', 'Trademarks'],
            },
          ].map((section, idx) => (
            <div key={idx} className="footer-animate">
              <p className="font-medium">{section.title}</p>
              <ul className="mt-6 space-y-4 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="transition hover:opacity-75">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-400 footer-animate">
          &copy; 2025. Himalayan Textiles. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
