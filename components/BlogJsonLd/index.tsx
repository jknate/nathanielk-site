import type { Post } from "@/lib/posts";

export function BlogJsonLd({ post }: { post: Post }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    author: {
      "@type": "Person",
      name: "Nathaniel Kilonzo",
      url: "https://nathanielk.dev",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
