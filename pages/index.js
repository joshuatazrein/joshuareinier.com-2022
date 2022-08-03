import Section from "../components/section";
import Page from "../components/page";
import Subtitle from "../components/subtitle";
import Explanation from "../components/explanation";
import Heading from "../components/heading";
import { createRef, useEffect, useState } from "react";

function HomeHeadline() {
  const textList = [
    "I THINK",
    "I HAVE AN IDEA",
    "SOMETHING TO WRITE",
    "A POEM",
    "SOME WORDS OF",
    "MY CREATION",
  ];
  const text = "";
  let phraseIndex = 0;
  let charIndex = 0;
  const writeTime = 100;
  const waitTime = 500;
  const deleteTime = 40;
  const heading = createRef();

  const deleteLetter = () => {
    text = text.slice(0, text.length - 1);
    if (text === "") {
      charIndex = 0;
      phraseIndex++;
      if (phraseIndex === textList.length) {
        phraseIndex = 0;
      }
      setTimeout(writeLetter, writeTime);
    } else {
      setTimeout(deleteLetter, deleteTime);
    }
    $(heading.current).text(text);
  };

  const writeLetter = () => {
    console.log(text);
    text += textList[phraseIndex][charIndex];
    charIndex++;
    if (charIndex === textList[phraseIndex].length) {
      setTimeout(deleteLetter, waitTime);
    } else {
      setTimeout(writeLetter, writeTime);
    }
    $(heading.current).text(text);
  };

  useEffect(() => {
    setTimeout(writeLetter, writeTime);
  }, []);

  return (
    <div className="absolute top-3/4 w-full flex justify-end">
      <h1
        className="font-mono text-shadow"
        style={{
          fontSize: "5vw",
        }}
        ref={heading}
      ></h1>
      <div className="basis-1/5 shrink"></div>
    </div>
  );
}

export default function Home({}) {
  return (
    <>
      <Page noPadding>
        <div className="w-screen h-viewer relative">
          <img
            src="/img/home_cover.png"
            className="w-full h-full object-cover z-0"
          ></img>
          <HomeHeadline />
        </div>
        <Section
          link="/works/rain/index.html"
          linkA={true}
          background="/vid/rain_cover.mp4"
        >
          <Heading>rain</Heading>
          <Subtitle>a kinetic digital poem</Subtitle>
        </Section>
        <Section
          link="/work/what-ive-done"
          className="relative"
          linkText="watch"
          background="/vid/what-ive-done_excerpt.mp4"
        >
          <Heading>What I've Done</Heading>
          <Subtitle>It's what I've done.</Subtitle>
        </Section>
        <Section
          link="/work/demons-of-analogy"
          background="/img/demons-analogy_cover.png"
        >
          <Heading>Demons of Analogy</Heading>
          <Subtitle>
            The Encounter Between Music and Language After Mallarmé
          </Subtitle>
          <Explanation>
            Why do we make analogies? The standard definition suggests “[a]
            comparison between two things, typically for the purpose of
            explanation or clarification” (Oxford Languages); an analogy is when
            something borrows another vocabulary, another set of terms, or
            another paradigm, to facilitate a deeper understanding. But here, I
            argue that analogy is more than a didactic tool for making
            explanations more convenient: rather, analogy is the essential way
            that we understand ourselves in relation to others—for my purposes,
            how artists understand their own medium in relation to other
            mediums. Specifically, I use the concept of analogy to explore the
            encounter between music and language; I take as my starting point
            the French Symbolist poet Stéphane Mallarmé, one of the major poets
            in France at the time of his death in 1898, with a legacy which
            resonates today in poststructuralism and experimental poetry.
            Mallarmé interests me because he exemplifies an analogical approach
            to understanding poetry: in order to articulate his poetics,
            Mallarmé found inspiration in a diverse array of mediums from dance
            to mime to acting, and most importantly, in music.
          </Explanation>
        </Section>
        <Section
          link="/works/AM/index.html"
          linkA={true}
          background="/vid/am_cover.mp4"
        >
          <Heading>AM</Heading>
          <Subtitle>the static of being</Subtitle>
        </Section>
        <Section
          link="/works/hauntings/index.html"
          linkA={true}
          background="/img/hauntings-cover.png"
        >
          <Heading>hauntings</Heading>
          <Subtitle class="absolute top-4">
            an argument of ghosts, trapped in a webpage
          </Subtitle>
        </Section>
        <Section
          link="/work/progress-1-23"
          background="/img/progress_cover.png"
        >
          <Heading>Progress 1-23</Heading>
          <Subtitle>
            poem sequence that spirals between growing up, evolution, and the
            creative process
          </Subtitle>
          <Explanation>
            <p className="writing">
              Mysticism is overrated. you go <br />
              &emsp;&emsp;&emsp;&emsp;through it,
              <br />
              and then your hair is dyed red.
              <br />
              <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;i wake up every day
              <br />
              &emsp;&emsp;&emsp;&emsp;&amp; brush your hair in front of your
              eyes,
              <br />
              &emsp;&emsp;so as not to wake you. Plato put us in the cave
              <br />
              <br />
              &amp; we became grapefruit-skulled exotica,
              <br />
              &emsp;&emsp;skulls destined for a museum
              <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(but it's better than for the
              dust again):
              <br />
              <br />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              as Gen 3:19 or something like that, would say. <br />
            </p>
          </Explanation>
        </Section>
        <Section
          link="/work/slowing-song"
          background="/img/slowing-song_cover.png"
          linkText="listen"
        >
          <Heading>slowing song</Heading>
          <Subtitle>
            for chamber orchestra and 3 voices: the gradual decomposition of "to
            breathe"
          </Subtitle>
          <audio
            src="/snd/slowing-song.mp3"
            controls
            className="w-full mt-4"
          ></audio>
        </Section>
        <Section
          link="https://mackseyjournal.scholasticahq.com/article/21771"
          linkA
          background="/img/reclaiming-space_cover.png"
        >
          <Heading>Reclaiming Space</Heading>
          <Subtitle>
            Feminist Hysteria in Cixous and Clément, Gilman, and Ferrante
          </Subtitle>
          <Explanation>
            In this paper, I explore the concept of “hysteria” as it is
            reclaimed by the feminist thinkers/authors Hélène Cixous and
            Catherine Clément, Charlotte Perkins Gilman, and Elena Ferrante. I
            begin with a brief overview of the historical connotations of
            hysteria, showing how the metaphor of hysteria mythologized a
            patriarchal notion of femininity before being re-mythologized for
            feminism. I then investigate how Gilman and Ferrante have situated
            themselves within this myth, using The Newly Born Woman by Cixous
            and Clément to contextualize Gilman’s "The Yellow Wall-Paper” and
            Ferrante's first two novels, Troubling Love and The Days of
            Abandonment. I identify a similar process used by both Gilman and
            Ferrante in which the female protagonist reinvents herself as a
            “newly born woman,” which I outline in three stages. First, the
            subject somatizes patriarchy, percieving it with spatial metaphors
            and thus representing it in a nonverbal, non-rational way. Second,
            she encodes a hallucination of oppressed femininity within the
            patriarchal space, exploring her oppression and potential liberation
            through a progressively more real “alter ego.” This culminates in
            the protagonist blending her physical self with her hallucinated
            alter ego, claiming a new agency just as she appears to be claimed
            by hysteria. My analysis shows how hysteria has been repurposed by
            these feminist authors/thinkers as a foil for patriarchal, rational,
            and phallogocentric structures of thought.
          </Explanation>
        </Section>
        <Section
          link="https://probablevoltages.bandcamp.com/album/the-self-prescribing-doctors-union"
          linkA={true}
          background="/img/self-prescribing-doctors_cover.jpg"
          linkText="listen"
        >
          <Heading>The Self-Prescribing Doctors Union</Heading>
          <Subtitle>Jazz-folk-free-noise quintet</Subtitle>
          <iframe
            style={{ border: 0, width: "100%", height: 120 }}
            className="mt-3"
            src="https://bandcamp.com/EmbeddedPlayer/album=1386217721/size=large/bgcol=000000/linkcol=63b2cc/tracklist=false/artwork=none/transparent=true/"
            seamless
          >
            <a href="https://probablevoltages.bandcamp.com/album/the-self-prescribing-doctors-union">
              The Self-Prescribing Doctor&#39;s Union by The Self-Prescribing
              Doctor&#39;s Union
            </a>
          </iframe>
        </Section>
      </Page>
    </>
  );
}
