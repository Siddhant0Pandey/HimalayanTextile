import React from "react";
import CoreValues from "../components/home/CoreValues";
import MyMap from "../components/map/MyMap";
import AboutSection from "../components/home/AboutSection";
import ProductsSection from "../components/home/ProductsSection";
import ProcessSection from "../components/home/ProcessSection";
import HomeHero from "../components/home/HomeHero";
import HeroTitle from "../components/home/HeroTitle";
import TextileStoryTransition from "../components/home/TextileStoryTransition";
import WhatSetsUsApartHorizontal from "../components/home/WhatSetsUsApart";

function Home() {
  return (
    <div>
      <HeroTitle />
      <TextileStoryTransition />
      <HomeHero />
      <AboutSection />
      <ProcessSection />
      <CoreValues />
      <ProductsSection />
      {/* <WhatSetsUsApartHorizontal /> */}
      <MyMap />
    </div>
  );
}

export default Home;
