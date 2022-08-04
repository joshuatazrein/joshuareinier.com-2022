import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "place elegy";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Container>
        <Title>place elegy</Title>
        <Explanation>
          <i>place elegy</i> contemplates the self-referential nature of
          "places:" we co-create them, endow them with significance through what
          we think others perceive. Similarly, our images of ourselves are
          formed in large part through mirrors from others and the outer
          world—identity is created fundamentally from surface. The poem uses a
          set of repeated words that cycle through its five stanzas, a language
          of echoes that never settle. The sound portion explores this
          unsettledness through paralanguage, as the central speaker is
          surrounded with inarticulate spectres reverberating the labor of
          breath.
        </Explanation>
        <audio controls className="w-full" src="/snd/place-elegy.mp3"></audio>
        <div className="writing">
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
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <i>all here are dead we</i>
          <br />
          <br />
          tremble on a web stretched over void, tangles
          <br />
          at retraced points threatening to tear our footsteps
          <br />
          of weight: the indifferent lacquer of our frames,
          <br />
          <br />
          their sheen belied by reflective clarity, fracturing
          <br />
          our faces thinner than their shadows gazing
          <br />
          through, semblance layered upon a hollowness
          <br />
          <br />
          mirrored within others: a scatter of wraiths
          <br />
          drifting towards a concrete fog, rasping
          <br />
          resonant in skeletal chasms, clamors echoing...
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <i>we dead here are all</i>
          <br />
          <br />
          against each other: gambits of diagonal mirrors,
          <br />
          steel-sheathed masks echoing through sheens of
          <br />
          triangulated gaze, wraithlike layers fractured
          <br />
          <br />
          by the concrete-dust of our reflective speech,
          <br />
          choking us with semblance, shadowing our voices,
          <br />
          imbuing within this hollow a thin weight
          <br />
          <br />
          which is the retracing of our footsteps lifted,
          <br />
          stretched towards a tangle of skeletal points, frames
          <br />
          filled with fog, façades drifting upon mist...
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <i>here all we dead are</i>
          <br />
          <br />
          sinking slowly within the fog's mirrors, tangles,
          <br />
          overstretched layers that collapse back to points
          <br />
          as present echoes retrace towards their wraiths,
          <br />
          <br />
          as semblance rusts in sulfuric blooms,
          <br />
          accumulates wet concrete upon our footsteps,
          <br />
          we drift in these wind-weighted lacunae, gazing
          <br />
          <br />
          through the shade of each other's limpid sheen:
          <br />
          skeletal figures in lightning-blasted hollows,
          <br />
          reflections shell-shocked by their frames' thinness...
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <i>here are dead we all</i>
          <br />
          <br />
          leave the way we came, thin, stretched, drifting
          <br />
          towards a fuller shadow's footsteps, pricked by a sheen
          <br />
          of fractured mirrors, frames othered out of gaze:
          <br />
          <br />
          tangles weighted lithe from the fog's semblance,
          <br />
          burn-curling around a hollowness within,
          <br />
          singed skeletal, reflecting a pointless careen
          <br />
          <br />
          through a centrifuge of echoes: to relive
          <br />
          our wraiths pyrite upon arriving, to finally
          <br />
          retrace a concrete grave's layered epitaph...
          <br />
          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <i>dead all are we here</i>
        </div>
        <BackButton title={title}></BackButton>
      </Container>
    </Page>
  );
}
