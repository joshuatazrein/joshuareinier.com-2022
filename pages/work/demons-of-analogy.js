import Container from "../../components/container";
import SubPage from "../../components/SubPage";
import PDF from "../../components/PDF";
import Title from "../../components/title";

const title = "Demons of Analogy";

export default function ThisPage({}) {
  return (
    <SubPage title={title}>
      <Title
        title={title}
        background="/img/demons-of-analogy_cover.webp"
      ></Title>
      <PDF src="/doc/demons-of-analogy.pdf"></PDF>
    </SubPage>
  );
}
