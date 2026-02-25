import { Main } from "@/components/Layouts";
import { SEO } from "@/components/SEO";
import { PostHeader } from "@/components/PostHeader";
import { BlogJsonLd } from "@/components/BlogJsonLd";
import { getPostBySlug } from "@/lib/posts";
import { H2, H3 } from "@/components/Headings";

const post = getPostBySlug("microsoft-internship");

export default function MicrosoftInternship() {
  return (
    <>
      <SEO
        seo={{
          title: post.title,
          description: post.metaDescription,
          path: `/posts/${post.slug}`,
        }}
      />
      <Main slim showBack>
        <BlogJsonLd post={post} />
        <PostHeader post={post} />

        <div className="prose-custom">
          <div className="space-y-4">
            <p>
              This past summer I had the opportunity to intern as a Software
              Engineer at Microsoft on the OneDrive SharePoint Compute COGs
              team, a team focused on reducing the computational costs behind
              the scenes of OneDrive and SharePoint. Here's what I worked on,
              what I learned, and what I'd do differently.
            </p>

            <H2>The Work</H2>

            <p>
              My internship was split into two halves, each with a distinct
              project.
            </p>

            <p>
              In the first half, I tackled a real user experience gap: when
              people upload videos, they rarely add custom thumbnails or titles,
              which hurts discoverability and engagement. I designed and
              implemented three AI-driven solutions that automatically generate
              thumbnails and titles upon upload, built a minimal web app to
              showcase them, and delivered a thorough analysis comparing the
              tradeoffs of each approach with a final recommendation.
            </p>

            <p>
              The second half shifted into machine learning. OneDrive
              preprocesses every uploaded video, but the reality is that only a
              small percentage of videos ever get played, meaning a lot of
              compute is wasted. The team had a v1 heuristic-based playback
              prediction model, and my job was to push it further. I built a
              DNN-based model in PyTorch that outperformed the original on F1
              score, taking advantage of more complex feature relationships.
              Beyond the model itself, I dove into feature engineering,
              writing code in the MeTA service to extract new signals tied to
              the video owner, things like organizational attributes pulled from
              AAD. The architecture had way more upside, and there's a clear
              path to keep improving it.
            </p>

            <p>
              Along the way I picked up PyTorch for model training and
              evaluation, MeTA for feature extraction, and AML Workspace for
              designing scalable model workflows. I also collaborated closely
              with the Applied Sciences team, helping them ramp up on DNNs and
              troubleshoot environment setup issues.
            </p>

            <H2>What I Actually Learned</H2>

            <p>
              The technical growth was significant, but the lessons that will
              stick with me the longest are the non-technical ones.
            </p>

            <H3>Communication is the job.</H3>

            <p>
              Early in my second project, there was ambiguity around my role —
              I thought I'd be building the DNN model end-to-end, but learned
              another engineer might own a part of that piece. Instead of raising it
              immediately, I waited. That cost about a week of misaligned
              effort. It taught me that in a fast-moving environment,
              proactively clarifying expectations isn't optional — it's part of
              doing the work well. After that, I made it a point to keep my
              manager, my skip, and cross-functional partners in the loop
              through standups and async updates. The difference was night and
              day.
            </p>

            <p>
              I also spent a lot of time just observing how full-time engineers
              operate: how they scope problems, how they communicate tradeoffs
              to stakeholders, how they unblock themselves when something
              stalls. Watching experienced engineers navigate ambiguity with
              confidence, ask the right questions in meetings, and manage up
              effectively gave me a clearer picture of what it looks like to be
              effective beyond just writing good code.
            </p>

            <H3>Balance is something you have to choose.</H3>

            <p>
              I'll be honest, at times I may have been too locked in. There were
              intern events I skipped because I was deep in a debugging session
              or chasing a model improvement. And while I don't regret the work
              ethic, I do think I left some experiences on the table. The intern
              program exists for a reason, it's not just about shipping code,
              it's about building relationships and soaking in the culture. If I
              could go back, I'd be more intentional about stepping away when it
              mattered. The code will still be there after the event.
            </p>

            <H2>Looking Ahead</H2>

            <p>
              I'm heading back to school with a much sharper sense of what kind
              of engineer I want to be, someone who's technically strong but
              also knows how to communicate clearly, collaborate across teams,
              and stay adaptable when plans shift. Grateful to my manager
              Akshay, the Compute COGs team, and everyone at Microsoft who made
              this summer what it was.
            </p>
          </div>
        </div>
      </Main>
    </>
  );
}
