import "../styles/globals.scss";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import SectionFooter from "components/sections/SectionFooter";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="Vincenzo Marconi's Personal Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#ec4747"
        />
        <meta name="msapplication-TileColor" content="#eeeeee" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <SectionFooter />
    </>
  );
}
