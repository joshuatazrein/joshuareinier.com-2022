import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import PDF from "../../components/PDF";
import Title from "../../components/title";

const title = "317 feathers (the myth of icarus)";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Title title={title} background="/img/317-feathers_cover.png"></Title>
      <Container>
        <audio controls className="w-full" src="/snd/317-feathers.mp3"></audio>
        <PDF src="/doc/317-feathers.pdf"></PDF>
        <BackButton title={title} />
      </Container>
    </Page>
  );
}
