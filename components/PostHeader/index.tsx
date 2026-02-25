import Link from "next/link";
import { ChevronLeft } from "@/components/Icons";
import formatDate from "@/lib/formatDate";
import type { Post } from "@/lib/posts";

export function PostHeader({ post }: { post: Post }) {
  return (
    <header className="relative flex flex-col gap-4 py-6 sm:pt-0 sm:pb-12 text-center text-balance">
      <div className="flex flex-row gap-2 items-center justify-center text-sm [font-variation-settings:'opsz'_14,'wght'_550] dark:text-silver-dark text-neutral-500">
        <time
          dateTime={post.publishedDate}
          className="text-neutral-500 dark:text-silver-dark capitalize"
        >
          {formatDate(post.publishedDate)}
        </time>
      </div>

      <h1 className="text-4xl/[1.1] sm:text-5xl/[1.1] text-neutral-800 [font-variation-settings:'opsz'_48,_'wght'_550] dark:text-white tracking-tight">
        {post.title}
      </h1>

      <div className="pt-1">
        <Link
          href="/posts"
          className="text-sm text-neutral-500 dark:text-silver-dark [font-variation-settings:'opsz'_14,'wght'_550] inline-flex items-center gap-1"
        >
          <ChevronLeft size={12} />
          All posts
        </Link>
      </div>
    </header>
  );
}
