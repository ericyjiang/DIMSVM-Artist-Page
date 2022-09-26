import Image from "next/image";
import Layout from "../../components/layout";
import MusicPlayer from "../../components/MusicPlayer";
import utilStyles from "../../styles/utils.module.css";
import { data } from "../data/data";

export default function Discography() {
  return (
    <Layout>
      <div>
        {data.map((item, idx) => (
          <div key={idx} >
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
      <MusicPlayer />
    </Layout>
  );
}
