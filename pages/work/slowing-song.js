import BackButton from "../../components/BackButton";
import Container from "../../components/container";
import Explanation from "../../components/explanation";
import Heading from "../../components/heading";
import Page from "../../components/page";
import Title from "../../components/title";

const title = "slowing song";

export default function ThisPage({}) {
  return (
    <Page title={title}>
      <Container>
        <Title>{title}</Title>
        <Explanation>
          <i>slowing song</i> draws its text from "Slow Song for Mark Rothko" by
          the Objectivist poet John Taggart. The poem uses repeating phrases
          mainly in the infinitive, conjuring a ritual repetition. I crafted the
          piece to drag out these repetitions in a spiralling descent: movement
          I is metered and energetic, while mvt. II begins stretching time
          through the use of proportional notation, culminating in the meterless
          mvt. III. The ensemble is treated as a giant mouth uttering the poem's
          guttural, sonic qualities which gradually bubble up from the depths.
        </Explanation>
        <Explanation>
          Played by The Oberlin Conservatory Contemporary Ensemble, conducted by
          Tim Weiss
        </Explanation>
        <audio controls className="w-full" src="/snd/slowing-song.mp3"></audio>
        <iframe
          src="/doc/slowing-song.pdf"
          className="h-viewer w-full mt-4"
        ></iframe>
        <div className="writing">
          <h2>1</h2>
          <br />
          To breathe and stretch one's arms again
          <br />
          to breathe through the mouth to breathe to <br />
          breathe through the mouth to utter in <br />
          the most quiet way not to whisper not to whisper <br />
          to breathe through the mouth in the most quiet way to <br />
          breathe to sing to breathe to sing to breathe <br />
          to sing the most quiet way.
          <br />
          <br />
          To sing to light the most quiet light in darkness <br />
          radiantia radiantia <br />
          singing light in darkness.
          <br />
          To sing as the host sings in his house.
          <br />
          <br />
          To breathe through the mouth to breathe through the <br />
          mouth to breathe to sing to
          <br />
          sing in the most quiet way to
          <br />
          sing the seeds in the earth breathe forth
          <br />
          not to whisper the seeds not to whisper in the earth <br />
          to sing the seeds in the earth the most quiet way to <br />
          sing the seeds in the earth breathe forth.
          <br />
          <br />
          To sing to light the most quiet light in darkness <br />
          radiant light of seeds in the earth <br />
          singing light in the darkness.
          <br />
          To sing as the host sings in his house.
          <br />
          <br />
          To breathe through the mouth to breathe to sing <br />
          in the most quiet way not to <br />
          whisper the seeds in the earth breathe forth <br />
          to sing totality of the seeds not to eat to <br />
          sing the seeds in the earth to <br />
          be at ease to sing totality totality <br />
          to sing to be at ease
          <br />
          <br />
          To sing to light the most quiet light in darkness <br />
          be at case with radiant seeds <br />
          with singing light in darkness,
          <br />
          To sing as the host sings in his house.
          <br />
          <br />
          <h2>2</h2>
          <br />
          To breathe and stretch one's arms again <br />
          to stretch to stretch to straighten to stretch to <br />
          rise to stretch to straighten to rise <br />
          to full height not to torture not to torture to <br />
          rise to full height to give to hold out to <br />
          to give the hand to hold out the hand <br />
          to give to hold out to.
          <br />
          <br />
          To give self-lighted flowers in the darkness
          <br />
          fiery saxifrage
          <br />
          to hold out self-lighted flowers in darkness
          <br />
          To give as the host gives in his house.
          <br />
          <br />
          To stretch to stretch to straighten to stretch to <br />
          rise to full height not to torture not to <br />
          to rise to give to hold out to <br />
          give the hand to hold out the hand to give <br />
          hope hope of hope of perfect hope of perfect rest <br />
          to give hope of perfect rest <br />
          to give to hold out to.
          <br />
          <br />
          To give self-lighted flowers in the darkness <br />
          perfect and fiery hope <br />
          to hold out lighted flowers in darkness.
          <br />
          To give as the host gives in his house.
          <br />
          <br />
          To stretch to stretch to straighten to stretch to <br />
          rise to full height not to torture to <br />
          give the hand to hold out the hand to <br />
          give hope to give hope of perfect rest to <br />
          rest not to lay flat not to lay out <br />
          to rest as seeds as seeds in the earth <br />
          to give rest to hold out to.
          <br />
          <br />
          To give self-lighted flowers in the darkness <br />
          fiery hope of perfect rest <br />
          to hold out light flowers in darkness.
          <br />
          To give as the host gives in his house.
          <br />
          <br />
          <h2>3</h2>
          To breathe and stretch one's arms again <br />
          to join arm-in-arm to join arm-in-arm to
          <br />
          join to take to take into <br />
          to join to take into a state of intimacy <br />
          not in anger not in anger <br />
          to join arm-in-arm to join arms <br />
          to take into intimacy.
          <br />
          <br />
          To take into the light in the darkness <br />
          into the excited phosphor <br />
          to be in light in the darkness.
          <br />
          To take as the host takes into his house.
          <br />
          <br />
          To join arm-in-arm to join arm-in-arm to
          <br />
          join to take to take into
          <br />
          to join to take into a state of intimacy
          <br />
          not anger not anger
          <br />
          to take as the earth takes seeds as
          <br />
          the poor the poor must be taken into
          <br />
          to take into intimacy.
          <br />
          <br />
          To take into the light into the darkness
          <br />
          into the phosphor star-flowers
          <br />
          to be in the light in the darkness.
          <br />
          To take as the host takes into the house.
          <br />
          <br />
          To Join arm-in-arm to join arm-in-arm to <br />
          join arms to take to take into a state of intimacy <br />
          not anger <br />
          to take as the earth takes seeds as <br />
          the poor must be taken into <br />
          to end the silence and the solitude
          <br />
          to take into intimacy.
          <br />
          <br />
          To take into the light in the darkness <br />
          into the star-flowers before sunrise
          <br />
          to be in the light in the darkness.
          <br />
          To take as the host takes into his house.
        </div>
        <BackButton title={title}></BackButton>
      </Container>
    </Page>
  );
}
