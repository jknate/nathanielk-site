import Image from "next/image";

const books = [
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1665008650i/18490.jpg",
    url: "https://www.goodreads.com/book/show/18490.Frankenstein",
  },
  {
    title: "The Hero of Ages",
    author: "Brandon Sanderson",
    cover:
      "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1628563911i/2767793.jpg",
    url: "https://www.goodreads.com/book/show/2767793-the-hero-of-ages",
  },
];

export default function Reading() {
  return (
    <dl className="list-container">
      <dt className="list-title">
        <h3 className="text-neutral-500 dark:text-silver-dark">Reading</h3>
      </dt>
      <dd className="list-content grid gap-4 sm:gap-6">
        {books.map(({ title, author, cover, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 min-w-0"
          >
            <div className="relative flex-shrink-0 origin-center drop-shadow-md transition-transform group-hover:scale-110">
              <Image
                src={cover}
                alt={`${title} by ${author}`}
                width={56}
                height={80}
                className="rounded-l-sm rounded-r bg-gray-200 dark:bg-zinc-600"
              />
            </div>
            <div className="min-w-0 flex-1 flex flex-col overflow-hidden transition-transform group-hover:translate-x-0.5">
              <div className="truncate">{title}</div>
              <div className="truncate text-sm text-neutral-500 [font-variation-settings:'opsz'_14] dark:text-silver-dark">
                {author}
              </div>
            </div>
          </a>
        ))}
      </dd>
    </dl>
  );
}
