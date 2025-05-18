import { ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <>
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
              region for generations.
            </p>
            <p>
              We work directly with local shepherds, farmers, and foragers to
              source our materials ethically.
            </p>
            <p>
              Through our work, we aim to preserve not just the techniques of
              our ancestors, but the stories, symbols, and wisdom embedded in
              each pattern.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 md:py-24 bg-[#F0F7F4]">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-[#1fa951]">
            Featured Collections
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Mountain Shawls",
                desc: "Luxurious warmth with traditional patterns",
              },
              {
                title: "Heritage Rugs",
                desc: "Intricate designs with stories woven in",
              },
              {
                title: "Contemporary Throws",
                desc: "Modern interpretations of classic techniques",
              },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={`/api/placeholder/600/800`}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="text-xl font-semibold text-[#1fa951]">
                  {item.title}
                </h4>
                <p className="text-[#1d1f10] mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center text-[#edfeee] bg-[#729a78] px-8 py-3 rounded-md hover:bg-[#1fa951] transition-colors">
              View All Collections <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
