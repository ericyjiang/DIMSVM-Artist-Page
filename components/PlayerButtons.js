import React from "react";
import Image from "next/image";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function PlayerButtons({ isPlaying, setIsPlaying }) {
  return (
    <div>
      <button className="skip-btn" onClick={() => {}}>
        <FontAwesomeIcon icon={faBackward} />
      </button>

      <button className="play-btn" onClick={() => {}}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>

      <button className="skip-btn" onClick={() => {}}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export function CurrentSong(props) {
  return (
    <div className="music-player--details">
      <div className="details-img">
        <Image
          priority
          className="details-img--image"
          src={props.song.img_src}
          alt={props.song.title}
        />
      </div>
      <div class="range"></div>
      <div className="artist-info">
        <h3 className="details-title">{props.song.title}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
        <div class="line"></div>
      </div>
    </div>
  );
}