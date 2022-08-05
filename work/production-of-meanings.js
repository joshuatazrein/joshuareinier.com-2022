import Container from "../components/container";
import Explanation from "../components/explanation";
import Heading from "../components/heading";
import Title from "../components/title";

const title = "production of meanings";

export default function ProductionOfMeanings({}) {
  return (
    <>
      <Title
        title={title}
        background="/img/production-of-meanings_cover.webp"
      ></Title>
      <Container>
        <audio
          controls
          className="w-full mt-4"
          src="/snd/production-of-meanings.mp3"
        ></audio>
      </Container>
    </>
  );
}
