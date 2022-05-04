import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hola soy Fofo</h1>

        <p>Soy developer de React</p>

        <img src="" />
      </div>
    </div>
  );
}
