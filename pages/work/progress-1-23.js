import { createRef, useEffect } from "react";
import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

export default function ThisPage({}) {
  const progress = createRef();
  useEffect(() => {
    $(progress.current).load("/html/progress.html");
  });
  const title = "Progress 1-23";

  return (
    <Page title={title}>
      <Title title={title} background="/img/progress_cover.png"></Title>
      <Container>
        <Explanation>
          <i>Progress 1-23</i> spirals between time-scales, traversing illusion
          and disillusionment, the momentary bolt of creative inspiration, eons
          of evolution, the literary canon, the simulations of late capitalism,
          and just trying to grow up. The poems write themselves as they are
          read, twisting around wordplay and association, tracking movements of
          mind. Although the numbers line up to years of my life, it is a
          non-autobiography, stretching and compressing the aging process in a
          fractal of time.
        </Explanation>
        <div className="writing" ref={progress}></div>
        <BackButton title={title}></BackButton>
      </Container>
    </Page>
  );
}
