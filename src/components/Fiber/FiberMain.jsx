import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

// Card Component
const FiberCard = ({ imageSrc, title, description }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const hoverTl = useRef(null);

  useEffect(() => {
    // Set content hidden initially
    gsap.set(contentRef.current, {
      yPercent: 100,
      opacity: 0,
      height: 0,
      padding: 0,
    });

    // Create separate hover animation for each card
    hoverTl.current = gsap.timeline({ paused: true });

    hoverTl.current.to(
      imageRef.current,
      {
        scale: 1.05,
        duration: 0.4,
        ease: "power2.out",
      },
      0
    );

    hoverTl.current.to(
      contentRef.current,
      {
        yPercent: 0,
        opacity: 1,
        height: "auto",
        padding: "1.5rem",
        duration: 0.4,
        ease: "power2.out",
      },
      0
    );

    // Entrance animation per card (each one runs independently)
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 30,
        scale: 0.96,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: Math.random() * 0.5, // randomize for natural staggered entrance
      }
    );
  }, []);

  const handleMouseEnter = () => {
    hoverTl.current.play();
  };

  const handleMouseLeave = () => {
    hoverTl.current.reverse();
  };

  return (
    <div
      ref={cardRef}
      className="card bg-base-100 shadow-lg overflow-hidden cursor-pointer h-full transition-transform duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure
        ref={imageRef}
        className="relative h-64 overflow-hidden transition-transform duration-300"
      >
        <img
          src={imageSrc || "/api/placeholder/400/320"}
          alt={title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div
        ref={contentRef}
        className="card-body overflow-hidden p-0"
        style={{ height: 0 }}
      >
        <h2 className="card-title text-primary">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end mt-2">
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

// Main Component
const FiberMain = () => {
  const cardsData = [
    {
      id: 1,
      title: "Hemp Fiber",
      imageSrc: "assets/img/Fiber/hemp.jpg",
      description:
        "Hemp fiber offers exceptional strength while remaining eco-friendly. Cultivated with minimal resources, it supports sustainable innovation in modern textiles and construction.",
    },
    {
      id: 2,
      title: "Cotton Fiber",
      imageSrc: "assets/img/Fiber/hemp.jpg",
      description:
        "Soft and breathable cotton is a versatile natural fiber. Its comfort and absorbency make it ideal for everyday clothing and personal care products.",
    },
    {
      id: 3,
      title: "Flax Fiber",
      imageSrc: "assets/img/Fiber/hemp.jpg",
      description:
        "Flax produces linen, a lightweight and moisture-wicking fabric. Known for its durability and natural cooling properties, it's perfect for warm climates.",
    },
    {
      id: 4,
      title: "Jute Fiber",
      imageSrc: "assets/img/Fiber/hemp.jpg",
      description:
        "Jute is among the most affordable natural fibers with low environmental impact. Its coarse texture makes it excellent for rugs, bags, and packaging materials.",
    },
    {
      id: 5,
      title: "Bamboo Fiber",
      imageSrc: "assets/img/Fiber/hemp.jpg",
      description:
        "Fast-growing bamboo creates soft, antibacterial fibers. Its sustainability and luxurious feel have made it increasingly popular in modern eco-friendly textiles.",
    },
    {
      id: 6,
      title: "Silk Fiber",
      imageSrc: "assets/img/Fiber/hemp.jpg",
      description:
        "Legendary for its lustrous appearance and smooth texture, silk remains one of the most luxurious natural fibers. Its protein structure gives it unique insulating properties.",
    },
  ];

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Natural Fiber Collection
      </h1>

      <div className=" flex  gap-6 max-w-4xl mx-auto overflow-visible">
        {cardsData.map((card) => (
          <FiberCard
            key={card.id}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FiberMain;
