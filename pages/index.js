import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";

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
        <Image
          priority
          src="/images/Duo.png"
          className={utilStyles.borderCircle}
          height={488}
          width={488}
        />
        <p className={utilStyles.description}>
          <h1> DIMSVM </h1>
          <p>Producer & DJ duo</p>
          <p>
            Pronunced as "dim sum", DIMSVM is a duo act from New York City
            specializing in multiple subgenres of Electronic Dance Music
            including Dubstep, Trap, House, and more.
          </p>
        </p>

        <div className="grid">
          <a className="card">
            <Link href="/posts/upcoming">
              <h3> Upcoming Shows &rarr; </h3>
            </Link>
            <Link href="/posts/upcoming">
              <p> Come to our next show </p>
            </Link>
          </a>

          <a className="card">
            <Link href="/posts/contact">
              <h3> Contact Us &rarr; </h3>
            </Link>
            <Link href="/posts/contact">
              <p> Contact for bookings </p>
            </Link>
          </a>

          <a className="card">
            <Link href="/posts/discography">
              <h3> Discography &rarr; </h3>
            </Link>
            <Link href="/posts/discography">
              <p> Listen to your favorite tracks </p>
            </Link>
          </a>

          <a className="card">
            <Link href="/posts/about">
              <h3> About Us &rarr; </h3>
            </Link>
            <Link href="/posts/about">
              <p> DIMSVM's story </p>
            </Link>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      {/* <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style> */}

      {/* <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style> */}
    </div>
  );
}
