import Audio from "../components/Audio";
import Container from "../components/container";
import Explanation from "../components/explanation";
import Heading from "../components/heading";
import PDF from "../components/PDF";
import Title from "../components/title";

const title = "spring";

export default function Spring({}) {
  return (
    <>
      <Title title={title} background="/img/spring_cover.webp"></Title>
      <Container>
        <Explanation>
          The original text in this piece mixes German and English to create a
          fragmentary poetics, conjuring up the mad poet Hölderlin amidst images
          of death and renewal. The proportional score requires players to step
          around and over each other, holding the silences between events as
          integral to the progression of time. A vague serialism suspends the
          harmonic language, always alluding to tonality but receding back until
          the final duet between voice and cello, in which a twisted major scale
          emerges.
        </Explanation>
        <Audio controls className="w-full" src="/snd/spring.mp3"></Audio>
        <PDF src="/doc/spring.pdf"></PDF>
      </Container>
    </>
  );
}
