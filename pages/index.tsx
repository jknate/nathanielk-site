import type { GetStaticProps } from "next";
import { getAllPosts } from "@/lib/posts";
import Intro from "@/components/Home/Intro";
import InlineLink from "@/components/InlineLink";
import Resume from "@/components/Home/Resume";
import { Main } from "@/components/Layouts";
import { SEO } from "@/components/SEO";
import SocialLinks from "@/components/SocialLinks";
import Posts from "@/components/Home/Posts";
import Projects from "@/components/Home/Projects";
import Reading from "@/components/Home/Reading";

export default function Home({ posts }) {
  return (
    <>
      <SEO
        seo={{
          title: "Nathaniel Kilonzo",
          description:
            "Nathaniel's personal website.",
          path: "/",
        }}
      />
      <Main>
        <SocialLinks />
        <Intro>
          <p>
            I&apos;m a Computer Science student at Northeastern University
            focused on systems. I build backend and distributed projects that
            prioritize correctness, performance, and reliability, with an
            emphasis on how software behaves under load and failure. My goal is
            to contribute to infrastructure and software that operates at scale.
          </p>
          <p className="mt-3">
            In my free time, I enjoy watching films, cooking, and refining a
            hi-fi audio setup. Feel free to{" "}
            <InlineLink href="https://www.linkedin.com/in/nathanielkilonzo/">
              connect
            </InlineLink>
            .
          </p>
        </Intro>
        <Resume />
        <Posts posts={posts} />
        <Projects />
        <Reading />
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts().slice(0, 5);
  return { props: { posts } };
};
