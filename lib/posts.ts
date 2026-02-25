export interface Post {
  title: string;
  slug: string;
  publishedDate: string;
  metaDescription?: string;
  tags?: string[];
}

const allPosts: Post[] = [
  {
    title: "My Summer at Microsoft",
    slug: "microsoft-internship",
    publishedDate: "2025-09-08",
    metaDescription:
      "What I worked on, what I learned, and what I'd do differently after interning as a Software Engineer at Microsoft on the OneDrive SharePoint ComputeCogs team.",
    tags: ["internship", "microsoft", "machine-learning"],
  },
  {
    title: "Building This Website",
    slug: "building-this-website",
    publishedDate: "2026-02-04",
    metaDescription:
      "How I built and deployed this personal website using Next.js, AWS S3, CloudFront, and Route 53.",
    tags: ["infrastructure", "aws", "nextjs"],
  },
];

export function getAllPosts(): Post[] {
  return [...allPosts].sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );
}

export function getPostBySlug(slug: string): Post {
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}
