import Title from "../components/title";
import Container from "../components/container";
import Explanation from "../components/explanation";
import AudioPlayer from "../components/AudioPlayer";

const title = "iamb";

export default function Iamb({}) {
  return (
    <>
      <Title title={title}></Title>
      <Container>
        <Explanation>
          "iamb" is a visual poem with an audio reading that explores the
          process of sorting language into iambic meter. The piece works with
          two source phrases: "to be or not to be, that is the question," and "I
          think, therefore I am." Through distorting and layering these phrases
          through echoing, the piece undermines the declarative tone of their
          original iambic rhythm, instead exploring a liminal space of doubt and
          ambiguity. It's a "sound-non-sonnet," using sound and collage to
          dismantle the iamb and piece it back together in its chaotic moment of
          origination.
        </Explanation>
        <AudioPlayer
          controls
          className="w-full mb-2"
          src="/snd/iamb.mp3"
        ></AudioPlayer>
        <img src="/img/iamb.png" className="mb-2 rounded" />
      </Container>
    </>
  );
}
