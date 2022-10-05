import Head from "next/head";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";

export default function About() {
  return (
    <Layout>
      <Head>
        <title> About Us </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <div className={utilStyles.aboutUsHeading}>
          <h2>About Us</h2>
        </div>

        <div className={utilStyles.aboutImages}>
          <Image
            priority
            src="../images/duodj.png"
            height={197}
            width={390}
            unoptimized={true}
          />
        </div>
        <div className={utilStyles.aboutUs}>
          <p>A couple friends, a couple tunes.</p>
          <p>
            Before DIMSVM was formed, Eric and Alfonso were solo acts trying to
            break into the local EDM scene. After playing a back-to-back set
            together, they realized their similarities in music taste and
            curating sets.
          </p>
        </div>
        <div className={utilStyles.aboutImages}>
          <Image
            priority
            src="../images/eezusdj.png"
            height={312}
            width={390}
            unoptimized={true}
          />
        </div>
        <div className={utilStyles.aboutUs}>
          <p>
            Eric is a self-taught DJ, starting his own solo project 'Eezus' in
            2013. In the early stages of his DJing career, he played mostly
            progressive house music. But after many years of experimenting with
            the wide range of genres in EDM, he's developed his own unique style
            mainly consisting of House, Trap, and Dubstep. Eezus never fails to
            bring the energy to his sets. His main influences consist of
            Skrillex, Jauz, and Subtronics.
          </p>
        </div>
        <div className={utilStyles.aboutImages}>
          <Image
            priority
            src="../images/xansdj.png"
            height={390}
            width={390}
            unoptimized={true}
          />
        </div>
        <div className={utilStyles.aboutUs}>
          <p>
            Alfonso originally listened to Heavy Metal. With a history of
            playing guitar for a few local bands, the explosion of Dubstep
            sparked the interested in producting heavy music digitally. After
            exploring multiple styles and aliases since 2011, he discovered his
            love for sound design and mixing multiple genres into one. His main
            influences consist of Virtual Riot, Zomboy, and Excision.
          </p>

          <p>
            The name DIMSVM is an ode to their Asian background and their love
            for food. Combined DIMSVM is also the result of their shared taste
            and attitutde towards music.
          </p>
        </div>
      </div>
    </Layout>
  );
}
