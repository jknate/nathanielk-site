import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Writing",
};

export default function Writing() {
  const posts = getAllPosts();

  return (
    <div className="space-y-1">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/writing/${post.slug}`}
          className="post-link relative flex justify-between"
        >
          <div
            className="post-link-line absolute top-[10px] left-0 w-full border-t transition-colors"
            style={{ borderColor: "var(--color-border)" }}
          />
          <h2
            className="relative block pr-2 text-left"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            {post.title}
          </h2>
          <time
            className="post-link-date relative ml-2 block pl-2 whitespace-nowrap transition-colors"
            style={{
              backgroundColor: "var(--color-background)",
              color: "var(--color-muted-foreground)",
            }}
          >
            {post.date}
          </time>
        </Link>
      ))}
    </div>
  );
}
