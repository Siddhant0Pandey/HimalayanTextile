import React from "react";
import OurStoryHero from "../components/About/OurStory/OurStoryHero";
import OurStoryFounderMsg from "../components/About/OurStory/OurStoryFounderMsg";
import OurStoryTimeline from "../components/About/OurStory/OurStoryTimeline";
import OurStoryAnimation from "../components/About/OurStory/OurStoryAnimation";
import OurStoryAnimation2 from "../components/About/OurStory/OurStoryAnimation2";

function OurStory() {
  return (
    <div>
      <OurStoryHero />
      <OurStoryTimeline />
      <OurStoryFounderMsg />
      {/* <OurStoryAnimation2 /> */}
    </div>
  );
}

export default OurStory;
