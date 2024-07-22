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
        <meta name="keywords" content="Usam, Usam Technologies, Usam Technology Solutions, Usamtechpro, Usam Tech, Autodesk Automation, Autodesk Consulting, Autodesk Data & Insights, Autodesk Training Centre, Autodesk Plugins" />
        <link rel="icon" href="https://usam-services.s3.ap-south-1.amazonaws.com/usam-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="App w-screen overflow-y-hidden overflow-x-hidden">
        <Component {...pageProps} />
        <FloatingSocialMediaBar />
      </div>
    </>
  );
}
