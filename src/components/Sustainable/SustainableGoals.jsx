// src/App.jsx

import React from "react";

const App = () => {
  const sdgs = [
    {
      title: "SDG 1: No Poverty",
      description:
        "We create employment opportunities with fair wages, empowering disadvantaged communities, particularly in underdeveloped regions like Rukum and Rolpa.",
      image: "/assets/img/img1.png",
    },
    {
      title: "SDG 2: Zero Hunger",
      description:
        "By improving livelihoods and economic stability, we enhance purchasing power, indirectly addressing hunger and malnutrition in local communities.",
      image: "/assets/img/sdg2.jpg",
    },
    {
      title: "SDG 3: Good Health and Well-Being",
      description:
        "Our CSR programs focus on healthcare initiatives for workers and local communities, ensuring safer workplaces and overall well-being.",
      image: "/assets/img/sdg3.jpg",
    },
    {
      title: "SDG 4: Quality Education",
      description:
        "Through skill development programs, we equip individuals with knowledge and expertise, fostering better career opportunities and lifelong learning.",
      image: "/assets/img/sdg4.jpg",
    },
    {
      title: "SDG 5: Gender Equality",
      description:
        "We actively promote inclusivity by empowering women and marginalized groups with equal opportunities and leadership roles.",
      image: "/assets/img/sdg5.jpg",
    },
    {
      title: "SDG 6: Clean Water and Sanitation",
      description:
        "Water conservation efforts, including recycling and minimal chemical usage, safeguard local water resources and promote water positivity.",
      image: "/assets/img/sdg6.jpg",
    },
    {
      title: "SDG 7: Affordable and Clean Energy",
      description:
        "By investing in solar panels and renewable energy solutions, we reduce our reliance on non-renewable energy sources, ensuring cleaner energy usage.",
      image: "/assets/img/sdg7.jpg",
    },
    {
      title: "SDG 8: Decent Work and Economic Growth",
      description:
        "Himalayan Textile fosters innovation, upskilling, and fair labor practices, contributing to sustainable economic growth and decent employment opportunities.",
      image: "/assets/img/sdg8.jpg",
    },
    {
      title: "SDG 9: Industry, Innovation, and Infrastructure",
      description:
        "Our adoption of cutting-edge technology in textile manufacturing modernizes the industry, improves efficiencies, and sets benchmarks for sustainable industrial infrastructure.",
      image: "/assets/img/sdg9.jpg",
    },
    {
      title: "SDG 10: Reduced Inequalities",
      description:
        "Inclusivity and equitable opportunities are core to our operations, reducing disparities among genders, minorities, and disadvantaged communities.",
      image: "/assets/img/sdg10.jpg",
    },
    {
      title: "SDG 11: Sustainable Cities and Communities",
      description:
        "Using sustainable hemp products in urban development contributes to cleaner cities and improved quality of life for communities.",
      image: "/assets/img/sdg11.jpg",
    },
    {
      title: "SDG 12: Responsible Consumption and Production",
      description:
        "Our emphasis on circular production and eco-friendly raw materials minimizes waste and promotes sustainable consumption.",
      image: "/assets/img/sdg12.jpg",
    },
    {
      title: "SDG 13: Climate Action",
      description:
        "Himalayan Textile addresses climate change through afforestation, renewable energy, and reducing greenhouse gas emissions, aligning with global climate goals.",
      image: "/assets/img/sdg13.jpg",
    },
    {
      title: "SDG 14: Life Below Water",
      description:
        "By avoiding water pollution and harmful chemicals, we protect aquatic ecosystems, supporting marine biodiversity.",
      image: "/assets/img/sdg14.jpg",
    },
    {
      title: "SDG 15: Life on Land",
      description:
        "Afforestation and biodiversity promotion near operational sites enhance ecosystems and mitigate deforestation.",
      image: "/assets/img/sdg15.jpg",
    },
    {
      title: "SDG 16: Peace, Justice, and Strong Institutions",
      description:
        "Ethical and transparent governance ensures fairness, respects human rights, and promotes stakeholder trust.",
      image: "/assets/img/sdg16.jpg",
    },
    {
      title: "SDG 17: Partnerships for the Goals",
      description:
        "Collaborations with NGOs, industry leaders, and local communities amplify sustainable practices and drive systemic change.",
      image: "/assets/img/sdg17.jpg",
    },
  ];

  return (
    <div className="w-full scroll-smooth">
      {sdgs.map((sdg, index) => (
        <div
          key={index}
          className="relative h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
          style={{ backgroundImage: `url(${sdg.image})` }}
        >
          <div className="absolute inset-0 bg-black/40 " />
          <div className="relative z-10 text-white text-center px-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{sdg.title}</h2>
            <p className="text-lg md:text-xl">{sdg.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
