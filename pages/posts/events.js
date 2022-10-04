import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";

export default function Events() {
  return (
    <Layout>
      <Head>
        <title> Upcoming Shows</title>
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
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>

      <div className={utilStyles.eventName}>
        <h3>Next Event</h3>
      </div>

      <div className={utilStyles.upcomingEvent}>
        <Image
          priority
          src="/images/gossip8.png"
          height={232}
          width={358}
          unoptimized={true}
        />
      </div>

      <div className={utilStyles.upcomingEventDescription}>
        <a className={utilStyles.eventPageName}>Gossip 8 Inc</a>
        <p>
          Oct. 20, 2022 | 10:00 pm <br />
          153-14 Northern Blvd, Flushing NY 11354
        </p>
      </div>

      <div className={utilStyles.eventName}>
        <h2> Past Events</h2>
      </div>

      <div className={utilStyles.pastEvent}>
        <div className={utilStyles.pastEventDescription}>
          <a className={utilStyles.eventPageName}>Vibestream</a>
          <p>
            Jul. 03, 2020 <br />
            Virtual Livestream Event
          </p>
        </div>
      </div>

      <div className={utilStyles.pastEvent}>
        <div className={utilStyles.pastEventDescription}>
          <a className={utilStyles.eventPageName}>Topsaa</a>
          <p>
            Feb. 15, 2020 <br />
            41-14 162nd St, Queens, NY 11358
          </p>
        </div>
      </div>

      <div className={utilStyles.pastEvent}>
        <div className={utilStyles.pastEventDescription}>
          <a className={utilStyles.eventPageName}>BASSMENT</a>
          <p>
            Jun. 28, 2019 <br />
            137-74 Northern Blvd, Flushing, NY 11354
          </p>
        </div>
      </div>
    </Layout>
  );
}
