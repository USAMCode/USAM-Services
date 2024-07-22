import FloatingSocialMediaBar from "@/components/FloatingSocialBar";
import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>USAM Technologies</title>
        <meta
          name="description"
          content="Implement robust data management and integration solutions, transforming your raw data into actionable insights for better decision-making."
        />
        <meta
          name="keywords"
          content="Usam, Usam Technologies, Usam Technology Solutions, Usamtechpro, Usam Tech, Autodesk Automation, Autodesk Consulting, Autodesk Data & Insights, Autodesk Training Centre, Autodesk Plugins"
        />
      </Head>
      <div className="App w-screen overflow-y-hidden overflow-x-hidden">
        <Component {...pageProps} />
        <FloatingSocialMediaBar />
      </div>
    </>
  );
}
