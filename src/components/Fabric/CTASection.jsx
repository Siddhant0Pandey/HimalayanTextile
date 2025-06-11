import { ArrowRight } from "lucide-react";

export default function CTASection({ isVisible }) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        
        <div
          className="transition-all duration-1000 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)"
          }}
        >
          <h2 className="text-4xl font-normal text-[#1fa951] mb-6">
            Experience the Difference
          </h2>
          <p className="text-lg text-[#1d1f10] opacity-80 mb-8 max-w-2xl mx-auto">
            Discover textiles that honor tradition while embracing sustainable innovation. 
            Each piece carries the soul of the Himalayas.
          </p>
          
          <button className="group bg-[#1fa951] text-white px-8 py-4 rounded-full hover:bg-[#729a78] transition-all duration-300 flex items-center mx-auto font-normal text-lg">
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

      </div>
    </section>
  );
}