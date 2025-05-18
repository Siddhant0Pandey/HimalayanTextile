import { useState, useEffect } from "react";
import { MountainSnow, Wind, Leaf } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Header with fade-in animation */}
      <header
        className="px-6 py-12 sm:py-16 md:py-20 text-center transition-opacity duration-1000 ease-in-out"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1fa951] mb-6 transition-transform duration-700 ease-out"
          style={{
            transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          Himalayan Textiles
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto text-[#1d1f10] transition-all duration-1000 delay-300"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          Centuries of tradition woven into every thread
        </p>
      </header>

      {/* Info Section with staggered card animations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedInfoCard
              Icon={MountainSnow}
              title="Mountain Heritage"
              color="#1fa951"
              text="Our textiles draw inspiration from the majestic Himalayan landscapes, capturing the essence of mountain culture."
              delay={0}
              isVisible={isVisible}
            />
            <AnimatedInfoCard
              Icon={Wind}
              title="Sustainable Practice"
              color="#729a78"
              text="We honor ancient techniques that respect the environment, using natural dyes and sustainable materials."
              delay={200}
              isVisible={isVisible}
            />
            <AnimatedInfoCard
              Icon={Leaf}
              title="Artisan Crafted"
              color="#1fa951"
              text="Every piece tells a story through the hands of skilled artisans who have inherited generations of textile wisdom."
              delay={400}
              isVisible={isVisible}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AnimatedInfoCard({ Icon, title, text, color, delay, isVisible }) {
  return (
    <div
      className="bg-[#F0F7F4] p-6 md:p-8 rounded-lg shadow-md transition-all duration-700 ease-out hover:shadow-lg hover:translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex justify-center">
        <Icon
          className="w-12 h-12 mb-4 transition-transform duration-500 ease-in-out hover:scale-110"
          style={{ color }}
        />
      </div>
      <h3
        className="text-xl font-semibold mb-3 text-center transition-colors duration-300"
        style={{ color }}
      >
        {title}
      </h3>
      <p className="text-[#1d1f10] text-center">{text}</p>
    </div>
  );
}
