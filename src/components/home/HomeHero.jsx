/* eslint-disable no-unused-vars */


import { useState } from "react";

import SoundPromptWrapper from "../hero/SoundPromptWrapper";

import HeroSection from "../hero/HeroSection";

export default function HomeHero() {
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [sharedAudio, setSharedAudio] = useState(null);

  return (
    // <SoundPromptWrapper
    //   onEnable={(audio) => {
    //     setAudioUnlocked(true);
    //     setSharedAudio(audio);
    //   }}
    // >
      
      <HeroSection sharedAudio={sharedAudio} />
    // </SoundPromptWrapper>
  );
}