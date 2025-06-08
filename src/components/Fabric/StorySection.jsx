import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HimalayanTextiles() {
  const [isMobile, setIsMobile] = useState(false);
  const [openIndexes, setOpenIndexes] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind md breakpoint
    };
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const collections = [
    {
      title: "Hemp Fabric",
      description:
        "Exceptionally durable and breathable, hemp is one of the most sustainable textiles. Its cultivation requires little water and no pesticides, making it a top choice for eco-conscious fashion rooted in Himalayan soil.",
      image: "assets/img/fabric/hemp.jpg",
    },
    {
      title: "Cotton Fabric",
      description:
        "A staple of comfort, cotton from the Himalayan foothills is prized for its softness and purity. Naturally breathable and gentle on the skin, it’s perfect for both everyday wear and artisanal handloom creations.",
      image: "assets/img/fabric/Cotton.png",
    },
    {
      title: "Nettle Fabric",
      description:
        "Harvested from wild nettle plants in Himalayan forests, this fabric is strong, breathable, and naturally textured. Traditionally spun, nettle blends sustainability with cultural heritage.",
      image: "assets/img/fabric/nettle.jpg",
    },
    {
      title: "Flax Fabric",
      description:
        "Derived from the flax plant, this linen-like fabric carries a natural texture and resilience. Its cooling properties make it ideal for warm climates, while its rustic feel brings timeless charm to any garment.",
      image: "assets/img/fabric/Flax.png",
    },
    {
      title: "Cactus Fabric",
      description:
        "A rising star in sustainable fashion, cactus fabric is crafted from prickly pear leaves. Its leather-like texture is both durable and biodegradable, with minimal water usage in production.",
      image: "assets/img/fabric/Cactus.png",
    },
    {
      title: "Banana Fabric",
      description:
        "Spun from the fibers of banana plant stalks, this fabric is strong, silky, and biodegradable. Traditionally used in South Asian textiles, it combines resilience with sustainable innovation.",
      image: "assets/img/fabric/Banana.png",
    },
    {
      title: "Jute Fabric",
      description:
        "Jute is strong, earthy, and 100% biodegradable. Often used in traditional crafts, its coarse weave and golden hue add a natural aesthetic to bags, home decor, and eco-fashion with rural Himalayan roots.",
      image: "assets/img/fabric/Jute.png",
    },
    {
      title: "Wool Fabric",
      description:
        "Sourced from Himalayan highland sheep, wool fabric offers exceptional warmth and softness. Naturally insulating and moisture-wicking, it’s a staple for traditional winter wear.",
      image: "assets/img/fabric/Wool.png",
    },
    {
      title: "Silk Fabric",
      description:
        "Lustrous and refined, Himalayan silk reflects generations of heritage. Carefully hand-reared and woven, this fabric embodies luxury, tradition, and the artistry of mountain communities.",
      image: "assets/img/fabric/Silk.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#edfeee] text-[#1d1f10] font-['Roboto_Slab',sans-serif] overflow-x-hidden">
      {/* Craft Showcase */}
      <section className="py-16 md:py-24 bg-[#F0F7F4]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/assets/img/fabric/main.jpg"
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
                At Himalayan Textile, every thread tells a story. From raw
                fibers to intricate fabrics, our artisans blend heritage
                techniques with creative innovation to produce timeless
                textiles.
              </p>
              <p className="text-lg">
                Rooted in Himalayan tradition and crafted with care, our
                products reflect the landscape, culture, and spirit of the
                mountains.
              </p>
              <Link to="/contact">
                <button className="mt-8 flex items-center text-[#edfeee] bg-[#1fa951] px-6 py-3 rounded-md hover:bg-[#729a78] transition-colors">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
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
            About Himalayan Textile
          </h3>
          <div className="space-y-6 text-lg">
            <p>
              Nestled in the foothills of the Himalayas, Himalayan Textile
              Industries blends centuries-old craftsmanship with eco-friendly
              innovation. We produce high-quality, sustainable textiles made
              from natural fibers sourced from the pristine Himalayas.
              <br /> Our mission is to revolutionize the fabric industry while
              preserving the cultural wisdom woven into every strand, creating
              products that are both planet-positive and beautifully crafted.
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
            {collections.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                onClick={() => isMobile && toggleDescription(index)}
              >
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-auto transform transition-transform duration-500 ${
                      !isMobile && "group-hover:scale-110"
                    }`}
                  />
                  {/* Overlay */}
                  <div
                    className={`absolute inset-0 bg-[#1d1f10]/70 px-4 text-center text-[#edfeee] flex items-center justify-center transition-opacity duration-500 ${
                      isMobile
                        ? openIndexes.includes(index)
                          ? "opacity-100"
                          : "opacity-0"
                        : "opacity-0 group-hover:opacity-100"
                    }`}
                  >
                    <p className="text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-[#1fa951] mt-4">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
