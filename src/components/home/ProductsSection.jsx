/* eslint-disable no-unused-vars */
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const products = [
  {
    category: 'Fibre',
    description:
      'Explore various textile fibres including natural and synthetic options such as cotton, jute, wool, and more.',
    items: [
      { name: 'Cotton', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Jute', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Wool', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Wool', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Wool', img: '/assets/img/extra/nettle-leaf.jpg' },
    ],
  },
  {
    category: 'Fabric',
    description:
      'Discover our range of fabrics from pure materials to blends, including woven, knitted, and non-woven fabrics.',
    items: [
      { name: 'Woven', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Knitted', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Non Woven', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Non Woven', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Non Woven', img: '/assets/img/extra/nettle-leaf.jpg' },
    ],
  },
  {
    category: 'Yarn',
    description:
      'A wide selection of yarns used in textile manufacturing including cotton, polyester, and blended yarns.',
    items: [
      { name: 'Cotton Yarn', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Polyester Yarn', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Blended Yarn', img: '/assets/img/extra/nettle-leaf.jpg' },
      { name: 'Blended Yarn', img: '/assets/img/extra/skillartisan.jpg' },
      { name: 'Blended Yarn', img: '/assets/img/extra/nettle-leaf.jpg' },
    ],
  },
];

function ProductSection({ product, reverse }) {
  return (
    <motion.section
      className="w-full py-12 px-4 flex flex-col items-cente mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className={`flex flex-col md:flex-row w-full max-w-6xl items-center gap-8 bg-white shadow-md p-4 rounded-xl ${
          reverse ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{product.category}</h2>
          <p className="text-gray-600 text-lg">{product.description}</p>
        </div>
        <div className="md:w-1/2 w-full">
          <Swiper
          modules={[Navigation, Autoplay, Pagination]}
  navigation={{
    nextEl: `.swiper-button-next-${product.category}`,
    prevEl: `.swiper-button-prev-${product.category}`,
  }}
  pagination={{
    el: `.swiper-pagination-${product.category}`,
    clickable: true,
  }}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop
  spaceBetween={20}
  slidesPerView={1.5}
  breakpoints={{
    768: { slidesPerView: 3 },
  }}
          >
            
            {product.items.map((item) => (
              <SwiperSlide key={item.name}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-40 h-40 object-cover rounded-xl shadow-md"
                  />
                  <p className="mt-2 font-semibold text-gray-700">{item.name}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
}

export default function ProductSliderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {products.map((product, idx) => (
        <ProductSection
          key={product.category}
          product={product}
          reverse={idx % 2 !== 0}
        />
      ))}
    </div>
  );
}
