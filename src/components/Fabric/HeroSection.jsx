import { MountainSnow, Wind, Leaf } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      {/* Header */}
      <header className="px-6 py-12 sm:py-16 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1fa951] mb-6">
          Himalayan Textiles
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#1d1f10]">
          Centuries of tradition woven into every thread
        </p>
      </header>

      {/* Info Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InfoCard
              Icon={MountainSnow}
              title="Mountain Heritage"
              color="#1fa951"
              text="Our textiles draw inspiration from the majestic Himalayan landscapes, capturing the essence of mountain culture."
            />
            <InfoCard
              Icon={Wind}
              title="Sustainable Practice"
              color="#729a78"
              text="We honor ancient techniques that respect the environment, using natural dyes and sustainable materials."
            />
            <InfoCard
              Icon={Leaf}
              title="Artisan Crafted"
              color="#1fa951"
              text="Every piece tells a story through the hands of skilled artisans who have inherited generations of textile wisdom."
            />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ Icon, title, text, color }) {
  return (
    <div className="bg-[#F0F7F4] p-6 md:p-8 rounded-lg shadow-md">
      <Icon className="w-12 h-12 mb-4" style={{ color }} />
      <h3 className="text-xl font-semibold mb-3" style={{ color }}>
        {title}
      </h3>
      <p className="text-[#1d1f10]">{text}</p>
    </div>
  );
}
