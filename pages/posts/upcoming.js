import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title> Upcoming Shows</title>
      </Head>
      <h1>Upcoming Shows</h1>
      <h2>
        <Link href="/"> Back to home</Link>
      </h2>
    </Layout>
  );
}
