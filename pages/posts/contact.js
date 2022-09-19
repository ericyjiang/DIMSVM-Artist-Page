import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title> Contact </title>
      </Head>
      <h1> Contact Us </h1>
      <h2>
        <Link href="/"> Back to home </Link>
      </h2>
    </Layout>
  );
}
