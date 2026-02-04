import { H1 } from "@/components/Headings";
import { Ul, Li } from "@/components/List";

export default function RecentlyEnjoyed() {
  return (
    <div className="space-y-8">
      <H1>Recently Enjoyed</H1>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Albums</h2>
        <Ul>
          <Li>Waltz For Debby - Bill Evans</Li>
          <Li>Mama's Gun - Erykah Badu</Li>
          <Li>I Am - Earth, Wind & Fire</Li>
        </Ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Films</h2>
        <Ul>
          <Li>No Other Choice (2025) - Park Chan-wook</Li>
          <Li>Sing Sing (2023) - Greg Kwedar</Li>
          <Li>Phantom Thread (2017) - Paul Thomas Anderson</Li>
        </Ul>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Books</h2>
        <Ul>
          <Li>Frankenstein - Mary Shelley</Li>
          <Li>The Hero of Ages - Brandon Sanderson</Li>
          <Li>The Sword of Kaigen - M.L. Wang</Li>
        </Ul>
      </section>
    </div>
  );
}
