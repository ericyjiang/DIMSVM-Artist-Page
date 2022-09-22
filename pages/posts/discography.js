import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Discography() {

  return (
    <Layout>
      <Head>
        <title> Discography </title>
      </Head>
      <h1> Discography </h1>
      <div>
        <a href="https://soundcloud.com/dimsvm">SoundCloud</a>
      </div>
      <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/06CnAdKDLvYsj5A8x8BjF7?utm_source=generator&theme=0" 
      width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
      loading="lazy">
      </iframe>
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>
    </Layout>
  );
}

/* <iframe style="border-radius:12px" src="https://open.spotify.com/embed/artist/06CnAdKDLvYsj5A8x8BjF7?utm_source=generator&theme=0" 
width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
loading="lazy"></iframe>
*/