import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PlayerButtons, CurrentSong } from "./PlayerButtons";

const MusicPlayer = ({songs, currentSong, handleClick }) => {
  const [isPlaying, setIsPlaying ] = useState(false);
  const audioPlayer = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    // if(isPlaying) audioPlayer.current.play();
    // else audioPlayer.current.pause();
  });

  return (
    <div className="music-player">
      {console.log(songs[currentSong].audio)}
      {/* <audio 
        src={songs[currentSong].audio}
        ref={audioPlayer}
      /> */}
      <CurrentSong 
        song={songs[currentSong]}
      />
      <audio
        controls
        src={songs[currentSong].audio}
      />
      {/* <PlayerButtons 
        handlePlayPause={handlePlayPause}
        handleClick={handleClick}
      /> */}
    </div>
  );
};

export default MusicPlayer;
