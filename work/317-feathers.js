import PDF from "../components/PDF";
import Title from "../components/title";
import Container from "../components/container";
import Explanation from "../components/explanation";
import AudioPlayer from "../components/AudioPlayer";

const title = "317 feathers (the myth of icarus)";

export default function Feathers({}) {
  return (
    <>
      <Title title={title} background="/img/317-feathers_cover.webp"></Title>
      <Container>
        <Explanation>
          The two guitars in this piece—one acoustic, one electric—act like
          asymmetrical wings for the voice, which careens through a form based
          on imperfect symmetries. The original poem consists of one stanza of
          one line of one word, then two stanzas of two lines of two words,
          increasing in this pattern up to five before returning back to one.
          This illustrates the text, which traces a passage from stillness to
          twisted flight before careening back to earth.
        </Explanation>
        <AudioPlayer
          controls
          className="w-full"
          src="/snd/317-feathers.mp3"
        ></AudioPlayer>
        <PDF src="/doc/317-feathers.pdf"></PDF>
      </Container>
    </>
  );
}
