import Page from "../../components/page";
import Title from "../../components/title";
import Container from "../../components/container";
import Explanation from "../../components/explanation";

export default function ThisPage({}) {
  return (
    <Page>
      <Container>
        <Title>a max patch i made in 2020</Title>

        <video
          src="/vid/a-max-patch-i-made-in-2020.mp4"
          controls
          width="100%"
        ></video>
      </Container>
    </Page>
  );
}
