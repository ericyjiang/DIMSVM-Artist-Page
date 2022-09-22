import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";


export default function Discography(){
  return (
      <div style={{flexDirection: 'row', alignItems: 'center'}}>
        <h3>Discography</h3>
        <iframe
            src="https://open.spotify.com/embed/artist/06CnAdKDLvYsj5A8x8BjF7?utm_source=generator&theme=0"
            width="1000"
            height="200"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            ></iframe>
    </div>
  )
}


// export default function Discography() {
//   return (
//     <Layout>
//       <Head>
//         <title> Discography </title>
//       </Head>
//       <h1> Discography </h1>
//       <div>
//         <a href="https://soundcloud.com/dimsvm">SoundCloud</a>
//       </div>
//       <div style={{}}>
//         <iframe
//           src="https://open.spotify.com/embed/artist/06CnAdKDLvYsj5A8x8BjF7?utm_source=generator&theme=0"
//           width="1000"
//           height="200"
//           frameBorder="0"
//           allowfullscreen="No"
//           allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//           loading="lazy"
//         ></iframe>
//       </div>
//       <h2>
//         <Link href="/"> Back to home </Link>
//       </h2>
//     </Layout>
//   );
// }