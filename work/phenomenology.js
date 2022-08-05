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

      <audio controls className="w-full" src="/snd/phenomenology.mp3"></audio>
      <PDF src="/doc/phenomenology.pdf"></PDF>
    </>
  );
}
