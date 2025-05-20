import React from "react";
import { useParams } from "react-router-dom";
import img1 from "/assets/img/blog/textile01.jpg";
import img2 from "/assets/img/blog/textile02.jpg";
import img3 from "/assets/img/blog/textile03.jpg";
import img4 from "/assets/img/blog/textile04.jpg";
import img5 from "/assets/img/blog/textile05.jpg";
import img6 from "/assets/img/blog/textile06.jpg";
import { GiApc } from "react-icons/gi";

const blogPosts = [
  // blog01 starts here
  {
    id: 1,
    slug: "textile01",
    title: "Weaving the Future: Smart Textiles and Sustainable Innovation",
    titleShortDescription:
      " Smart textiles merge advanced technology with eco-friendly materials, promoting sustainable innovation and transforming the future of fashion, healthcare, and industrial applications through intelligent, responsive fabric solutions.",
    description: {
      description1:
        "The textile industry is undergoing a transformative shift — and with it, the way we design, wear, and interact with clothing and fabrics. No longer are textiles just about threads and patterns. Today, it's about innovation, sustainability, and smarter materials that lead to more functional, eco-friendly, and intelligent products.At the heart of this transformation are smart textiles — fabrics enhanced with technology and designed to create a more sustainable and connected future.",

      description2: "Here’s how smart textiles are reshaping the future:",

      title: {
        title1: "1. Technology-Enhanced Functionality",
        title1Content:
          "Smart textiles integrate advanced technologies like sensors, conductive threads, and responsive materials to create garments that do more than just clothe. From fitness-tracking wearables to temperature-regulating fabrics and even health-monitoring garments, these innovations enhance comfort, usability, and personal well-being. This blend of tech and textile is opening new possibilities in fashion, healthcare, sports, and beyond.",

        title2: "2. Sustainable Fabrication",
        title2Content:
          "Sustainability is no longer optional — it’s a necessity. Smart textiles embrace eco-friendly practices, such as using recycled materials, biodegradable fibers, and energy-efficient production methods. Innovations like waterless dyeing, fabric recycling systems, and solar-powered textiles help reduce the industry's environmental impact while promoting circular fashion and resource conservation.",

        title3: "3. Improved Health and Safety Applications",
        title3Content:
          "From hospital gowns that monitor vital signs to protective uniforms that sense toxic gases, smart textiles are elevating safety standards across sectors. Wearable tech embedded in fabrics ensures early detection of health issues, enhances worker safety, and enables real-time monitoring — making garments powerful tools for both personal and public health.",

        title4: "4. Data-Driven Design and Use",
        title4Content:
          "Smart textiles generate valuable data on usage patterns, body metrics, and environmental interactions. This information helps designers, manufacturers, and users make better decisions — from optimizing performance in athletic gear to improving medical treatments with real-time health data. The feedback loop created by this data is revolutionizing how garments are made, used, and improved.",

        title5: "Why It Matters ?",
        title5Content:
          "As we face climate change, shifting lifestyles, and the demand for smarter living, the textile industry must evolve. Smart textiles are not just futuristic novelties — they are essential innovations for a more sustainable, connected, and responsive world.By merging technology with sustainability, prioritizing functionality, and championing eco-conscious design, we are truly weaving a better future — one smart thread at a time.",
      },
    },
    date: "April 23, 2025",
    author: "Admin",
    image: img1,
  },
  // blog01 ends here

  // blog02 starts from here
  {
    id: 2,
    slug: "textile02",
    title: "Top Trends in the Textile Industry You Need to Know in 2025",
    titleShortDescription:
      "Discover the top textile industry trends of 2025 — from smart fabrics and sustainable materials to digital manufacturing and personalization — shaping a more innovative, eco-conscious, and technology-driven future for fashion and industry.",

    description: {
      description1:
        "The textile industry is undergoing a major transformation in 2025. Driven by innovation, sustainability, and technology, it’s evolving faster than ever. Whether you’re a designer, manufacturer, retailer, or simply passionate about textiles, understanding the latest trends is essential to staying competitive and relevant in this dynamic field.",

      description2:
        "At Himalayan Textile, we bring you the latest insights into the world of textiles. Here’s what you can expect to learn from the top trends shaping the industry in 2025:",

      title: {
        title1: "1. Rise of Smart Textiles",
        title1Content:
          "Smart textiles are redefining functionality in fashion and industry. From fitness-monitoring activewear to healthcare garments with embedded sensors, these fabrics combine technology and usability. Expect more growth in responsive clothing, e-textiles, and wearable tech that deliver real-time data and interactive experiences.",

        title2: "2. Sustainable Innovation",
        title2Content:
          "Eco-consciousness is at the forefront of textile development. Innovations like biodegradable fabrics, recycled yarns, and waterless dyeing techniques are helping reduce environmental impact. The circular economy and zero-waste manufacturing models are becoming essential for responsible production and consumption.",

        title3: "3. Digital Transformation in Manufacturing",
        title3Content:
          "Digital technologies like AI, machine learning, and IoT are streamlining textile production. Smart factories are emerging, offering automation, real-time monitoring, and predictive maintenance to enhance productivity, reduce waste, and increase customization.",

        title4: "4. Personalization and On-Demand Production",
        title4Content:
          "Consumer expectations are changing. Personalization, fast response times, and on-demand production are becoming standard. Digital printing, 3D knitting, and virtual design tools are making it easier to offer unique, made-to-order garments that reduce overproduction and inventory waste.",

        title5: "Why Trust Himalayan Textile?",
        title5Content:
          "At Himalayan Textile, we combine deep textile industry expertise with a passion for innovation, sustainability, and smart manufacturing. Our mission is to empower professionals with the most accurate, forward-thinking insights available. We don’t just report on trends — we help you navigate them. From smart fabrics to sustainable strategies, trust Himalayan Textile to keep you informed and inspired for the future.",
      },
    },
    date: "April 10, 2025",
    author: "Admin",
    image: img2,
  },

  //   blogs02 ends here

  // blogs03 starts here
  {
    id: 3,
    slug: "textile03",
    title: "From Fiber to Fabric: Innovations in Textile Manufacturing",
    titleShortDescription:
      "Discover the latest innovations transforming textile manufacturing—from advanced fiber technologies to automated fabric production—driving sustainability, efficiency, and quality across the textile supply chain in 2025.",
    description: {
      description1:
        "The textile manufacturing industry is experiencing a wave of innovation, revolutionizing every step from fiber creation to finished fabric. At Himalayan Textile, we explore how cutting-edge technologies and sustainable practices are reshaping the industry, improving efficiency and quality while reducing environmental impact.",

      description2:
        "Traditional textile processes often face challenges such as resource waste, slow production cycles, and limited customization. Today’s innovations—from bioengineered fibers to automated fabric production—are addressing these issues by making manufacturing faster, greener, and more adaptable to market needs.",

      title: {
        title1: "1. Advanced Fiber Technologies",
        title1Content:
          "New fiber developments, including bio-based and recycled fibers, are enhancing sustainability and performance. Innovations like nanofibers and functionalized fibers are adding strength, flexibility, and specialized properties to textiles.",

        title2: "2. Automated Spinning and Weaving",
        title2Content:
          "Automation in spinning and weaving processes increases precision and productivity. Smart machines monitor fabric quality in real time, minimizing defects and waste, while enabling more complex and customized designs.",

        title3: "3. Digital Printing and Dyeing Innovations",
        title3Content:
          "Digital printing allows for vibrant, customizable patterns with less water and chemical use compared to traditional methods. Eco-friendly dyeing technologies, such as waterless and low-impact dyes, reduce environmental footprints significantly.",

        title4: "4. Smart Fabric Finishing and Treatments",
        title4Content:
          "Innovative finishing techniques apply functionalities like antimicrobial, UV protection, and moisture-wicking to fabrics. These advancements open new applications in sportswear, healthcare, and technical textiles.",

        title5: "Why These Innovations Matter",
        title5Content:
          "Modernizing textile manufacturing from fiber to fabric is crucial for sustainability, cost efficiency, and meeting consumer demands. Himalayan Textile is committed to embracing these innovations, helping the industry create high-quality, eco-conscious textiles that drive the future of fashion and beyond.",
      },
    },
    date: "March 30, 2025",
    author: "Admin",
    image: img3,
    link: "/blog/blog03",
  },

  //   blog03 ends here

  // blogs04 starts here
  {
    id: 4,
    slug: "textile04",
    title: "Designing Tomorrow: How Technology is Shaping Textile Design",
    titleShortDescription:
      "Explore how cutting-edge technologies like digital printing, 3D knitting, and AI-driven design tools are revolutionizing textile design, enabling innovative patterns, sustainable practices, and personalized fabrics for the future of fashion and industry.",
    description: {
      description1:
        "The textile design industry is rapidly evolving, fueled by advancements in technology that open new creative possibilities. At Himalayan Textile, we highlight how digital innovation, automation, and smart tools are transforming how textiles are conceived, produced, and customized for tomorrow’s markets.",

      description2: "Technology-Driven Textile Design",

      title: {
        title1: "1. Digital Printing and Pattern Innovation",
        title1Content:
          "Digital printing technology allows designers to create highly detailed, vibrant, and customizable patterns quickly and sustainably. This method reduces waste and offers unmatched flexibility for small-batch or on-demand production.",

        title2: "2. 3D Knitting and Fabric Engineering",
        title2Content:
          "3D knitting technology produces seamless, complex textile structures that improve fit, comfort, and aesthetics. This innovation reduces material waste and enables new functional fabric designs for fashion and technical applications.",

        title3: "3. AI and Data-Driven Design Tools",
        title3Content:
          "Artificial intelligence is becoming a vital part of textile design, analyzing trends, consumer preferences, and material properties to help create optimized, market-ready fabrics faster and with greater precision.",

        title4: "Why Embracing Technology Matters",
        title4Content:
          "Staying at the forefront of textile design technology is essential to meeting modern demands for sustainability, customization, and efficiency. Himalayan Textile is committed to integrating these advancements to create innovative, eco-conscious fabrics that define the future of design.",
      },
    },
    date: "March 15, 2025",
    author: "Admin",
    image: img4,
    link: "/blog/blog04",
  },

  //   blog04 ends here

  // blog05 starts here
  {
    id: 5,
    slug: "textile05",
    title: "Sustainability in Fashion: The Role of Eco-Friendly Textiles",
    titleShortDescription:
      "Eco-friendly textiles are transforming fashion by reducing environmental impact, promoting ethical production, and offering innovative, sustainable alternatives that align with the future of responsible style and conscious consumerism.",
    description: {
      description1:
        "Fashion is evolving — and sustainability is at the heart of this transformation. As the world becomes more environmentally conscious, the demand for eco-friendly textiles is rising. At Himalayan Textile, we are proud to be part of the movement leading this change by developing and promoting sustainable textile solutions that benefit both people and the planet.",

      title: {
        title1: "1. The Environmental Impact of Traditional Textiles",
        title1Content:
          "Conventional textile production often involves high water usage, toxic chemicals, and significant carbon emissions. From synthetic fibers to harmful dyes, the environmental toll is immense. Recognizing these challenges is the first step toward adopting greener alternatives.",

        title2: "2. What Makes a Textile Eco-Friendly?",
        title2Content:
          "Eco-friendly textiles are made from organic, recycled, or sustainably sourced materials with minimal environmental impact. These fabrics are often produced using water-saving techniques, natural dyes, and ethical labor practices, ensuring a healthier supply chain.",

        title3: "3. Innovations in Sustainable Materials",
        title3Content:
          "The textile industry is embracing innovations like organic cotton, bamboo, hemp, Tencel, and recycled polyester. These alternatives reduce dependence on non-renewable resources while maintaining comfort, durability, and performance — a win for both consumers and the environment.",

        title4: "4. Fashion Meets Responsibility",
        title4Content:
          "More designers and brands are prioritizing sustainability by choosing eco-friendly textiles. From runway collections to everyday wear, consumers now seek fashion that reflects their values. Himalayan Textile supports this shift by offering sustainable fabric options that don’t compromise on quality or creativity.",

        title5: "5. Our Commitment at Himalayan Textile",
        title5Content:
          "At Himalayan Textile, sustainability isn’t just a trend — it’s our mission. We continuously invest in research and eco-conscious production methods to offer textiles that align with the goals of circular fashion, reduced waste, and a cleaner future. Together, we can reshape the industry into one that respects both people and the planet.",
      },
    },
    date: "February 28, 2025",
    author: "Admin",
    image: img5,
    link: "/blog/blog05",
  },

  //   blog05 ends here

  // blog06 starts here
  {
    id: 6,

    slug: "textile06",
    title: "Global Trade in Textiles: Shifting to Green Supply",
    titleShortDescription:
      "Global supply chains are evolving with sustainability, automation, and geopolitics. Himalayan Textile leads the way by adopting eco-friendly practices and advanced technologies for efficient, resilient manufacturing.",
    description: {
      description1:
        "As globalization, automation, and environmental priorities reshape industries, textile production is at a turning point. Traditional supply chains are being re-evaluated in favor of smarter, more sustainable, and resilient systems. At Himalayan Textile, we embrace this shift — innovating our processes, rethinking sourcing strategies, and building future-ready networks to stay competitive in the global textile market.",

      description2:
        "The future of textile manufacturing depends on a flexible, technology-driven supply chain that can respond quickly to market demands and global disruptions. Here’s how Himalayan Textile is aligning with the new era of production:",

      title: {
        title1: "1. Strengthening Supply Chain Resilience",
        title1Content:
          "From pandemics to geopolitical tensions, global events have revealed the fragility of traditional textile supply chains. We’re investing in regional diversification, multi-sourcing strategies, and digital supply chain visibility tools to reduce risk and ensure uninterrupted production and delivery.",

        title2: "2. Localized and Nearshoring Strategies",
        title2Content:
          "Speed and flexibility are crucial in today’s market. Himalayan Textile is strategically aligning sourcing and manufacturing operations closer to key markets to reduce lead times, lower transportation emissions, and respond faster to shifting consumer trends.",

        title3: "3. Embracing Automation and Smart Manufacturing",
        title3Content:
          "Automation technologies like AI-driven planning, robotic fabric handling, and real-time analytics are enabling us to improve efficiency and minimize waste. By integrating smart manufacturing practices, we’re building a production model that’s lean, agile, and data-driven.",

        title4: "4. Sustainable Global Sourcing",
        title4Content:
          "We partner with eco-conscious suppliers and prioritize certified sustainable materials, ensuring our global sourcing aligns with our environmental values. Our transparent practices allow us to track fiber origins and production impacts throughout the supply chain.",

        title5: "5. Preparing for a Circular Textile Economy",
        title5Content:
          "Looking ahead, circularity will define the future of textiles. Himalayan Textile is actively exploring closed-loop systems, recyclable materials, and end-of-life solutions — helping to build a global supply chain that’s not only efficient but also regenerative.",
      },
    },
    date: "February 10, 2025",
    author: "Admin",
    image: img6,
    link: "/blog/blog06",
  },

  //   blog06 ends here
];
function JournalsDetails() {
  const { slug } = useParams();
  const blog = blogPosts.find((post) => post.slug === slug);
  console.log(blog);

  if (!blog) {
    return <div>Blog not found</div>;
  }
  return (
    <>
      <div className="container pt-15 leading-5 md:leading-6 lg:leading-8">
        <div className=" w-full flex flex-wrap">
          <div className="left flex-1/2">
            <h1 className="text-4xl font-semibold text-[#1FA951] py-6 ">
              {blog.title}
            </h1>
          </div>
          <div className="right flex-1/2">
            <p className="pt-12 pb-8 text-gray-700 text-sm">
              {blog.titleShortDescription}
            </p>
          </div>
        </div>
        <img
          src={blog.image}
          alt={blog.title}
          style={{ width: "100%", height: "60vh", objectFit: "cover" }}
        />
        <p
          className="font-semibold"
          style={{
            color: "#1FA951",
            paddingBottom: "5px",
            paddingTop: "8px",
          }}
        >
          By {blog.author} on {blog.date}
        </p>
        <p style={{ paddingTop: "10px", color: "black" }}>
          {blog.description.description1}
        </p>
        <p style={{ color: "black" }}>{blog.description.description2}</p>
        <div className="text-gray-700 te">
          <h2 style={{ paddingTop: "15px", color: "#1FA951" }}>
            {blog.description.title.title1}
          </h2>
          <p>{blog.description.title.title1Content}</p>
          <h2 style={{ paddingTop: "15px", color: "#1FA951" }}>
            {blog.description.title.title2}
          </h2>
          <p>{blog.description.title.title2Content}</p>
          <h2 style={{ paddingTop: "15px", color: "#1FA951" }}>
            {blog.description.title.title3}
          </h2>
          <p>{blog.description.title.title3Content}</p>
          <h2 style={{ paddingTop: "15px", color: "#1FA951" }}>
            {blog.description.title.title4}
          </h2>
          <p>{blog.description.title.title4Content}</p>
          <h2 style={{ paddingTop: "15px", color: "#1FA951" }}>
            {blog.description.title.title5}
          </h2>
          <p style={{ paddingBottom: "50px" }}>
            {blog.description.title.title5Content}
          </p>
        </div>
      </div>
    </>
  );
}

export default JournalsDetails;
