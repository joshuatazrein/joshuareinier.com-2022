import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import PDF from "../../components/PDF";
import Title from "../../components/title";

const title = "spring";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Title title={title} background="/img/spring_cover.webp"></Title>

      <audio controls className="w-full" src="/snd/spring.mp3"></audio>
      <PDF src="/doc/spring.pdf"></PDF>
    </Page>
  );
}
