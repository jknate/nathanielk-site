import type { Metadata } from "next";
import { Lora, Inter, JetBrains_Mono } from "next/font/google";
import { unstable_ViewTransition as ViewTransition } from "react";
import { feedConfig } from "@/lib/feedConfig";
import Nav from "@/components/Nav";
import Clock from "@/components/Clock";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  style: ["normal", "italic"],
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  style: ["normal", "italic"],
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(feedConfig.siteUrl),
  title: {
    default: feedConfig.siteTitle,
    template: `%s · ${feedConfig.siteTitle}`,
  },
  description: feedConfig.siteDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: feedConfig.siteUrl,
    siteName: feedConfig.siteTitle,
    images: [
      {
        url: feedConfig.ogImage,
        width: 1200,
        height: 630,
        alt: feedConfig.siteTitle,
      },
    ],
  },
  appleWebApp: {
    title: feedConfig.siteTitle,
    statusBarStyle: "black-translucent",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      url: "/favicon/favicon-96x96.png",
    },
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon/favicon.svg",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
  manifest: "/favicon/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`text-[15px] antialiased ${inter.variable} ${lora.variable} ${jetbrainsMono.variable}`}
      >
        <div className="mx-auto flex min-h-dvh max-w-[60rem] flex-col gap-20 px-4 py-10 sm:px-8 2xl:px-12">
          <header>
            <Nav />
          </header>
          <main className="flex flex-1 flex-col gap-12">
            <ViewTransition name="crossfade">{children}</ViewTransition>
          </main>
          <footer className="flex items-center justify-between">
            <Clock />
          </footer>
        </div>
      </body>
    </html>
  );
}
