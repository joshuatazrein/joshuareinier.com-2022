import Section from "../components/section";
import Subtitle from "../components/subtitle";
import Explanation from "../components/explanation";
import Heading from "../components/heading";
import { useEffect, useRef, useState } from "react";
import url from "url";
import Head from "next/head";
import dynamic from "next/dynamic";
import $ from "jquery";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AppContext from "../services/AppContext";

gsap.registerPlugin(ScrollTrigger);

const DynamicViewer = dynamic(() => import("../components/Viewer"), {
  loading: () => <div></div>,
});

export default function Home({}) {
  const [section, setSection] = useState("");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState("");
  const timeline = useRef();

  const sections = [];
  for (let i = 0; i < 21; i++) {
    sections.push(useRef());
  }

  const triggerFilter = (text) => {
    setFilter(text);
  };

  useEffect(() => {
    if (
      $(window).width() >= window.innerWidth ||
      window.matchMedia("(any-hover: none)").matches
    ) {
      $("body").addClass("snap-y snap-mandatory");
      alert("worked");
    } else {
      ScrollTrigger.create({
        snap: { snapTo: 1 / 21, duration: 0.3 },
      });
    }
  }, []);

  useEffect(() => {
    // freeze body scrolling on open of document
    if (open) {
      $("body").css("overflow-y", "hidden");
      console.log("open");
    } else if (menu) {
      $("body").css("overflow-y", "hidden");
    } else {
      if ($("body").css("overflow-y") !== "auto") {
        $("body").css("overflow-y", "auto");
      }
    }
  }, [open, menu]);

  useEffect(() => {
    if (filter) {
      $(window).scrollTop(window.innerHeight);
    }
  }, [filter]);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const openSection = (section) => {
    setSection(section);
    setOpen(true);
  };

  const closeSection = (section) => {
    setTimeout(() => setSection(""), 1000);
    setOpen(false);
  };

  useEffect(() => {
    // open location if it's in the url
    if (window.location.href.includes("section=")) {
      const sectionTitle = new URLSearchParams(
        url.parse(window.location.href).query
      ).get("section");
      console.log(sectionTitle);
      openSection(sectionTitle);
    }
  }, []);

  useEffect(() => {
    timeline.current = gsap.timeline();
  }, []);

  const context = { filter, search, openSection, timeline };

  return (
    <AppContext.Provider value={context}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Halant:wght@300;400;500;600;700&family=Josefin+Sans:ital,wght@0,300;0,500;1,300;1,500&display=swap"
          rel="stylesheet"
        />
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <title>Joshua Tazman Reinier</title>
        <link href="/img/favicon.png" rel="icon" />
      </Head>
      <div className="fixed bg-transparent border-white flex flex-row w-full items-center pt-2 z-40 justify-end h-[50px]">
        <div
          style={{ width: "250px", maxWidth: "50%" }}
          className={`d-flex items-center h-full ${
            !menu ? "dropdown-container cursor-pointer" : ""
          }`}
        >
          <img
            src="/img/logo.png"
            width="auto"
            height="100%"
            style={{
              filter:
                "drop-shadow(0px 0px 8px #000000) drop-shadow(0px 0px 4px #000000)",
            }}
          />
          <div className="dropdown top-0 right-0 bg-semiblack-500 rounded p-3">
            {/* <input
              className="bg-black rounded w-full mb-2 px-1"
              placeholder="search..."
              onChange={(ev) => {
                setSearch(ev.target.value);
              }}
              value={search}
            ></input> */}
            <p
              className="hover:text-sky-200 cursor-pointer"
              onClick={() => triggerFilter(false)}
            >
              all
            </p>
            <p
              className="hover:text-sky-200 cursor-pointer"
              onClick={() => triggerFilter("multimedia")}
            >
              multimedia
            </p>
            <p
              className="hover:text-sky-200 cursor-pointer"
              onClick={() => triggerFilter("text")}
            >
              text
            </p>
            <p
              className="hover:text-sky-200 cursor-pointer"
              onClick={() => triggerFilter("sound")}
            >
              sound
            </p>
            <p
              className="hover:text-sky-200 cursor-pointer"
              onClick={() => triggerFilter("theory")}
            >
              theory
            </p>
          </div>
        </div>
        <button
          className="border border-white rounded p-1 mx-1 bg-semiblack-500 z-40"
          onClick={toggleMenu}
        >
          <img
            src={menu ? "/icon/close.svg" : "/icon/menu.svg"}
            height={16}
            width={16}
            className="blue-filter"
          ></img>
        </button>
      </div>
      <div
        className={`fixed bg-semiblack-800 w-screen h-screen z-30 ${
          !menu ? "hidden" : ""
        } top-0 left-0 w-screen h-screen p-4 overflow-auto pt-14`}
        style={{ transition: "opacity 1s" }}
      >
        <p>
          <img
            src="/img/joshua-tazman.png"
            className="sm:float-right w-full sm:w-1/2 mb-1 mx-auto sm:mx-1 rounded-lg"
          />
          <a
            href="mailto:jreinier@oberlin.edu"
            className="font-[400] text-[4vh] text-center hover:text-sky-200 hover:cursor-pointer border rounded px-2 transition-colors block w-full sm:w-[48%] mb-1"
          >
            contact
          </a>
          A writer, composer, performer, and researcher, Joshua Tazman Reinier
          blends poetry, music, and multimedia into pieces that vibrate at the
          edges of language. Informed by a background in jazz and creative
          music, he often incorporates improvisation with graphic scores and
          other notational techniques. His accomplishments include What I’ve
          Done, a music-theater video piece shortlisted in the Cannes Indie
          Shorts Festival, and an XARTS grant from Oberlin College for{" "}
          <i>hauntings</i>, a web-based sound-poetry project. He studied
          Composition and Comparative Literature at Oberlin College and
          Conservatory, graduating with Highest Honors for his research
          exploring the connections between symbolist poetry, music-theater, and
          posthumanist philosophy.
        </p>
      </div>
      <div
        className="fixed top-0 w-screen h-screen z-50 bg-black rounded"
        style={
          open
            ? { left: 0, opacity: "1", transition: "opacity 1s, left 1s" }
            : {
                left: "100vw",
                opacity: "0",
                transition: "opacity 1s, left 1s",
              }
        }
      >
        <button
          className="absolute top-0 right-0 border border-white rounded p-1 m-1 sm:mr-3 sm:mt-1 bg-semiblack-500 z-40"
          onClick={closeSection}
        >
          <img
            className="blue-filter"
            src="/icon/back.svg"
            height={16}
            width={16}
          />
        </button>
        <DynamicViewer link={section}></DynamicViewer>
      </div>
      <div>
        <div className="w-full h-screen relative section snap-start">
          <img
            src="/img/home_cover.webp"
            className="w-full h-full object-cover z-0"
          ></img>
          <HomeHeadline />
          <button
            className="absolute bottom-0 right-0 border border-white rounded p-1 m-2 bg-semiblack-500"
            onClick={() => {
              $("html, body")
                .stop()
                .animate({ scrollTop: window.innerHeight }, 1000);
            }}
          >
            <img
              src="/icon/down.svg"
              height={16}
              width={16}
              className="blue-filter"
            ></img>
          </button>
        </div>

        <Section
          category="multimedia"
          link="rain/index.html"
          linkA={true}
          background="/vid/rain_cover.webm"
          linkText="view"
        >
          <Heading>rain</Heading>
          <Subtitle>a kinetic digital poem</Subtitle>
        </Section>

        <Section
          category="multimedia"
          link="what-ive-done"
          className="relative"
          linkText="watch"
          background="/vid/what-ive-done_cover.webm"
        >
          <Heading>What I've Done</Heading>
          <Subtitle>It's what I've done.</Subtitle>
        </Section>

        <Section
          category="theory"
          link="demons-of-analogy"
          background="/img/demons-analogy_cover.webp"
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
          category="multimedia"
          link="am/index.html"
          linkA={true}
          background="/vid/am_cover.webm"
          linkText="view"
        >
          <Heading>AM</Heading>
          <Subtitle>the static of being</Subtitle>
        </Section>

        <Section
          category="text"
          link="progress-1-23"
          background="/img/progress_cover.webp"
        >
          <Heading>Progress 1-23</Heading>
          <Subtitle>
            poem sequence that spirals between growing up, evolution, and the
            creative process
          </Subtitle>
          <Explanation>
            <p className="font-writing">
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
          category="sound"
          link="slowing-song"
          background="/img/slowing-song_cover.webp"
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
          category="theory"
          link="https://mackseyjournal.scholasticahq.com/article/21771"
          linkA
          linkExternal
          background="/img/reclaiming-space_cover.webp"
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
          category="multimedia"
          link="hauntings/index.html"
          linkA={true}
          background="/img/hauntings-cover.webp"
        >
          <Heading>hauntings</Heading>
          <Subtitle className="absolute top-4">
            an argument of ghosts, trapped in a webpage
          </Subtitle>
        </Section>

        <Section
          category="sound"
          link="https://probablevoltages.bandcamp.com/album/the-self-prescribing-doctors-union"
          linkA
          linkExternal
          background="/img/self-prescribing-doctors_cover.webp"
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

        <Section
          category="multimedia"
          link="a-max-patch-i-made-in-2020"
          background="/vid/a-max-patch_cover.webm"
          linkText="watch"
        >
          <Heading>a max patch i made in 2020</Heading>
          <Subtitle>um, well, 2020. performance for solo zoomer</Subtitle>
        </Section>

        <Section
          category="multimedia"
          link="place-elegy"
          background="/img/place-elegy_cover.webp"
          linkText="read & listen"
        >
          <Heading>place elegy</Heading>
          <Subtitle>a soundpoem of constantly shifting foundations</Subtitle>
          <audio
            src="/snd/place-elegy.mp3"
            className="w-full mt-4"
            controls
          ></audio>
          <Explanation>
            <p className="font-writing">
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <i>here we are all dead</i>
              <br />
              <br />
              drifting through fog thinning us to wraiths
              <br />
              gazing in a hollow of stretched space towards
              <br />
              forward weighted with the mirrors within shadow,
              <br />
              <br />
              retracing footstep-stains tanged upon grey
              <br />
              sidewalks mottled with semblance, scarred skeletal
              <br />
              by bright points slicing reflective concrete
              <br />
              <br />
              into kaleidoscopic fractures of frames, layers
              <br />
              of caskets cavitied with stasis, morgue-breath
              <br />
              sheening echoes between each other...
            </p>
          </Explanation>
        </Section>

        <Section
          category="text"
          link="https://twogroves.com/issues/fall2019#letters"
          linkA
          background="/img/letters-to-jed_cover.webp"
        >
          <Heading>Letters to Jed</Heading>
          <Subtitle>an elegy for my advisor</Subtitle>
          <Explanation className="font-writing text-right mx-auto">
            There's a rock with your name on it.
            <br />
            Writing is refraction.
            <br />
            Someone spraypainted it. The background is black and the letters are
            white.
            <br />
            That classroom was grey.
            <br />
            Tracking associations. "Spoken thought:" Breton.
            <br />
            Jed I'm finally learning French.
            <br />
            Translation: one thing tells another.
            <br />
            In the end you never could reply.
          </Explanation>
        </Section>

        <Section
          category="sound"
          link="317-feathers"
          background="/img/317-feathers_cover.webp"
          linkText="listen"
        >
          <Heading>317 feathers (the myth of icarus)</Heading>
          <Subtitle>voice, piano, &amp; 2 guitars: rising, falling</Subtitle>
          <audio
            src="/snd/317-feathers.mp3"
            controls
            className="w-full mt-4"
          ></audio>
        </Section>

        <Section
          category="text"
          link="floating-world-variations"
          background="/img/floating-world-variations_cover.webp"
        >
          <Heading>floating world variations</Heading>
          <Subtitle>dancing around &amp; within images</Subtitle>
          <Explanation className="font-writing">
            each layer stencilled
            <br />
            in what could be seventeen <br />
            superimpositions
            <br />
            <br />
            <tab />
            of
            <br />
            <br />
            imprinted figures
            <br />
            fleshed by what the mind makes up: <br />
            i know—i had one <br />
            <br />
            <tab />
            once
            <br />
          </Explanation>
        </Section>

        <Section
          category="sound"
          link="spring"
          background="/img/spring_cover.webp"
          linkText="listen"
        >
          <Heading>spring</Heading>
          <Subtitle>
            voice, piano, flute, &amp; cello: poetry - give me...
          </Subtitle>
          <audio src="/snd/spring.mp3" controls className="w-full mt-4"></audio>
        </Section>

        <Section
          category="text"
          link="quarantine-exegesis"
          background="/img/quarantine-exegesis_cover.webp"
        >
          <Heading>Quarantine Exegesis</Heading>
          <Subtitle>prose-poem cycle for a voice in a room, for eons</Subtitle>
          <Explanation className="font-writing">
            Can't remember. Been so long. Letters slipped under the door’s
            tongue. Markings flaking off the flat sheets inside. Perhaps
            letters. Corpses of language. Underwords. Lapses from outside
            ciphered by time. Cryptic weight. Could read them once. Whether
            eyesight memory or the markings themselves have decayed. Envelopes
            are coffins. Still vibrating undead from inside. As if the morgue’s
            dreams stuttering against its skull. A holy word struggling to say
            itself.
          </Explanation>
        </Section>

        <Section
          category="sound"
          link="phenomenology"
          background="/img/phenomenology_cover.webp"
          linkText="listen"
        >
          <Heading>Phenomenology</Heading>
          <Subtitle>voice &amp; cello: waking in the dark</Subtitle>
          <audio
            src="/snd/phenomenology.mp3"
            controls
            className="w-full mt-4"
          ></audio>
        </Section>

        <Section
          category="text"
          link="paired-tense-theses"
          background="/img/paired-tense-theses_cover.webp"
        >
          <Heading>(pa)i(re)d te(n)se (theses)</Heading>
          <Subtitle>the inner meaning hidden within the outer</Subtitle>
          <Explanation className="font-writing">
            (a m)(i)st <br />
            t(he)at(re)
            <br />
            <br />
            *<br />
            <br />
            (forge)d mo(t)i(f)s, (u)n(l)i(n)ked (ess)ence
            <br />
            <br />
            *<br />
            <br />
            (e)a(ch o)th(e)r’(s)
            <br />
            pro(of)
            <br />
            (po)s(t)ur(e)s e(nti)ce re(al)ity
            <br />
          </Explanation>
        </Section>

        <Section
          category="sound"
          link="production-of-meanings"
          background="/img/production-of-meanings_cover.webp"
          linkText="listen"
        >
          <Heading>production of meanings</Heading>
          <Subtitle>gunshots of the typewriter</Subtitle>
          <audio
            src="/snd/production-of-meanings.mp3"
            controls
            className="w-full mt-4"
          ></audio>
        </Section>

        <Section
          category="text"
          link="la-neige-unknown"
          background="/img/la-neige-unknown_cover.webp"
        >
          <Heading>
            <i>la neige</i> unknown
          </Heading>
          <Subtitle>
            snow of false-synonyms between french &amp; english
          </Subtitle>
          <Explanation>
            <p className="font-writing">
              &emsp;&emsp;&emsp;&emsp;snow
              <br />
              <tab />
              &emsp;
              <tab />
              <tab />
              <tab />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; falls in swirls
              <br />
              <tab />
              <tab />
              &emsp;&emsp;&emsp;
              <tab />
              <tab />
              &emsp;&emsp; <i>sécantes</i>
              <br />
              &emsp;&emsp;&emsp;&emsp;
              <tab />
              <tab />
              <tab />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;curved <br />
              <tab />
              <tab />
              <tab />
              <tab />
              &emsp;&emsp;&emsp;like diphthongs
              <br />
              <tab />
              <tab />
              <tab /> <tab />
              <tab />
              &emsp;<i>comme dit-on</i>
              <br />
              <tab />
              <tab />
              <i>tourbillons du langue</i>
              <br />
              <tab />
              <tab />
              &emsp;
              <tab />
              &emsp;&emsp;&emsp;like I why <br />
              <tab />
              <tab />
              &emsp;&emsp;&emsp; <i>pour quoi</i> <br />
              <tab />
              <tab />
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <i>suis-je</i>
              <br />
              <tab />
              <tab />
              <tab />
              &emsp;&emsp;&emsp; <i>une question</i> requested <br />
              <tab />
              <tab />
              &emsp;&emsp;&emsp;by inversion
              <br />
            </p>
          </Explanation>
        </Section>

        <Section
          category="sound"
          link="https://www.youtube.com/embed/h4AUj_XyRig"
          linkA
          linkText="watch"
          background="/vid/leaving-suite_cover.webm"
        >
          <Heading>The Leaving Suite</Heading>
          <Subtitle>a song-cycle about leaving childhood behind</Subtitle>
        </Section>
      </div>
    </AppContext.Provider>
  );
}

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
  const heading = useRef();

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
    const startWrite = setTimeout(writeLetter, writeTime);

    return () => {
      clearTimeout(startWrite);
    };
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
