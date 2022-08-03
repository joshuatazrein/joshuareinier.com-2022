import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

export default function ThisPage({}) {
  console.log();
  return (
    <Page>
      <Title>What I've Done</Title>

      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/lnE9lyYIAZg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        autoplay
      ></iframe>
      <Explanation>
        <i>What I've Done</i> is equal parts a satirical surrealist free-jazz
        meta-monologue, an existential crisis, and a bit of good fun. The
        musicians play from doodles scrawled around the written text,
        encouraging them to negotiate a semantic, cartoony chaos to turn the
        doodles into sound. The piece folds in on itself in multiple levels: the
        speaker's internal, bottled-up overflowing pressure-cooker of meaning,
        then the competition between the speaker as bandleader and the band, and
        finally the tension between speaker and audience. Meanwhile, there's a
        fourth tension of me, who is writing this program note, and me, who was
        filmed in the video and wrote the piece as well as performing it. Oh,
        what have I done.
      </Explanation>
      <Explanation>
        Sam Blieden produced &amp; directed the video, with support from Henry
        Nelson &amp; Will Curry. The band is the Self-Prescribing Doctors Union,
        comprised of Henry Nelson (guitar), Will Curry (saxophone), Owen Frankel
        (bass), and Jeremy McCabe (drums). Truly, this piece is what all of them
        have done to bring this idea to fruition.
      </Explanation>
      <Heading>Score</Heading>
      <iframe src="/doc/what-ive-done.pdf" className="h-viewer w-full"></iframe>
    </Page>
  );
}
