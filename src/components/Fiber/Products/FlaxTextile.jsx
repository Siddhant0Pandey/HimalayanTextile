import React from "react";

const FlaxTextile = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-serif text-gray-800">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-green-800">
        Flax Fiber: The Ancient Linen of Enduring Elegance
      </h1>

      {/* Historical Background */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-green-700 mb-4">
          Historical Background
        </h2>
        <p className="mb-4">
          Flax (Linum usitatissimum) stands among humanity's oldest cultivated
          fiber plants, with evidence of its use dating back over 30,000 years.
          From ancient Egypt to medieval Europe, flax fiber—known as linen when
          woven—has clothed royalty and peasantry alike, leaving an indelible
          mark on human civilization.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <p className="mb-2">
              Flax fiber is obtained from the stalks of the plant through a
              complex process. Traditionally, harvested plants were pulled from
              the ground rather than cut to preserve fiber length. The stalks
              were then retted—soaked in water to allow bacteria to dissolve the
              pectin binding the fibers together—before being broken, scutched
              (beaten), and hackled (combed) to separate the long, silky fibers.
            </p>
            <p>
              These laborious processes yielded a fiber of exceptional strength
              and quality. When spun and woven, flax became linen—a fabric
              prized for its ability to remain cool in hot weather, its natural
              luster, and remarkable durability. Ancient Egyptian linen
              wrappings have survived thousands of years, testament to the
              fiber's extraordinary longevity.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Traditional flax processing"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-center text-gray-600 mt-2">
              Traditional flax processing methods in rural communities
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
          Few textiles have influenced human culture as profoundly as linen. Its
          production shaped agricultural practices, while its versatility and
          value established it as a cornerstone of textile heritage across
          continents:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>
            Symbol of purity in ancient Egypt, used to wrap mummies and as
            priestly garments
          </li>
          <li>
            Essential dowry item throughout Europe, with "linens" becoming
            synonymous with household textiles
          </li>
          <li>
            Associated with wealth and refinement, yet practical enough for
            everyday workwear
          </li>
          <li>
            Featured in religious texts and ceremonies across multiple faiths
          </li>
        </ul>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
          <p className="italic">
            "The crisp rustle of linen echoes through history—a whisper
            connecting us to countless generations who spun, wove, and wore this
            remarkable fiber."
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
              <li>
                Requires minimal pesticides compared to conventional cotton
              </li>
              <li>Can grow in poor soil unsuitable for food crops</li>
              <li>Uses rainwater efficiently in traditional growing regions</li>
              <li>
                Every part of the plant can be utilized (seeds for oil, short
                fibers for paper)
              </li>
              <li>Fully biodegradable and compostable at end of life</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/500/300"
              alt="Modern linen textiles"
              className="rounded-lg shadow-md"
            />
            <p className="text-sm text-center text-gray-600 mt-2">
              Contemporary linen products blending tradition with modern design
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-medium mb-2">
            Modern Market Applications
          </h3>
          <p className="mb-4">
            Today, linen is experiencing a renaissance as consumers rediscover
            its exceptional properties and environmental benefits. Though more
            expensive than many mass-produced textiles, flax fiber's durability
            means linen products often outlast synthetic alternatives many times
            over:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Premium clothing that becomes softer with each washing</li>
            <li>Heirloom-quality bedding and table linens</li>
            <li>Upholstery and drapery for elegant interiors</li>
            <li>Specialty paper for art, currency, and archival documents</li>
            <li>Technical applications utilizing flax's natural strength</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
            <h4 className="font-semibold mb-2">
              European Heritage & Innovation
            </h4>
            <p>
              Europe remains the center of high-quality flax production, with
              Belgium, France, and the Netherlands preserving centuries of
              expertise while embracing modern processing techniques. These
              regions produce over 80% of the world's premium flax fiber,
              supporting rural economies while maintaining exceptional quality
              standards and advancing sustainable practices.
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
          Flax fiber represents one of humanity's most enduring textile
          traditions—a connection to our ancestors that remains relevant in
          today's search for sustainable materials. Its journey from field to
          fabric exemplifies the thoughtful relationship between people and
          plants that predates modern industry. As we face environmental
          challenges, this ancient fiber offers timeless lessons in durability,
          versatility, and the quiet luxury of materials that improve with age
          rather than requiring replacement.
        </p>
      </section>
    </div>
  );
};

export default FlaxTextile;
