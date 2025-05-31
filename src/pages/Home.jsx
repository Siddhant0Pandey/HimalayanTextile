import React from "react";
import WhatSetsUsApart from "../components/home/WhatSetsUsApart";
import CoreValues from "../components/home/CoreValues";
import MyMap from "../components/map/MyMap";
import AboutSection from "../components/home/AboutSection";
import ProductsSection from "../components/home/ProductsSection";
import ProcessSection from "../components/home/ProcessSection";
import HomeHero from "../components/home/HomeHero";

function Home() {
  return (
    <>
      <HomeHero />
      <ProcessSection />

      <AboutSection />

      <WhatSetsUsApart />

      <ProductsSection />
      <CoreValues />
      <MyMap />
    </>
  );
}

export default Home;
