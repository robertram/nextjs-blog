import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Hola</h1>
        <Link href="/fofito">Ir a Fofito!</Link>
        <br />
        <a href="/fofito">Ir a Fofito</a>
        <br />
        <a href="facebook.com">Facebook</a>
        ---------------------
        <Link href="/blog/first-post">Ir a First Post!</Link>
        <h3>No optimizada</h3>
        <img src="/images/profile.jpg" alt="Your Name" />
        <Link href="/fofito">Ir a siguiente</Link>
      </div>
    </div>
  );
}
