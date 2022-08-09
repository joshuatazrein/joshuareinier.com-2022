import Audio from "../components/Audio";
import Container from "../components/container";
import Explanation from "../components/explanation";
import Heading from "../components/heading";
import PDF from "../components/PDF";
import Title from "../components/title";

const title = "Phenomenology";

export default function Phenomenology({}) {
  return (
    <>
      <Title title={title} background="/img/phenomenology_cover.webp"></Title>
      <Container>
        <Explanation>
          Voice and cello are superimposed in this piece, whose original text
          explores the process of sight and perception while fading between
          dream and waking. The rhythmic shadowing between the players creates a
          double-vision, accentuating the points in which they fail to perfectly
          line up. The use of Sprechgesang makes this piece both formal and
          conversational.
        </Explanation>
        <Audio controls className="w-full" src="/snd/phenomenology.mp3"></Audio>
        <PDF src="/doc/phenomenology.pdf"></PDF>
      </Container>
    </>
  );
}
