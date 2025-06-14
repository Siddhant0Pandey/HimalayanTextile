import React from "react";
import JournalsHero from "../components/Journals/JournalsHero";
import JournalsContent from "../components/Journals/JournalsContent";

function Journals() {
  return (
    <div className="bg-white text-darkText">
      <JournalsHero />
      <JournalsContent />
    </div>
  );
}

export default Journals;
