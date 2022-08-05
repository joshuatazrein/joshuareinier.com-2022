import Title from "../components/title";
import Container from "../components/container";
import Explanation from "../components/explanation";

const title = "a max patch i made in 2020";

export default function AMaxPatch({}) {
  return (
    <>
      <Title title={title}></Title>
      <Container>
        <Explanation>
          I produced this piece for a remote music technology class during the
          COVID lockdown. In it, I introduce the piece for the duration of the
          piece, processing the Zoom audio to progressively glitch and distort
          the voice until it is intelligible. The piece slowly transforms the
          speaking voice into a computer-generated sawtooth wave, and then a
          spasming MIDI electric bass, becoming a cyborg speaker—or maybe it was
          just Zoom glitching out all along—or maybe that's just my voice.
        </Explanation>
        <video
          src="/vid/a-max-patch-i-made-in-2020.mp4"
          controls
          width="100%"
        ></video>
      </Container>
    </>
  );
}
