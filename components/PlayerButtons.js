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
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay}/>
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
      <div>
        <Image
          src={song.imgPath}
          alt={song.title}
          width={275}
          height={275}
          style={{
            borderTopRightRadius: "1.25rem",
          }}
        />
      </div>
      <h1 className="details-title">{song.title}</h1>
      <h4 className="details-artist">{song.artist}</h4>
    </div>
  );
}
