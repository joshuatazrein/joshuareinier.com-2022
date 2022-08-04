import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "Phenomenology";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Container>
        <Title>{title}</Title>
        <audio controls className="w-full" src="/snd/phenomenology.mp3"></audio>
        <iframe
          src="/doc/phenomenology.pdf"
          className="h-viewer w-full mt-4"
        ></iframe>
        <BackButton title={title}></BackButton>
      </Container>
    </Page>
  );
}
