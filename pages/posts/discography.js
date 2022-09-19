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
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>

      <p>
        <b> SPOTIFY/ SOUNDCLOUD PLAYER WILL GO HERE</b>
      </p>
    </Layout>
  );
}
