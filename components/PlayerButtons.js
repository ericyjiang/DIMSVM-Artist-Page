import React from "react";
import Image from "next/image";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PlayerButtons({handleBack,handleSkip, setIsPlaying, isPlaying}) {
  return (
    <div className="music-player.controls">
      <button 
        onClick={() => handleBack()}
        className="music-player-btn-skipBack"
      >
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="music-player-btn-skipBack"
      >
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} style={{width: "20px", alignSelf: "center", marginLeft:"3px"}}/>
      </button>
      <button 
        onClick={() => handleSkip()}
        className="music-player-btn-skipBack"
      >
        <FontAwesomeIcon icon={faForward}/>
      </button>
    </div>
  );
}

export function CurrentSong({ song }) {
  return (
    <div>
      <div style={{paddingTop: "1rem", alignContent:"center"}}>
        <Image
          src={song.imgPath}
          alt={song.title}
          width={225}
          height={225}
          style={{
            borderRadius: "20px",
          }}
        />
      </div>
      <h1>{song.title}</h1>
      <h4>{song.artist}</h4>
    </div>
  );
}
