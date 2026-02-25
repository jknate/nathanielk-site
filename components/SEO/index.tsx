import Head from "next/head";
import { DefaultSeo } from "next-seo";

export const baseUrl = "https://nathanielk.dev";

export const defaultSEO = {
  title: "Nathaniel Kilonzo",
  description:
    "Nathaniel's personal website.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Nathaniel Kilonzo",
    images: [
      {
        url: `${baseUrl}/social.png`,
        alt: "Nathaniel Kilonzo",
      },
    ],
  },
};

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
}

export function SEO({ seo }: { seo?: SEOProps }) {
  return (
    <>
      <DefaultSeo
        {...{
          ...defaultSEO,
          openGraph: {
            ...defaultSEO.openGraph,
            images: [
              {
                url: seo.image || defaultSEO.openGraph.images[0].url,
                alt: seo.title,
              },
            ],
          },
          ...seo,
        }}
      />
      <Head>
        <meta name="googlebot" content="index,follow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {seo.path ? (
          <link
            rel="canonical"
            href={`${baseUrl}${seo.path === "/" ? "" : seo.path}`}
          />
        ) : null}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "WebSite",
              name: defaultSEO.title,
              url: baseUrl,
              image: defaultSEO.openGraph.images[0].url,
              author: {
                "@context": "http://schema.org",
                "@type": "Person",
                name: defaultSEO.title,
                url: baseUrl,
                jobTitle: "Computer Science Student",
                alumniOf: "Northeastern University",
                gender: "male",
                image: defaultSEO.openGraph.images[0].url,
                sameAs: [
                  "https://github.com/jknate",
                  "https://www.linkedin.com/in/nathanielkilonzo/",
                ],
              },
            }),
          }}
        />

        <meta name="author" content="Nathaniel Kilonzo" />
        <meta
          name="theme-color"
          content="#DFDFDE"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#171717"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
    </>
  );
}
