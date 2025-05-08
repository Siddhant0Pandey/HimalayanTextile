import React from "react";
import NavBarSection from "../components/Yarn/NavBarSection";
import Headhero from "../components/Yarn/Headhero";
import YarnOfferings from "../components/Yarn/YarnOfferings";
import Making from "../components/Yarn/Making";

const Yarn = () => {
  return (
    <div>
      <NavBarSection />
      <Headhero />
      <Making />
      <YarnOfferings />
    </div>
  );
};

export default Yarn;
