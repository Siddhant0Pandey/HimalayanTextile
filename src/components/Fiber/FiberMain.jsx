import React from "react";
import FiberCard from "./FiberCard";
import AnimatedTitle from "./Products/AnimatedTitle";

const fiberData = [
  {
    id: 1,
    title: "Hemp Fiber",
    imageSrc: "assets/img/Fiber/hemp.jpg",
    description:
      "Hemp fiber offers exceptional strength while remaining eco-friendly. Cultivated with minimal resources, it supports sustainable innovation in modern textiles and construction.",
    link: "/Hemp",
  },
  {
    id: 2,
    title: "Cotton Fiber",
    imageSrc: "assets/img/Fiber/cotton.jpg",
    description:
      "Soft and breathable cotton is a versatile natural fiber. Its comfort and absorbency make it ideal for everyday clothing and personal care products.",
    link: "/cotton",
  },
  {
    id: 3,
    title: "Flax Fiber",
    imageSrc: "assets/img/Fiber/flax.jpg",
    description:
      "Flax produces linen, a lightweight and moisture-wicking fabric. Known for its durability and natural cooling properties, it's perfect for warm climates.",
    link: "/flax",
  },
  {
    id: 4,
    title: "Jute Fiber",
    imageSrc: "assets/img/Fiber/jute.jpg",
    description:
      "Jute is among the most affordable natural fibers with low environmental impact. Its coarse texture makes it excellent for rugs, bags, and packaging materials.",
    link: "/jute",
  },
  {
    id: 5,
    title: "Nettle Fiber",
    imageSrc: "assets/img/Fiber/nettle.jpg",
    description:
      "Nettle fiber is strong, breathable, and eco-friendly. Traditionally used in Europe, it has resurfaced as a sustainable textile option with a silky texture similar to linen.",
    link: "/Nettle",
  },
  {
    id: 6,
    title: "Silk Fiber",
    imageSrc: "assets/img/Fiber/silk.jpg",
    description:
      "Legendary for its lustrous appearance and smooth texture, silk remains one of the most luxurious natural fibers. Its protein structure gives it unique insulating properties.",
    link: "/silk",
  },
  {
    id: 7,
    title: "Cactus Fiber",
    imageSrc: "assets/img/Fiber/cactus.jpg",
    description:
      "Cactus fiber, derived mainly from prickly pear, is a sustainable and biodegradable alternative to leather. It's durable, flexible, and produced with minimal water usage.",
    link: "/cactus",
  },
  {
    id: 8,
    title: "Banana Fiber",
    imageSrc: "assets/img/Fiber/banana.jpg",
    description:
      "Banana fiber is extracted from the banana plant's pseudostems. It's strong, lightweight, and biodegradable—used in textiles, ropes, and eco-conscious packaging.",
    link: "/banana",
  },
  {
    id: 9,
    title: "Wool Fiber",
    imageSrc: "assets/img/Fiber/wool.jpg",
    description:
      "Wool is a natural protein fiber from sheep, prized for its warmth, elasticity, and moisture-wicking abilities. It’s commonly used in garments, blankets, and insulation.",
    link: "/wool",
  },
];




const FiberMain = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-b from-gray-50 to-gray-100">
      <style jsx="true">{`
        @keyframes shine {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
        .animate-shine {
          animation: shine 1.5s ease-in-out forwards;
          position: absolute;
          top: 0;
          bottom: 0;
          width: 200%;
        }
      `}</style>

      <AnimatedTitle>Natural Fiber Collection</AnimatedTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {fiberData.map((fiber, index) => (
          <FiberCard key={fiber.id} {...fiber} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FiberMain;
