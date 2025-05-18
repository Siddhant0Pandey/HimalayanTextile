import { ArrowRight, MountainSnow, Wind, Leaf } from "lucide-react";

export default function HimalayanTextiles() {
  return (
    <div className="min-h-screen bg-[#edfeee] text-[#1d1f10] font-['Roboto_Slab',sans-serif] overflow-x-hidden">
      {/* Craft Showcase */}
      <section className="py-16 md:py-24 bg-[#F0F7F4]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="public\assets\img\yarn\paswool.jpg"
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

      {/* Parallax Banner (static now) */}
      <section
        className="h-80 bg-fixed bg-cover bg-center flex items-center justify-center text-center"
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

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h3 className="text-3xl font-bold mb-8 text-[#1fa951] text-center">
            Our Story
          </h3>
          <div className="space-y-6 text-lg">
            <p>
              Nestled in the foothills of the Himalayas, our collective of
              artisans has been preserving the rich textile heritage of the
              region for generations. What began as a small family workshop has
              grown into a thriving community of creators.
            </p>
            <p>
              We work directly with local shepherds, farmers, and foragers to
              source our materials ethically. From the soft wool of
              high-altitude sheep to the vibrant colors of mountain herbs and
              minerals, every element connects directly to the land we call
              home.
            </p>
            <p>
              Through our work, we aim to preserve not just the techniques of
              our ancestors, but the stories, symbols, and wisdom embedded in
              each pattern. Every textile is a living piece of Himalayan
              heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="py-16 md:py-24 bg-[#F0F7F4]">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-[#1fa951]">
            Featured Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src="public\assets\img\yarn\paswool.jpg"
                    alt={`Collection ${item}`}
                    className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#1fa951]">
                  {item === 1
                    ? "Mountain Shawls"
                    : item === 2
                    ? "Heritage Rugs"
                    : "Contemporary Throws"}
                </h4>
                <p className="text-[#1d1f10] mt-2">
                  {item === 1
                    ? "Luxurious warmth with traditional patterns"
                    : item === 2
                    ? "Intricate designs with stories woven in"
                    : "Modern interpretations of classic techniques"}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"></div>
        </div>
      </section>
    </div>
  );
}
