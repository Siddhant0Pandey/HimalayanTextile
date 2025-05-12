import React from "react";
import SustainableHero from "../components/Sustainable/SustainableHero";
import SustainabilityStory from "../components/Sustainable/SustainableStory";
import SustainableGoals from "../components/Sustainable/SustainableGoals";
import ElevatingPeople from "../components/Sustainable/ElevatingPeople";
import Transforming from "../components/Sustainable/Transforming";

function Sustainable() {
  return (
    <div>
      <SustainableHero />
      <SustainabilityStory />
      <SustainableGoals />
      <ElevatingPeople />
      <Transforming />
    </div>
  );
}

export default Sustainable;
