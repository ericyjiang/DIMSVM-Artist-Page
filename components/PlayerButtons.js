import React from "react";
import Image from "next/image";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PlayerButtons({ isPlaying, handlePlayPause, handleClick }) {
  return (
    <div>
      <button className="skip-btn" onClick={() => handleClick}>
        <FontAwesomeIcon icon={faBackward} />
      </button>

      <button className="play-btn" onClick={() => handlePlayPause}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>

      <button className="skip-btn" onClick={() => handleClick}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export function CurrentSong(props) {
  return (
    <div className="music-player--details">
        <Image
          priority
          className="song-image"
          src={props.song.imgPath}
          alt={props.song.title}
          width={300}
          height={300}
        />
      <div style={{color: 'black', textAlign:'center'}}>
        <h1>{props.song.title}</h1>
        <h4>{props.song.artist}</h4>
        <h4>{props.song.year}</h4>
        <div className="line"></div>
      </div>
    </div>
  );
}