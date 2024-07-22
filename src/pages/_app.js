import FloatingSocialMediaBar from "@/components/FloatingSocialBar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>USAM Technologies</title>
      </Head>
      <div className="App w-screen overflow-y-hidden overflow-x-hidden">
        <Component {...pageProps} />
        <FloatingSocialMediaBar />
      </div>
    </>
  );
}
