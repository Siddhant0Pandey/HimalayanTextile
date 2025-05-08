import React from "react";
import OurStoryHero from "../components/About/OurStory/OurStoryHero";
import OurStoryFounderMsg from "../components/About/OurStory/OurStoryFounderMsg";
import OurStoryTimeline from "../components/About/OurStory/OurStoryTimeline";

function OurStory() {
  return (
    <div>
      <OurStoryHero />
      <OurStoryFounderMsg />
      <OurStoryTimeline />
    </div>
  );
}

export default OurStory;
