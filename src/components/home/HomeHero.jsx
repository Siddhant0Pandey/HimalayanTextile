/* eslint-disable no-unused-vars */


import { useState } from "react";
import Hero from "../hero/hero";
import SoundPromptWrapper from "../hero/SoundPromptWrapper";

export default function HomeHero() {
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [sharedAudio, setSharedAudio] = useState(null);

  return (
    <SoundPromptWrapper
      onEnable={(audio) => {
        setAudioUnlocked(true);
        setSharedAudio(audio);
      }}
    >
      <Hero sharedAudio={sharedAudio} />
    </SoundPromptWrapper>
  );
}