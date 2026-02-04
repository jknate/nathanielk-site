import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";

const post = getPostBySlug("building-this-website");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function BuildingThisWebsite() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
          <p>
            Blah blah
          </p>
      </div>
    </>
  );
}
