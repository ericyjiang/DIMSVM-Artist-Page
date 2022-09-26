import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { PlayerButtons, CurrentSong } from "./PlayerButtons";
import { data } from "../pages/data/data";

const MusicPlayer = () => {
  return (
    <div>
      <PlayerButtons />
    </div>
  );
};

export default MusicPlayer;
