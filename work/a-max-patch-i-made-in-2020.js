import Title from "../components/title";
import Container from "../components/container";

const title = "a max patch i made in 2020";

export default function AMaxPatch({}) {
  return (
    <>
      <Title title={title}></Title>
      <Container>
        <video
          src="/vid/a-max-patch-i-made-in-2020.mp4"
          controls
          width="100%"
        ></video>
      </Container>
    </>
  );
}
