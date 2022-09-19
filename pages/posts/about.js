import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function About() {
  return (
    <Layout>
      <Head>
        <title> About Us </title>
      </Head>
      <h1>About Us</h1>
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>

      <p>
        DIMSVM is a dubstep duo from NYC, consisting of Alfonso and Eric.
        Guaranteed to bring you steamy tracks and preformances!{" "}
      </p>
    </Layout>
  );
}
