import React from "react";
import VerticalTimeline from "../components/About/VerticalTimeline";
import AboutHero from "../components/About/AboutHero";
import VerticalSnapScroll from "../components/About/VerticalSnapScroll";

function About() {
  return (
    <div>
      <AboutHero />
      <VerticalSnapScroll />
      <VerticalTimeline />
    </div>
  );
}

export default About;
