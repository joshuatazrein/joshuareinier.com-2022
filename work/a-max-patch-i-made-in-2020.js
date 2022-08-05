import Title from "../components/title";

const title = "a max patch i made in 2020";

export default function AMaxPatch({}) {
  return (
    <>
      <Title title={title}></Title>

      <video
        src="/vid/a-max-patch-i-made-in-2020.mp4"
        controls
        width="100%"
      ></video>
    </>
  );
}
