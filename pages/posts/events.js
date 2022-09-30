import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Events() {
  return (
    <Layout>
      <Head>
        <title> Upcoming Shows</title>
      </Head>
      <h1>Upcoming Shows</h1>
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>

      <p>
        Oct. 29, 2022 <br />
        <b>Gossip 8 </b> <br />
        Northern Blvd, NY
      </p>

      <h2> Past Shows </h2>
      <p>
        July 03, 2020 <br />
        <b> Vibestream</b> <br />
        Virtual Live Stream
      </p>

      <p>
        Feb. 15, 2020 <br />
        <b>Topsaa </b> <br />
        College Point, NY
      </p>

      <p>
        June 28, 2019 <br />
        <b> Meet </b>
        <br />
        Flushing, NY
      </p>
    </Layout>
  );
}
