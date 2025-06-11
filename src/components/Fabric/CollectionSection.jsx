/* eslint-disable no-unused-vars */
export default function CollectionsSection({ collections, openIndexes, toggleDescription, isMobile, isVisible }) {
  return (
    <section className="py-24 bg-[#F0F7F4]">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-normal text-[#1fa951] mb-4">Our Collections</h2>
          <div className="w-16 h-1 bg-[#729a78] mx-auto rounded-full" />
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <CollectionCard
              key={index}
              collection={collection}
              index={index}
              isOpen={openIndexes.includes(index)}
              onToggle={() => isMobile && toggleDescription(index)}
              isMobile={isMobile}
              delay={index * 100}
              isVisible={isVisible}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function CollectionCard({ collection, index, isOpen, onToggle, isMobile, delay, isVisible }) {
  return (
    <div
      className="group cursor-pointer transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${delay}ms`
      }}
      onClick={onToggle}
    >
      <div className="relative rounded-lg overflow-hidden">
        <img
          src={collection.image}
          alt={`${collection.title} fabric`}
          className={`w-full h-64 object-cover transform transition-transform duration-500 ${
            !isMobile && "group-hover:scale-110"
          }`}
        />
        
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[#1d1f10]/70 px-4 text-center text-[#edfeee] flex items-center justify-center transition-opacity duration-500 ${
            isMobile
              ? isOpen
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <p className="text-sm md:text-base leading-relaxed">{collection.description}</p>
        </div>
      </div>
      
      <h4 className="text-xl font-normal text-[#1fa951] mt-4 text-center">
        {collection.title}
      </h4>
    </div>
  );
}