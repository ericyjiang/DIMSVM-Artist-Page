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
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>
    </Layout>
  );
}
