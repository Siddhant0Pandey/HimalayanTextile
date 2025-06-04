import React from "react";
import OurStoryHero from "../components/About/OurStory/OurStoryHero";
import OurStoryFounderMsg from "../components/About/OurStory/OurStoryFounderMsg";
import OurStoryTimeline from "../components/About/OurStory/OurStoryTimeline";
import OurStoryAnimation from "../components/About/OurStory/OurStoryAnimation";

function OurStory() {
  return (
    <div>
      <OurStoryHero />
      <OurStoryTimeline />
      <OurStoryFounderMsg />
      <OurStoryAnimation />
    </div>
  );
}

export default OurStory;
