// components/Hero.jsx
import { useState } from "react";
import SoundPromptWrapper from "./SoundPromptWrapper";
import HeroTitle from "./herosection/HeroTitle";
import EnvironmentalPollution from "./herosection/problemscard/EnvironmentalPollution";
import GlobalWarming from "./herosection/problemscard/GlobalWarming";
import HealthRisk from "./herosection/problemscard/HealthRisk";
import NaturalFibers from "./herosection/solutions/NaturalFibers";
import CleanProcessing from "./herosection/solutions/CleanProcessing";
import SafeClothing from "./herosection/solutions/SafeClothing";

export default function Hero() {
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [sharedAudio, setSharedAudio] = useState(null);

  return (
    <section className="w-full h-[800vh] bg-black text-white">
      <SoundPromptWrapper
        onEnable={(audio) => {
          setAudioUnlocked(true);
          setSharedAudio(audio); // Store audio
        }}
      >
        <div className="h-screen">
          <HeroTitle audioUnlocked={audioUnlocked} audio={sharedAudio} />
        </div>
        <div className="h-screen">
          <EnvironmentalPollution audioUnlocked={audioUnlocked} audio={sharedAudio} />
        </div>
         <div className="h-screen">
          <NaturalFibers audioUnlocked={audioUnlocked} />
        </div>
        <div className="h-screen">
          <GlobalWarming audioUnlocked={audioUnlocked} />
        </div>
         <div className="h-screen">
          <CleanProcessing audioUnlocked={audioUnlocked} />
        </div>
        <div className="h-screen">
          <HealthRisk audioUnlocked={audioUnlocked} />
        </div>
         <div className="h-screen">
          <SafeClothing audioUnlocked={audioUnlocked} />
        </div>
      </SoundPromptWrapper>
    </section>
  );
}
