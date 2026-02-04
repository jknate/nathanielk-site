import { PostHeader } from "@/components/PostHeader";
import BlogJsonLd from "@/components/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import { H2, H3 } from "@/components/Headings";
import InlineLink from "@/components/InlineLink";
import { Ul, Ol, Li } from "@/components/List";
import { BlockCode, InlineCode } from "@/components/Code";

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
          I've been wanting to build a personal website for a while now, but
          honestly, I kept putting it off. Not because it's hard, there are a
          million ways to spin up a site in 2026, but because I wanted to
          utilize it as a project to work with new technologies. I could've used
          Vercel or Netlify and had something live in ten minutes, but where's
          the learning in that? I wanted to work with AWS infrastructure
          directly.
        </p>

        <H2>Why This Stack?</H2>

        <p>
          The technical choices were pretty deliberate. I went with Next.js for
          static site generation because it gives me flexibility down the road—I
          can add dynamic features later if I want, but for now, I'm just
          exporting static HTML. The simplicity of a static site means I can
          focus on infrastructure instead of worrying about server-side
          rendering or API routes.
        </p>

        <p>
          For hosting, I wanted the full AWS experience: S3 for storage,
          CloudFront as my CDN, Route 53 for DNS, and ACM for TLS certificates.
          Could I have used a simpler setup? Absolutely. But I'm interested in
          distributed systems, and there's no better way to understand edge
          computing and content delivery networks than to actually build with
          them.
        </p>

        <H2>The Setup</H2>

        <p>The architecture is straightforward:</p>

        <Ul>
          <Li>
            <strong>Next.js</strong> builds the site into static HTML/CSS/JS
          </Li>
          <Li>
            <strong>S3 bucket</strong> stores everything
          </Li>
          <Li>
            <strong>CloudFront distribution</strong> sits in front of S3,
            handling TLS and caching at edge locations worldwide
          </Li>
          <Li>
            <strong>Route 53</strong> manages DNS with alias records pointing to
            CloudFront
          </Li>
          <Li>
            <strong>ACM certificate</strong> provides TLS, with DNS validation
            through Route 53
          </Li>
          <Li>
            <strong>GitHub Actions</strong> automates the entire deployment
            pipeline
          </Li>
        </Ul>

        <p>
          The interesting part is how these pieces interact. When someone visits{" "}
          <InlineCode code="nathanielk.dev" />, DNS resolves to the nearest
          CloudFront edge location (there are over 400 globally), which either
          serves cached content or fetches from S3 in{" "}
          <InlineCode code="us-east-1" />. The certificate negotiation happens
          at the edge too, which is why certificate management in CloudFront is
          so critical.
        </p>
        <H2>Performance Metrics</H2>

        <p>
          One thing I wanted to optimize for was speed. Static sites are
          inherently fast, no database queries, no server-side rendering, just
          files being served. But the CDN layer adds another dimension. Here's
          what Google PageSpeed Insights shows:
        </p>

        <div className="not-prose my-8 rounded-lg border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6">
          <div className="mb-6 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">100</div>
              <div className="text-sm font-medium text-gray-700">
                Performance
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">95</div>
              <div className="text-sm font-medium text-gray-700">
                Accessibility
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">96</div>
              <div className="text-sm font-medium text-gray-700">
                Best Practices
              </div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">100</div>
              <div className="text-sm font-medium text-gray-700">SEO</div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2">
            <div className="flex items-center justify-between rounded bg-white p-3">
              <span className="text-gray-700">First Contentful Paint</span>
              <span className="font-bold text-green-600">0.2s</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white p-3">
              <span className="text-gray-700">Largest Contentful Paint</span>
              <span className="font-bold text-green-600">0.5s</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white p-3">
              <span className="text-gray-700">Total Blocking Time</span>
              <span className="font-bold text-green-600">0ms</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white p-3">
              <span className="text-gray-700">Cumulative Layout Shift</span>
              <span className="font-bold text-green-600">0</span>
            </div>
            <div className="flex items-center justify-between rounded bg-white p-3 md:col-span-2">
              <span className="text-gray-700">Speed Index</span>
              <span className="font-bold text-green-600">0.5s</span>
            </div>
          </div>
        </div>

        <p>
          These numbers tell a story. The 100/100 performance score isn't just
          about having a fast site, it's about CloudFront doing its job. That
          0.5s Largest Contentful Paint means the main content appears in half a
          second, and the zero Cumulative Layout Shift means the page doesn't
          jump around while loading. The zero Total Blocking Time is
          particularly satisfying, there's no JavaScript execution blocking the
          main thread.
        </p>

        <p>
          I set up differential caching policies to achieve this: static assets
          (JS, CSS, images) get a one-year cache with <code>immutable</code>{" "}
          flags, while HTML files have <code>max-age=0, must-revalidate</code>{" "}
          to ensure content updates appear immediately. CloudFront's edge
          locations cache the static assets aggressively, which is why repeat
          visits are nearly instantaneous.
        </p>

        <H2>The Challenges</H2>

        <p>And now for the fun part: what actually broke.</p>

        <H3>The Great Certificate Mystery</H3>

        <p>
          The site was working perfectly one night. The next morning? Connection
          resets on every request to the custom domain, while the CloudFront
          default domain (<InlineCode code="d30fy7y20tn0d0.cloudfront.net" />)
          worked fine. DNS was correct. The certificate was issued and attached.
          Everything <em>looked</em> right.
        </p>

        <p>
          After hours of debugging, the issue turned out to be CloudFront's
          certificate routing. When I tested with{" "}
          <InlineCode code='curl -H "Host: nathanielk.dev" https://d30fy7y20tn0d0.cloudfront.net' />
          , it worked, proving the origin and certificate were fine. But
          CloudFront was serving its default wildcard certificate (
          <InlineCode code="*.cloudfront.net" />) instead of my custom ACM
          certificate when requests came in via the custom domain. Browsers
          rejected the cert mismatch and reset the connection.
        </p>

        <p>
          The fix? Creating a completely new CloudFront distribution with a
          fresh wildcard certificate (<InlineCode code="*.nathanielk.dev" />
          ). Whatever state corruption existed in the original distribution's
          certificate bindings didn't survive the migration. It's a reminder
          that hidden states sometimes just need to be rebuilt from scratch
          (ideally not again).
        </p>

        <H3>Subdirectory Routing</H3>

        <p>
          Another challenge: <InlineCode code="/thoughts" /> and{" "}
          <InlineCode code="/experiences" /> returned 403 errors even though{" "}
          <InlineCode code="/thoughts/index.html" /> worked fine. S3 doesn't
          automatically serve <InlineCode code="index.html" /> for
          subdirectories like a traditional web server would.
        </p>

        <p>
          The solution was a CloudFront Function (not Lambda@Edge, those are
          overkill for simple request rewriting). The function intercepts viewer
          requests and rewrites URIs:
        </p>

        <BlockCode
          code={`function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    } else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }
    
    return request;
}`}
          meta="javascript"
        />

        <p>
          This runs at CloudFront edge locations, so there's no latency penalty,
          it's just modifying the request before it hits S3.
        </p>

        <H2>What I Learned About Edge Computing</H2>

        <p>
          Working directly with CloudFront gave me a much better intuition for
          how CDNs actually work. It's easy to think of edge locations as just
          "fast caches," but there's more going on:
        </p>

        <Ol>
          <Li>
            <strong>TLS termination at the edge</strong> means certificate
            configuration is critical, one wrong setting and traffic fails
            before it even reaches your origin.
          </Li>
          <Li>
            <strong>Cache invalidations propagate asynchronously</strong>, which
            is why you see <InlineCode code="X-Cache: Miss from cloudfront" />{" "}
            immediately after invalidating, then{" "}
            <InlineCode code="Hit from cloudfront" /> once the edge refetches.
          </Li>
          <Li>
            <strong>Edge functions</strong> (CloudFront Functions) let you
            customize behavior without touching your origin, which is incredibly
            powerful for things like auth, redirects, or request rewriting.
          </Li>
        </Ol>

        <p>
          This maps directly to distributed systems concepts I've been reading
          about, eventual consistency, edge computing trade-offs, and the
          complexity of managing state across hundreds of geographically
          distributed nodes.
        </p>

        <H2>The Deployment Pipeline</H2>

        <p>
          I wanted continuous deployment from the start, so I set up GitHub
          Actions to handle the entire flow:
        </p>

        <Ol>
          <Li>
            Push to <InlineCode code="main" /> triggers the workflow
          </Li>
          <Li>Next.js builds the static site</Li>
          <Li>AWS CLI syncs to S3 with appropriate cache headers</Li>
          <Li>CloudFront cache gets invalidated</Li>
          <Li>Changes are live globally within 2-3 minutes</Li>
        </Ol>

        <p>
          The workflow differentiates between static assets and HTML, applying
          long cache times to assets and short times to HTML. This means I can
          iterate quickly on content while keeping the performance benefits of
          aggressive caching for code and images.
        </p>

        <H2>What's Next</H2>

        <p>
          There's a lot more I want to explore here. I'm particularly interested
          in:
        </p>

        <Ul>
          <Li>
            <strong>Edge compute patterns</strong>: CloudFront Functions are
            limited to simple request/response manipulation, but Lambda@Edge
            opens up more possibilities, authentication, dynamic content
            generation, A/B testing at the edge.
          </Li>
          <Li>
            <strong>Multi-region resilience</strong>: Right now my S3 bucket is
            in <InlineCode code="us-east-1" />. What happens if that region goes
            down? Setting up cross-region replication and failover would be a
            good exercise in building actually resilient distributed systems.
          </Li>
          <Li>
            <strong>Performance monitoring</strong>: I want to instrument this
            with CloudWatch metrics and Real User Monitoring to see actual
            performance characteristics across different geographies.
          </Li>
        </Ul>

        <p>
          The goal isn't just to have a website, it's to have a playground for
          experimenting with distributed systems concepts in a real production
          environment. And honestly, debugging that CloudFront certificate issue
          taught me more about CDN internals than any documentation could have.
        </p>

        <p>
          If you're interested in the code, everything is{" "}
          <InlineLink href="https://github.com/jknate/nathanielk-site">
            on GitHub
          </InlineLink>
          . And if you're building something similar and hit weird CloudFront
          issues, feel free to reach out, I've probably already fought that
          battle.
        </p>
      </div>
    </>
  );
}
