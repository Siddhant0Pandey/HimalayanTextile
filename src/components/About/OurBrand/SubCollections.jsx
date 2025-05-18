/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const subCollections = [
  {
    title: "Organic Cotton",
    desc: "Soft, pesticide-free cotton.",
    img: "/materials/cotton.jpg",
    bullets: [
      "No synthetic pesticides or fertilizers",
      "Soft and breathable",
      "Biodegradable",
    ],
  },
  {
    title: "Recycled Polyester",
    desc: "Plastic bottles to fabric.",
    img: "/materials/recycled.jpg",
    bullets: [
      "Made from PET bottles",
      "Reduces landfill waste",
      "Energy-efficient production",
    ],
  },
  {
    title: "Hemp",
    desc: "Low-water, fast-growing.",
    img: "/materials/hemp.jpg",
    bullets: [
      "Minimal water use",
      "Naturally pest-resistant",
      "Durable and breathable",
    ],
  },
  {
    title: "TENCEL™ Lyocell",
    desc: "From sustainably sourced pulp.",
    img: "/materials/tencel.jpg",
    bullets: [
      "Closed-loop production",
      "Biodegradable fiber",
      "Silky-soft finish",
    ],
  },
  {
    title: "Linen (Flax)",
    desc: "Breathable and biodegradable.",
    img: "/materials/linen.jpg",
    bullets: [
      "Derived from flax plant",
      "Strong and long-lasting",
      "Naturally breathable",
    ],
  },
  {
    title: "Bamboo",
    desc: "Renewable and antibacterial.",
    img: "/materials/bamboo.jpg",
    bullets: [
      "Fast-growing grass",
      "Naturally antibacterial",
      "Soft and moisture-wicking",
    ],
  },
  {
    title: "Deadstock Fabric",
    desc: "Upcycled fabric waste.",
    img: "/materials/deadstock.jpg",
    bullets: [
      "Reduces industry waste",
      "Unique and limited pieces",
      "Promotes circular fashion",
    ],
  },
  {
    title: "Natural Dyes",
    desc: "Plant and mineral pigments.",
    img: "/materials/naturaldye.jpg",
    bullets: [
      "No toxic chemicals",
      "Earth-derived pigments",
      "Subtle, organic hues",
    ],
  },
  {
    title: "Zero Waste Design",
    desc: "Pattern-efficient design.",
    img: "/materials/zerowaste.jpg",
    bullets: [
      "No leftover scraps",
      "Efficient pattern use",
      "Eco-conscious craftsmanship",
    ],
  },
];

const SubCollections = () => {
  return (
    <div className="mt-12 mb-20 max-w-[90%] m-auto">
      <h3 className="text-2xl font-bold text-[#1fa951] text-center mb-10">
        Our Eco Sub-Collections
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {subCollections.map((item, idx) => (
          <motion.div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-500 mt-3 space-y-1">
                {item.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SubCollections;
