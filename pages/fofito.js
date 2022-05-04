import Head from "next/head";
import Link from "next/link";

export default function Fofito() {
  return (
    <div className="container">
      <Head>
        <title>Fofito</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Fofito</h1>
        <Link href="/">Ir a Home!</Link>

        <br />
        <a href="/">Ir a Home</a>
      </div>
    </div>
  );
}
