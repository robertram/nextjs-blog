import Head from "next/head";
import Link from "next/link";

export default function Fofito() {
  return (
    <div className="container">
      <Head>
        <title>First Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>First Post</h1>

        <p>asdjkhansdkjnasdkjnasdkljansdlkjn</p>
        <Link href="/">Ir a Home!</Link>
      </div>
    </div>
  );
}
