import type { Metadata } from "next";
import { H1 } from "@/components/Headings";
import InlineLink from "@/components/InlineLink";
import { Ul, Li } from "@/components/List";

export const metadata: Metadata = {
  title: "Featured Projects",
  description:
    "The projects I've had the pleasure of working on over the years.",
};

export default function Projects() {
  return (
    <div className="space-y-4">
      <H1>Featured Projects</H1>
      <div className="mt-8 mb-4">
        <h2 className="text-xl font-semibold">
          <InlineLink href="https://github.com/jknate/distributed-cache">
            Distributed Cache
          </InlineLink>
        </h2>
        <div className="mb-2 text-sm text-neutral-600">
          Go, Docker, NGINX | Aug 2025 - Sep 2025
        </div>
      </div>
      <Ul>
        <Li>
          Implemented a multi-node in-memory cache in Go with LRU eviction, TTL
          expiration, and consistent hashing for efficient key distribution.
        </Li>
        <Li>
          Integrated an NGINX load balancer to route requests, ensuring
          scalability and single-entry access while supporting node forwarding.
        </Li>
        <Li>
          Exposed HTTP API endpoints, containerized nodes with Docker, and
          tested with Postman, demonstrating practical deployment and
          distributed systems skills.
        </Li>
      </Ul>

      <div className="mt-16 mb-4">
        <h2 className="text-xl font-semibold">
          <InlineLink href="https://github.com/jknate/audio-transcribe">
            Audio to Text Converter
          </InlineLink>
        </h2>
        <div className="mb-2 text-sm text-neutral-600">
          Spring Boot, Spring AI, React | Nov 2024 - Dec 2024
        </div>
      </div>
      <Ul>
        <Li>
          Developed an application to convert audio files into accurate and
          readable text using ChatGPT API integrated via Spring AI.
        </Li>
        <Li>
          Built a robust back-end with Spring Boot to process audio input and
          manage text outputs.
        </Li>
        <Li>
          Implemented a user-friendly React-based front-end for uploading audio
          file and viewing transcriptions.
        </Li>
        <Li>
          Utilized Axios to send requests to REST APIs for efficient file upload
          operations, enabling smooth communication between front-end and
          back-end services.
        </Li>
      </Ul>
    </div>
  );
}
