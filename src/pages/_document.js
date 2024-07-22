import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const isProduction = process.env.NEXT_PUBLIC_NODE_ENV === "production";
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://d1nw187rmwcpt3.cloudfront.net/usam-logo.png"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Implement robust data management and integration solutions, transforming your raw data into actionable insights for better decision-making."
        />
        <meta
          name="keywords"
          content="Usam, Usam Technologies, Usam Technology Solutions, Usamtechpro, Usam Tech, Autodesk Automation, Autodesk Consulting, Autodesk Data & Insights, Autodesk Training Centre, Autodesk Plugins"
        />
        <link
          rel="apple-touch-icon"
          href="https://d1nw187rmwcpt3.cloudfront.net/usam_logo.png"
        />
        {isProduction && (
          <>
            {/* <!-- Google tag (gtag.js) --> */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-48RWRF5QPN"
            ></script>
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
          </>
        )}
      </Head>
      <body className="w-screen font-poppins overflow-x-hidden">
        {isProduction && (
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=G-48RWRF5QPN"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />
        )}
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
