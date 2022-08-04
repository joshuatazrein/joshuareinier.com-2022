import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "production of meanings";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Title
        title={title}
        background="/img/production-of-meanings_cover.png"
      ></Title>
      <Container>
        <audio
          controls
          className="w-full mt-4"
          src="/snd/production-of-meanings.mp3"
        ></audio>
        <BackButton title={title}></BackButton>
      </Container>
    </Page>
  );
}
