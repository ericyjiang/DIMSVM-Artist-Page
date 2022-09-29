import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import MusicPlayer from "../../components/MusicPlayer";
import { data } from "../data/data";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Discography() {
  const [currentSong, setCurrentSong] = useState(0);

  const handleSkip = () => {
    if (currentSong === data.length - 1) setCurrentSong(0);
    else setCurrentSong(currentSong + 1);
  };

  const handleBack = () => {
    if(currentSong === 0) setCurrentSong(2);
    else setCurrentSong(currentSong - 1);
  }

  return (
    <Layout>
      <div style={{display: 'flex'}}>
        <div>
          {data.map((item, idx) => (
            <div key={idx}>
              <div className="song">
                <div className="song-image">
                  <Image
                    priority
                    src={item.imgPath}
                    unoptimized={true}
                    height={150}
                    width={150}
                  />
                </div>
                <div className="song-row">
                  <div style={{flexDirection: "column", marginLeft: "1rem"}}>
                    <h1 style={{lineHeight: "0.2"}}>{item.title}</h1>
                    <h5>{item.artist}</h5>
                    <h6>Released: {item.year}</h6>
                  </div>
                  <FontAwesomeIcon icon={faPlay} style={{width: "15px", marginRight:"10px", alignSelf:"end", marginBottom:"15px"}} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <MusicPlayer
          songs={data}
          currentSong={currentSong}
          handleSkip={handleSkip}
          handleBack={handleBack}
        />
      </div>
    </Layout>
  );
}
