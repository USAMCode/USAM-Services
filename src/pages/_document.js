import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="https://usam-services.s3.ap-south-1.amazonaws.com/usam-logo.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        {/* <!-- Google tag (gtag.js) --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-48RWRF5QPN"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-48RWRF5QPN');
            `,
          }}
        />
      </Head>
      <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=G-48RWRF5QPN"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
      <body className="w-screen font-poppins overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
