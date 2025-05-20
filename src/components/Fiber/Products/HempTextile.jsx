import React from "react";

const HempTextile = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-serif text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-green-800">
        Hemp Fiber: The Sustainable Backbone of Himalayan Textiles
      </h1>

      {/* Historical Background */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Historical Background
        </h2>
        <p className="mb-4">
          For centuries, communities across the Himalayas have cultivated and
          used hemp (Cannabis sativa) as a staple textile fiber. In regions like
          Nepal, Bhutan, and northern India, hemp has served not only as a
          practical material for clothing and rope but as an emblem of
          self-reliance and ecological wisdom.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <p className="mb-2">
              Hemp fiber is harvested from the stalks of the plant.
              Traditionally, villagers would cut mature stalks, soak them in
              water to soften the fibers, and then beat them against rocks to
              separate the outer fiber from the woody core. This retting and
              beating process allowed for the creation of long, strong strands.
            </p>
            <p>
              These were then hand-twisted or spun with drop spindles and woven
              into durable cloth using wooden looms. The resulting fabric was
              naturally coarse, breathable, and long-lasting — ideal for the
              rugged mountain life.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Traditional hemp processing"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-center text-gray-600 mt-2">
              Traditional hemp processing methods in the Himalayan foothills
            </p>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Cultural Significance
        </h2>
        <p className="mb-4">
          In many Himalayan villages, hemp textiles are deeply woven into
          cultural identity. In Nepal, the fabric (called *allo*) is used for
          everyday clothing, grain sacks, ceremonial robes, and headwraps. It
          also plays an essential role in spiritual and religious contexts:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Used in sacred Buddhist rituals and prayer flags</li>
          <li>Associated with Lord Shiva, who is believed to favor hemp</li>
          <li>Symbol of self-reliance in traditional crafts</li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <p className="italic">
            “The roughness of hemp fabric echoes the resilience of mountain
            life.”
          </p>
        </div>
      </section>

      {/* Sustainability & Applications */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Contemporary Applications & Sustainability
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Ecological Benefits</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Requires minimal water compared to cotton</li>
              <li>
                Grows without pesticides or herbicides in the Himalayan region
              </li>
              <li>Enriches soil through deep root systems</li>
              <li>Captures significant carbon during growth</li>
              <li>Fully biodegradable at end of life</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Modern hemp textiles"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-center text-gray-600 mt-2">
              Contemporary hemp products blending traditional techniques with
              modern design
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">
            Modern Market Applications
          </h3>
          <p className="mb-4">
            Today, Himalayan hemp textiles are experiencing a renaissance as
            consumers seek sustainable alternatives to conventional fabrics.
            Fair trade cooperatives throughout the region are creating products
            that honor traditional techniques while meeting contemporary market
            demands:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Fashionable hemp-based apparel</li>
            <li>Handcrafted bags, rugs, and accessories</li>
            <li>Eco-friendly home décor and upholstery</li>
            <li>Specialty paper and art supplies</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Preserving Craftsmanship</h4>
            <p>
              By supporting Himalayan hemp products, consumers help preserve
              ancestral knowledge, promote women's economic empowerment, and
              protect fragile mountain ecosystems. Every thread tells a story of
              sustainability, resilience, and cultural pride.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Conclusion
        </h2>
        <p>
          Hemp fiber stands as a testament to the enduring harmony between
          people and nature in the Himalayas. As the world reconsiders its
          approach to sustainability and fashion, the time-tested traditions of
          Himalayan hemp offer not only a viable solution but also a deeply
          meaningful one. Investing in these textiles means investing in
          heritage, the environment, and the future.
        </p>
      </section>
    </div>
  );
};

export default HempTextile;
