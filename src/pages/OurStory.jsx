import React from "react";
import OurStoryHero from "../components/About/OurStory/OurStoryHero";
import OurStoryFounderMsg from "../components/About/OurStory/OurStoryFounderMsg";
import OurStoryTimeline from "../components/About/OurStory/OurStoryTimeline";

function OurStory() {
  return (
    <div>
      <OurStoryHero />
      <OurStoryTimeline />
      <OurStoryFounderMsg />
    </div>
  );
}

export default OurStory;
