import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "317 feathers (the myth of icarus)";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Container>
        <Title>317 feathers (the myth of icarus)</Title>
        <audio controls className="w-full" src="/snd/317-feathers.mp3"></audio>
        <iframe
          src="/doc/317-feathers.pdf"
          className="h-viewer w-full mt-4"
        ></iframe>
        <BackButton title={title} />
      </Container>
    </Page>
  );
}
