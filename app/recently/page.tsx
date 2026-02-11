export default function RecentlyEnjoyed() {
  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-2 text-base font-semibold">Reading</h2>
        <div className="space-y-1">
          <div>
            Mary Shelley{" "}
            <a href="https://www.goodreads.com/book/show/18490.Frankenstein" target="_blank" rel="noopener noreferrer" className="link">
              Frankenstein
            </a>
          </div>
          <div>
            Brandon Sanderson{" "}
            <a href="https://www.goodreads.com/book/show/2767793-the-hero-of-ages" target="_blank" rel="noopener noreferrer" className="link">
              The Hero of Ages
            </a>
          </div>
          <div>
            M.L. Wang{" "}
            <a href="https://www.goodreads.com/book/show/41886271-the-sword-of-kaigen" target="_blank" rel="noopener noreferrer" className="link">
              The Sword of Kaigen
            </a>
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-base font-semibold">Listening</h2>
        <div className="space-y-1">
          <div>
            Bill Evans{" "}
            <a href="https://tidal.com/browse/album/1192322/" target="_blank" rel="noopener noreferrer" className="link">
              Waltz For Debby
            </a>
          </div>
          <div>
            Erykah Badu{" "}
            <a href="https://tidal.com/browse/album/618221" target="_blank" rel="noopener noreferrer" className="link">
              Mama&apos;s Gun
            </a>
          </div>
          <div>
            Earth, Wind &amp; Fire{" "}
            <a href="https://tidal.com/browse/album/15180964" target="_blank" rel="noopener noreferrer" className="link">
              I Am
            </a>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-2 text-base font-semibold">Watching</h2>
        <div className="space-y-1">
          <div>
            Park Chan-wook{" "}
            <a href="https://letterboxd.com/film/no-other-choice-2025/" target="_blank" rel="noopener noreferrer" className="link">
              No Other Choice (2025)
            </a>
          </div>
          <div>
            Greg Kwedar{" "}
            <a href="https://letterboxd.com/film/sing-sing-2023/" target="_blank" rel="noopener noreferrer" className="link">
              Sing Sing (2023)
            </a>
          </div>
          <div>
            Paul Thomas Anderson{" "}
            <a href="https://letterboxd.com/film/phantom-thread/" target="_blank" rel="noopener noreferrer" className="link">
              Phantom Thread (2017)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
