import { H1 } from "@/components/Headings";
import { Ul, Li } from "@/components/List";

export default function RecentlyEnjoyed() {
  return (
    <div className="space-y-8">
      <H1>Recently Enjoyed</H1>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Albums</h2>
        <Ul>
          <Li>
            <a
              href="https://tidal.com/browse/album/1192322/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Waltz For Debby - Bill Evans
            </a>
          </Li>
          <Li>
            <a
              href="https://tidal.com/browse/album/618221"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Mama's Gun - Erykah Badu
            </a>
          </Li>
          <Li>
            <a
              href="https://tidal.com/browse/album/15180964"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              I Am - Earth, Wind & Fire
            </a>
          </Li>
        </Ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Films</h2>
        <Ul>
          <Li>
            <a
              href="https://letterboxd.com/film/no-other-choice-2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              No Other Choice (2025) - Park Chan-wook
            </a>
          </Li>
          <Li>
            <a
              href="https://letterboxd.com/film/sing-sing-2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Sing Sing (2023) - Greg Kwedar
            </a>
          </Li>
          <Li>
            <a
              href="https://letterboxd.com/film/phantom-thread/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Phantom Thread (2017) - Paul Thomas Anderson
            </a>
          </Li>
        </Ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Books</h2>
        <Ul>
          <Li>
            <a
              href="https://www.goodreads.com/book/show/18490.Frankenstein"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Frankenstein - Mary Shelley
            </a>
          </Li>
          <Li>
            <a
              href="https://www.goodreads.com/book/show/2767793-the-hero-of-ages"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              The Hero of Ages - Brandon Sanderson
            </a>
          </Li>
          <Li>
            <a
              href="https://www.goodreads.com/book/show/41886271-the-sword-of-kaigen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              The Sword of Kaigen - M.L. Wang
            </a>
          </Li>
        </Ul>
      </section>
    </div>
  );
}
