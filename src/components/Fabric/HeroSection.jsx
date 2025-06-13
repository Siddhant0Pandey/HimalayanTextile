export default function HeroSection({ isVisible }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#1fa951]"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)"
          }}
        >
          <h1 className="text-5xl md:text-7xl font-normal text-[#1fa951] mb-6 tracking-tight">
            Himalayan
            <span className="block font-bold">Textiles</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#729a78] mb-8 font-normal">
            Where tradition meets innovation
          </p>
          <div className="w-24 h-1 bg-[#1fa951] mx-auto mb-8 rounded-full" />
          <p className="text-lg text-[#1d1f10] opacity-80 max-w-2xl mx-auto leading-relaxed">
            Centuries of craftsmanship woven into sustainable, beautiful textiles 
            from the heart of the Himalayas
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  );
}