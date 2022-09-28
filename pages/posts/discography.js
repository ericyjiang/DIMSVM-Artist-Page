import React, { useState, useEffect } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import MusicPlayer from "../../components/MusicPlayer";
import { data } from "../data/data";

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
                <div className="song-text">
                  <h1>{item.title}</h1>
                  <h4>{item.artist}</h4>
                  <h6>Released: {item.year}</h6>
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
