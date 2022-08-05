import Container from "../components/container";
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
        <PDF src="/doc/demons-of-analogy.pdf"></PDF>
      </Container>
    </>
  );
}
