export function InlineCode({ code }: { code: string }) {
  return (
    <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm dark:bg-neutral-800">
      {code}
    </code>
  );
}

export function BlockCode({ code }: { code: string; meta?: string }) {
  return (
    <pre className="my-4 overflow-x-auto rounded-lg bg-neutral-100 p-4 dark:bg-neutral-800">
      <code className="font-mono text-sm text-neutral-800 dark:text-neutral-200">
        {code}
      </code>
    </pre>
  );
}
