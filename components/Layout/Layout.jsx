import Head from "next/head";
import { Footer, Menu } from "./index";
import { ModalMobileNav } from "../Modals";

export const Layout = ({ page, title, description, children, metaImage }) => {
  return (
    <>
      <Head>
        <title>{`${title ?? "Welcome"} - PiggyFI Africa`}</title>
        <meta
          name="description"
          content={description ? description : "PiggyFI a smart way to save"}
        />
        <meta
          property="og:title"
          content={`${title ?? "Welcome"} - PiggyFI Africa`}
        />
        <meta
          property="og:description"
          content={description ? description : "Piggy.FI a smart way to save"}
        />
        <meta
          property="og:image"
          content={metaImage ?? "https://piggyfi.africa/images/logo_large.png"}
        />
        <meta
          property="og:url"
          content={"https://piggyfi.africa/" + page ?? ""}
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="android-chrome-icon"
          sizes="180x180"
          href="/manifest/icon-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/manifest/icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/manifest/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/manifest/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          href="/manifest/apple-touch-icon-iphone-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/manifest/apple-touch-icon-ipad-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/manifest/apple-touch-icon-iphone-retina-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/manifest/apple-touch-icon-ipad-retina-152x152.png"
        />
        <link rel="manifest" href="/manifest/manifest.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Menu />
      {children}
      <Footer />
      {/* Global modals across all pages */}
      <ModalMobileNav />
    </>
  );
};
