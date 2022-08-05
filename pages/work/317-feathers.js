import SubPage from "../../components/SubPage";
import PDF from "../../components/PDF";
import Title from "../../components/title";

const title = "317 feathers (the myth of icarus)";

export default function ThisPage({}) {
  return (
    <SubPage title={title}>
      <Title title={title} background="/img/317-feathers_cover.webp"></Title>

      <audio controls className="w-full" src="/snd/317-feathers.mp3"></audio>
      <PDF src="/doc/317-feathers.pdf"></PDF>
    </SubPage>
  );
}
