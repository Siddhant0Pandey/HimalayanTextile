import { ArrowRight } from "lucide-react";

export default function CraftSection() {
  return (
    <>
      {/* Craft Section */}
      <section className="py-16 md:py-24 bg-[#F0F7F4]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/api/placeholder/800/600"
                  alt="Textile craftsmanship"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1fa951]/20 to-transparent"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-[#1fa951]">
                The Art of Weaving
              </h2>
              <p className="text-lg mb-6">
                Each textile begins its journey on traditional looms, where
                skilled artisans transform raw materials into intricate patterns
                that have been passed down through generations.
              </p>
              <p className="text-lg">
                Our weavers combine time-honored techniques with innovative
                approaches, creating pieces that honor tradition while embracing
                contemporary aesthetics.
              </p>
              <button className="mt-8 flex items-center text-[#edfeee] bg-[#1fa951] px-6 py-3 rounded-md hover:bg-[#729a78] transition-colors">
                Explore Our Process <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section
        className="h-80 bg-cover bg-center flex items-center justify-center text-center"
        style={{ backgroundImage: `url('/api/placeholder/1200/600')` }}
      >
        <div className="bg-[#1d1f10]/60 w-full h-full flex items-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#edfeee] max-w-2xl mx-auto">
              Where tradition meets contemporary design in every fiber
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
