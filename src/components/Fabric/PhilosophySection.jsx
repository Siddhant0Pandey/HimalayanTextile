import { ArrowRight, MountainSnow, Wind, Leaf, Eye } from "lucide-react";
import ValueCard from "./ValueCard";


export default function PhilosophySection({ isVisible }) {
  const values = [
    {
      icon: MountainSnow,
      title: "Heritage",
      description: "Rooted in Himalayan tradition"
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Eco-friendly practices"
    },
    {
      icon: Wind,
      title: "Craftsmanship",
      description: "Artisan-made excellence"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-[#1fa951] mb-4">Our Philosophy</h2>
          <div className="w-16 h-1 bg-[#729a78] mx-auto rounded-full" />
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index * 200}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Story Text */}
        <div 
          className="mt-20 text-center transition-all duration-1000 delay-500"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)"
          }}
        >
          <p className="text-lg text-[#1d1f10] max-w-3xl mx-auto leading-relaxed opacity-80">
            From the pristine valleys of the Himalayas, we source natural fibers and 
            transform them using time-honored techniques. Each textile tells a story 
            of sustainable innovation and cultural preservation.
          </p>
        </div>

      </div>
    </section>
  );
}