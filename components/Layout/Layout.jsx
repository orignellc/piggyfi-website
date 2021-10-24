import Head from "next/head";
import { Footer, Menu } from "./index";

export const Layout = ({ page, title, description, children, metaImage }) => {
  return (
    <>
      <Head>
        <title>{`${title ?? "Welcome"} - Piggy.FI Africa`}</title>
        <meta
          name="description"
          content={description ? description : "Piggy.FI a smart way to save"}
        />
        <meta
          property="og:title"
          content={`${title ?? "Welcome"} - Qlip NFT Academy`}
        />
        <meta
          property="og:description"
          content={description ? description : "Piggy.FI a smart way to save"}
        />
        <meta
          property="og:image"
          content={
            metaImage ?? "https://academy.qlipit.io/images/logo_primary.png"
          }
        />
        <meta
          property="og:url"
          content={"https://academy.qlipit.io/" + page ?? ""}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/images/favicon/favicon.ico" />
        <link
          rel="android-chrome-icon"
          sizes="180x180"
          href="/images/favicon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Menu />
      {children}
      <Footer />
      {/* Global modals across all pages */}
    </>
  );
};
