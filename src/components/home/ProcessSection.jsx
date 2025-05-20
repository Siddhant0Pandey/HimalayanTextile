/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
gsap.registerPlugin(ScrollTrigger);

const products = [
  { name: "Fiber", image: "/assets/img/extra/nettle-leaf.jpg" },
  { name: "Yarn", image: "/assets/img/extra/nettle.jpg" },
  { name: "Fabric", image: "/assets/img/extra/nettle-leaf.jpg" },
  { name: "Fashion", image: "/assets/img/extra/nettle.jpg" },
];

export default function ProcessSection() {
  const leafRefs = useRef([]);
  const productRefs = useRef([]);

  useEffect(() => {
    leafRefs.current.forEach((leaf, index) => {
      gsap.fromTo(
        leaf,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: leaf,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.3,
        }
      );
    });

    productRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.4,
        }
      );
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-cover bg-center text-center text-white" style={{ backgroundImage: 'url(/assets/img/parallax/mountain.jpg)' }}>
    
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[
          { top: '0%', left: '0%' },
          { top: '0%', right: '0%' },
          { bottom: '0%', left: '0%' },
          { bottom: '0%', right: '0%' },
        ].map((style, i) => (
          <img
            key={i}
            ref={el => leafRefs.current[i] = el}
            src={`/images/leaf${i + 1}.png`}
            alt="leaf"
            className="absolute w-24 opacity-0"
            style={{ ...style, transform: 'translateX(-100px)' }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Weaving a Cleaner Future<br /> from the Roof of the World
        
        </h1>

       <div className="flex justify-center items-center gap-4 flex-wrap mb-8">
  {products.map((product, index) => (
    <div key={product.name} className="flex items-center gap-4">
      <motion.div
        ref={el => productRefs.current[index] = el}
        className="relative w-28 h-28 md:w-36 md:h-36 bg-center bg-cover rounded-full flex items-center justify-center text-center overflow-hidden"
        style={{ background: `url(${product.image})` }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: index * 0.3 }}
      >
        <span className="text-sm md:text-lg font-semibold text-white z-10">
          {product.name}
        </span>
      </motion.div>

      {index < products.length - 1 && (
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.3 + 0.2, type: "spring", stiffness: 100 }}
          className="text-white text-2xl md:text-3xl"
        >
          <ArrowRight size={32} />
        </motion.div>
      )}
    </div>
  ))}
</div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full bg-transparent hover:bg-white hover:text-green-900 transition-all group">
            <span>View Our Process</span>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
