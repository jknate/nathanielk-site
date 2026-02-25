import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const sansFont = localFont({
  src: [
    {
      path: "../public/inter.roman.var.woff2",
      style: "normal",
    },
    {
      path: "../public/inter.italic.var.woff2",
      style: "italic",
    },
  ],
  preload: false,
  weight: "100 900",
  display: "swap",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --sans-font: ${sansFont.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}
