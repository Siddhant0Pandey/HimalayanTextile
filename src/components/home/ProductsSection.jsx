/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    category: 'Fibre',
    description:
      'Explore various textile fibres including natural and synthetic options such as cotton, jute, wool, and more.',
    items: [
      { name: 'Cotton', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Jute', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Cotton', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Wool', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Jute', img: '/assets/img/extra/nettle-leaf.jpg' },
    ],
  },
  {
    category: 'Fabric',
    description:
      'Discover our range of fabrics from pure materials to blends, including woven, knitted, and non-woven fabrics.',
    items: [
      { name: 'Woven', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Woven', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Knitted', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Knitted', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Non Woven', img: '/assets/img/extra/nettle-leaf.jpg' },
    ],
  },
  {
    category: 'Yarn',
    description:
      'A wide selection of yarns used in textile manufacturing including cotton, polyester, and blended yarns.',
    items: [
      { name: 'Cotton Yarn', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Cotton Yarn', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Polyester Yarn', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Blended Yarn', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Blended Yarn', img: '/assets/img/extra/nettle-leaf.jpg' },   
    ],
  },
];


function SimpleCarousel({ items, isFromLeft }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [items.length]);

  const visibleItems = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % items.length;
    visibleItems.push({ ...items[index], originalIndex: index });
  }

  return (
    <div className="w-full max-w-md flex justify-center gap-4">
      {visibleItems.map((item, index) => (
        <motion.div
          key={`${item.originalIndex}-${currentIndex}`}
          className="flex flex-col items-center group cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
        >
          <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
            <img
              src={item.img}
              alt={item.name}
              className="w-32 h-32 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <motion.p
            className="mt-3 font-semibold text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            {item.name}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}

function ProductSection({ product, isFromLeft }) {
  return (
    <div className="w-full py-16 px-4 relative">
   
      <motion.div
        className={`absolute top-8 ${isFromLeft ? 'right-8' : 'left-8'} z-10`}
        initial={{ 
          opacity: 0, 
          x: isFromLeft ? 100 : -100 
        }}
        whileInView={{ 
          opacity: 1, 
          x: 0 
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ 
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <h1 className="text-6xl lg:text-8xl font-bold text-gray-200 opacity-50 pointer-events-none">
          {product.category}
        </h1>
      </motion.div>

      <div className={`max-w-7xl mx-auto ${isFromLeft ? 'flex justify-start' : 'flex justify-end'}`}>
        <motion.div
          className={`w-full ${isFromLeft ? 'max-w-4xl' : 'max-w-4xl'} bg-white shadow-lg rounded-2xl overflow-hidden`}
          initial={{ 
            opacity: 0, 
            x: isFromLeft ? -100 : 100 
          }}
          whileInView={{ 
            opacity: 1, 
            x: 0 
          }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <div className={`flex flex-col ${isFromLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} min-h-96`}>

            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <motion.h2 
                className="text-4xl font-bold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {product.category}
              </motion.h2>
              <motion.p 
                className="text-gray-600 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {product.description} 
              </motion.p>
            </div>

            <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
              <SimpleCarousel items={product.items} isFromLeft={isFromLeft} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function ProductSliderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100">
      {products.map((product, idx) => (
        <ProductSection
          key={product.category}
          product={product}
          isFromLeft={idx % 2 === 0}
        />
      ))}
    </div>
  );
}