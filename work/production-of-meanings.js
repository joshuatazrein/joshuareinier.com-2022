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
        <Explanation>
          This sound-text collects samples from typewriters, the spoken voice,
          and synthesizers to explore miscommunication. The amplified
          typewriters slowly morph into airplanes, then a beating rhythm, then a
          seeming battle. The second half of the piece is a mournful choir in
          which human voices transform into synthesizers and back, suggesting
          the level in which technology is integrated into how we communicate.
          What impacts does this have?{" "}
        </Explanation>
        <audio
          controls
          className="w-full mt-4"
          src="/snd/production-of-meanings.mp3"
        ></audio>
      </Container>
    </>
  );
}
