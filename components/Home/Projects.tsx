import Badge from "../Badge";
import { LinkExternal } from "../Links";

export default function Projects() {
  return (
    <dl className="list-container">
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">Featured Projects</h3>
      </dt>
      <dd className="list-content">
        <div className="flex flex-col gap-2">
          <LinkExternal href="https://github.com/jknate/distributed-cache">Distributed Cache</LinkExternal>
          <div className="flex flex-wrap gap-1">
            <Badge>Go</Badge>
            <Badge>Docker</Badge>
            <Badge>NGINX</Badge>
          </div>
          <p className="text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
            A multi-node in-memory cache in Go with LRU eviction, TTL expiration, and consistent hashing for efficient key distribution.
          </p>
        </div>
      </dd>
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark"></h3>
      </dt>
      <dd className="list-content">
        <div className="flex flex-col gap-2">
          <LinkExternal href="https://github.com/jknate/audio-transcribe">Audio Transcribe</LinkExternal>
          <div className="flex flex-wrap gap-1">
            <Badge>Spring Boot</Badge>
            <Badge>React</Badge>
          </div>
          <p className="text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
            A full-stack AI-driven audio transcription application with a Spring backend and React/TypeScript frontend for converting audio files to text.
          </p>
        </div>
      </dd>
    </dl>
    
  );
}
