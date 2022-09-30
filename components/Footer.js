import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
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
        <Link href="/posts/discography">
          <a className={utilStyles.footerLinks}>Music</a>
        </Link>
        <Link href="/posts/events">
          <a className={utilStyles.footerLinks}>Events</a>
        </Link>
        <Link href="/posts/about">
          <a className={utilStyles.footerLinks}>About Us</a>
        </Link>
        <Link href="/posts/contact">
          <a className={utilStyles.footerLinks}>Contact</a>
        </Link>
      </div>
    </footer>
  );
}
