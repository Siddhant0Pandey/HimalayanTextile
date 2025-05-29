// components/Hero.jsx
import { useState } from "react";
import SoundPromptWrapper from "./SoundPromptWrapper";
import HeroTitle from "./herosection/HeroTitle";
import EnvironmentalPollution from "./herosection/problemscard/EnvironmentalPollution";
import GlobalWarming from "./herosection/problemscard/GlobalWarming";
import HealthRisk from "./herosection/problemscard/HealthRisk";

export default function Hero() {
  const [audioUnlocked, setAudioUnlocked] = useState(false);

  return (
    <section className="w-full h-[400vh] bg-black text-white">
      <SoundPromptWrapper onEnable={() => setAudioUnlocked(true)}>
        <div className="h-screen">
          <HeroTitle audioUnlocked={audioUnlocked} />
        </div>
        <div className="h-screen">
          <EnvironmentalPollution audioUnlocked={audioUnlocked} />
        </div>
        <div className="h-screen">
          <GlobalWarming audioUnlocked={audioUnlocked} />
        </div>
        <div className="h-screen">
          <HealthRisk audioUnlocked={audioUnlocked} />
        </div>
      </SoundPromptWrapper>
    </section>
  );
}
