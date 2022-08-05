import Feathers from "../work/317-feathers";
import AMaxPatch from "../work/a-max-patch-i-made-in-2020";
import DemonsOfAnalogy from "../work/demons-of-analogy";
import FloatingWorldVariations from "../work/floating-world-variations";
import Iamb from "../work/iamb";
import LaNeigeUnknown from "../work/la-neige-unknown";
import PairedTenseTheses from "../work/paired-tense-theses";
import Phenomenology from "../work/phenomenology";
import PlaceElegy from "../work/place-elegy";
import ProductionOfMeanings from "../work/production-of-meanings";
import Progress123 from "../work/progress-1-23";
import QuarantineExegesis from "../work/quarantine-exegesis";
import SlowingSong from "../work/slowing-song";
import Spring from "../work/spring";
import WhatIveDone from "../work/what-ive-done";

export default function Viewer(props) {
  return (
    <>
      {props.link.includes(".") ? (
        <iframe
          src={
            props.link.includes("https://")
              ? props.link
              : "/works/" + props.link
          }
          className="h-full w-full"
        ></iframe>
      ) : (
        <div className="h-full w-full overflow-y-auto scroller">
          {props.link === "317-feathers" && <Feathers />}
          {props.link === "a-max-patch-i-made-in-2020" && <AMaxPatch />}
          {props.link === "demons-of-analogy" && <DemonsOfAnalogy />}
          {props.link === "floating-world-variations" && (
            <FloatingWorldVariations />
          )}
          {props.link === "la-neige-unknown" && <LaNeigeUnknown />}
          {props.link === "paired-tense-theses" && <PairedTenseTheses />}
          {props.link === "phenomenology" && <Phenomenology />}
          {props.link === "place-elegy" && <PlaceElegy />}
          {props.link === "production-of-meanings" && <ProductionOfMeanings />}
          {props.link === "progress-1-23" && <Progress123 />}
          {props.link === "quarantine-exegesis" && <QuarantineExegesis />}
          {props.link === "slowing-song" && <SlowingSong />}
          {props.link === "spring" && <Spring />}
          {props.link === "what-ive-done" && <WhatIveDone />}
          {props.link === "iamb" && <Iamb />}
        </div>
      )}
    </>
  );
}
