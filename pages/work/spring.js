import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "spring";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Container>
        <Title>{title}</Title>
        <audio controls className="w-full" src="/snd/spring.mp3"></audio>
        <iframe src="/doc/spring.pdf" className="h-viewer w-full mt-4"></iframe>
        <BackButton title={title}></BackButton>
      </Container>
    </Page>
  );
}
