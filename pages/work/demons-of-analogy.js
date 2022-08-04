import BackButton from "../../components/BackButton";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "Demons of Analogy";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Title>{title}</Title>
      <iframe
        src="/doc/demons-of-analogy.pdf"
        className="h-viewer w-full"
      ></iframe>
      <BackButton title={title}></BackButton>
    </Page>
  );
}
