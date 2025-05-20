import React from "react";

const CottonTextile = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-serif text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-green-800">
        Cotton Fiber: The Soft Gold of Global Textiles
      </h1>

      {/* Historical Background */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Historical Background
        </h2>
        <p className="mb-4">
          For millennia, cotton has been cultivated and treasured across
          civilizations as a premium textile fiber. From ancient Indus Valley
          and Egypt to the Americas, cotton has transformed human societies and
          become the world's most widely used natural fiber.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <p className="mb-2">
              Cotton fiber is harvested from the protective cases (bolls) that
              surround the seeds of cotton plants. Traditionally, farmers would
              hand-pick the fluffy white fiber, clean it of seeds through a
              laborious process, and card it to align the fibers before
              spinning.
            </p>
            <p>
              The soft fibers were then spun into thread using spindles or
              spinning wheels and woven into lightweight, breathable cloth on
              various types of looms. The resulting fabric was naturally soft,
              absorbent, and comfortable against the skin — perfect for diverse
              climates and applications.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Traditional cotton processing"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-center text-gray-600 mt-2">
              Traditional cotton harvesting and processing methods
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
          Cotton has profoundly shaped cultures and economies worldwide, earning
          names like "white gold" and becoming deeply intertwined with human
          history. Its cultural significance spans continents and centuries:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Symbol of purity and cleanliness in many traditions</li>
          <li>
            Central to India's independence movement through Gandhi's spinning
            wheel
          </li>
          <li>Transformed global trade patterns and economic systems</li>
          <li>
            Created distinctive textile traditions from Indian block prints to
            American quilts
          </li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <p className="italic">
            "The softness of cotton weaves together the stories of humanity,
            connecting us through a shared textile heritage."
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
            <h3 className="text-xl font-medium mb-2">
              Ecological Considerations
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Organic cotton avoids harmful pesticides and chemicals</li>
              <li>Regenerative farming practices improve soil health</li>
              <li>Water-efficient techniques reduce environmental impact</li>
              <li>Fair trade certifications promote ethical production</li>
              <li>Biodegradable and renewable resource</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Modern cotton textiles"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-center text-gray-600 mt-2">
              Contemporary cotton products combining tradition with innovation
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">
            Modern Market Applications
          </h3>
          <p className="mb-4">
            Today, cotton remains the world's most versatile and widely used
            natural fiber. Its applications span virtually every aspect of human
            life, from the most intimate personal items to industrial
            applications:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Clothing and apparel across all fashion segments</li>
            <li>Home textiles including bedding, towels, and upholstery</li>
            <li>Medical applications from bandages to surgical materials</li>
            <li>Industrial uses including filtration and polishing</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">Sustainable Innovation</h4>
            <p>
              The cotton industry is embracing innovation through organic
              farming, recycled cotton, and improved processing techniques. By
              supporting sustainably produced cotton, consumers contribute to
              reduced water usage, lower chemical inputs, and better livelihoods
              for millions of cotton farmers worldwide.
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
          Cotton fiber represents humanity's enduring relationship with natural
          textiles. As we face environmental challenges, the cotton industry is
          adapting through organic practices, technological innovation, and
          renewed appreciation for traditional knowledge. This ancient fiber
          continues to clothe and comfort humanity while evolving to meet the
          demands of sustainability and ethical production in the modern world.
        </p>
      </section>
    </div>
  );
};

export default CottonTextile;
