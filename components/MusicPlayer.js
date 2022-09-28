import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PlayerButtons, CurrentSong } from "./PlayerButtons";

function Player({songs, currentSong, handleSkip, handleBack}) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  return (
    <>
      <div className="music-player"
      >
        <audio
          src={songs[currentSong].audio}
          ref={audioElement}
        ></audio>
        <CurrentSong song={songs[currentSong]} />
        <PlayerButtons
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleBack={handleBack}
          handleSkip={handleSkip}
        />
      </div>
    </>
  );
}
export default Player;