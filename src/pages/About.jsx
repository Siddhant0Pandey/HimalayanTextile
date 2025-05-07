import React from "react";
import VerticalTimeline from "../components/About/VerticalTimeline";
import AboutHero from "../components/About/AboutHero";
import VerticalSnapScroll from "../components/About/VerticalSnapScroll";
import AboutKeyStrength from "../components/About/AboutKeyStrength";

function About() {
  return (
    <div>
      <AboutHero />
      <VerticalSnapScroll />
      <VerticalTimeline />
      <AboutKeyStrength />
    </div>
  );
}

export default About;
