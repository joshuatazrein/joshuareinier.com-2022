import PDF from "../components/PDF";
import Title from "../components/title";
import Container from "../components/container";

const title = "317 feathers (the myth of icarus)";

export default function Feathers({}) {
  return (
    <>
      <Title title={title} background="/img/317-feathers_cover.webp"></Title>
      <Container>
        <audio controls className="w-full" src="/snd/317-feathers.mp3"></audio>
        <PDF src="/doc/317-feathers.pdf"></PDF>
      </Container>
    </>
  );
}
