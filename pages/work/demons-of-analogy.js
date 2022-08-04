import BackButton from "../../components/BackButton";
import Page from "../../components/page";
import PDF from "../../components/PDF";
import Title from "../../components/title";

const title = "Demons of Analogy";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Title
        title={title}
        background="/img/demons-of-analogy_cover.png"
      ></Title>
      <PDF dark src="/doc/demons-of-analogy.pdf"></PDF>
      <BackButton title={title}></BackButton>
    </Page>
  );
}
