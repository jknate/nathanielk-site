import type { Post } from "@/types";

export function getAllPosts(): Post[] {
  return [
    {
      slug: "building-this-website",
      title: "Building This Website",
      description:
        "Here is what I learned while building it.",
      date: "Feb 3, 2026",
    }
  ];
}

export function getPostBySlug(slug: string): Post {
  const post = getAllPosts().find((post) => post.slug === slug);
  if (!post) {
    throw new Error(`Post with slug ${slug} not found`);
  }
  return post;
}
