import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import Discography from "./posts/discography";

export default function Home() {
  return (
    <div className={utilStyles.container}>
      <Head>
        <title>DIMSVM</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Image
            priority
            src="/images/Duo.png"
            className={utilStyles.borderCircle}
            height={311.72}
            width={300}
            unoptimized={true}
          />
        </div>

        <p className={utilStyles.description}>
          <h1 className={utilStyles.h1title}>DIMSVM</h1>
          <p className={utilStyles.subTitle}>Producer & DJ duo</p>
          <p>
            Pronunced as "dim sum", DIMSVM is a duo act from New York City
            specializing in multiple subgenres of Electronic Dance Music
            including Dubstep, Trap, House, and more.
          </p>
        </p>

        <div className={utilStyles.socials}>
          <a href="https://open.spotify.com/artist/06CnAdKDLvYsj5A8x8BjF7?si=l5AEjToMS9mMtvjMRf7UTQ">
            <Image
              priority
              src="/images/SPOT.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>

          <a href="https://soundcloud.com/dimsvm">
            <Image
              priority
              src="/images/SC.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCWsAAtpwWOMxJjbZlOqOfQA">
            <Image
              priority
              src="/images/YOU.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>

          <a href="https://www.facebook.com/dimsvm.music">
            <Image
              priority
              src="/images/META.png"
              className={utilStyles.borderCircle}
              height={48}
              width={48}
              unoptimized={true}
            />
          </a>

          <a href="https://www.instagram.com/dimsvm.music/">
            <Image
              priority
              src="/images/IG.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>
        </div>

        <div>
          <h2 className={utilStyles.landingDisco}>BOUNCE</h2>
          <p>is out now!</p>
        </div>

        <div className={utilStyles.bounce}>
          <Image
            priority
            src="/images/DIMSVM - Bounce artwork.jpeg"
            height={326}
            width={326}
            unoptimized={true}
          />
        </div>

        <div className={utilStyles.button}>
          <a
            href="https://open.spotify.com/track/4VGbriNa3s3tdRSEYn7dmn?si=74373ebf06f34fcc"
            className={utilStyles.spotLink}
          >
            <b>Listen on Spotify</b>
          </a>
        </div>

        <div className={utilStyles.eventName}>
          <h3>Next Event</h3>
        </div>

        <div className={utilStyles.event}>
          <Image
            priority
            src="/images/gossip8.png"
            height={232}
            width={358}
            unoptimized={true}
          />
        </div>

        <div className={utilStyles.eventDescription}>
          <a className={utilStyles.barName}>Gossip 8 Inc</a>
          <p>
            Oct. 20, 2022 | 10:00 pm <br />
            153-14 Northern Blvd, Flushing NY 11354
          </p>
        </div>

        <div className={utilStyles.eventButton}>
          <Link href="/posts/upcoming">
            <b>View All Events</b>
          </Link>
        </div>
      </main>

      <footer className={utilStyles.footer}>
        <div className={utilStyles.footerLogo}>
          <Image
            priority
            src="/images/DIMSVM-Logo-White.png"
            height={60}
            width={138}
          />
        </div>

        <div className={utilStyles.footerSocials}>
          <a href="https://open.spotify.com/artist/06CnAdKDLvYsj5A8x8BjF7?si=l5AEjToMS9mMtvjMRf7UTQ">
            <Image
              priority
              src="/images/SPOT.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>

          <a href="https://soundcloud.com/dimsvm">
            <Image
              priority
              src="/images/SC.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>
          <a href="https://www.youtube.com/channel/UCWsAAtpwWOMxJjbZlOqOfQA">
            <Image
              priority
              src="/images/YOU.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>

          <a href="https://www.facebook.com/dimsvm.music">
            <Image
              priority
              src="/images/META.png"
              className={utilStyles.borderCircle}
              height={48}
              width={48}
              unoptimized={true}
            />
          </a>

          <a href="https://www.instagram.com/dimsvm.music/">
            <Image
              priority
              src="/images/IG.png"
              className={utilStyles.borderCircle}
              height={50}
              width={50}
              unoptimized={true}
            />
          </a>
        </div>

        <div>
          <Link href="/">
            <a className={utilStyles.footerLinks}> Home </a>
          </Link>
          <Link href="/posts/discography">
            <a className={utilStyles.footerLinks}> Music </a>
          </Link>
          <Link href="/posts/upcoming">
            <a className={utilStyles.footerLinks}>Events </a>
          </Link>
          <Link href="/posts/contact">
            <a className={utilStyles.footerLinks}>Contact</a>
          </Link>
        </div>
      </footer>
    </div>
  );
}
