import Container from "../components/container";
import Explanation from "../components/explanation";
import PDF from "../components/PDF";
import Title from "../components/title";

const title = "Demons of Analogy";

export default function DemonsOfAnalogy({}) {
  return (
    <>
      <Title
        title={title}
        background="/img/demons-of-analogy_cover.webp"
      ></Title>
      <Container>
        <Explanation>
          <i>Demons of Analogy</i> is my undergraduate Honors thesis, and was
          awarded Highest Honors from the Oberlin College Comparative Literature
          department. The thesis explores the overlaps and contradictions
          between poetry and sound using the lens of static and interference. I
          draw from the work of Michel Serres, especially his book "Parasite,"
          to connect French Symbolist Stéphane Mallarmé to the music of Pierre
          Boulez, eventually arriving at contemporary avant-garde artists such
          as Georges Aperghis and O(rphan)d(rift&gt;). I consider how a musical
          poetics can speak to poetic music, and how the two can merge.{" "}
        </Explanation>
        <PDF src="/doc/demons-of-analogy.pdf"></PDF>
      </Container>
    </>
  );
}
