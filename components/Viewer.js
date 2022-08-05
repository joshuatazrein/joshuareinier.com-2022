import Feathers from "../work/317-feathers";
import AMaxPatch from "../work/a-max-patch-i-made-in-2020";
import DemonsOfAnalogy from "../work/demons-of-analogy";
import FloatingWorldVariations from "../work/floating-world-variations";
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
  console.log(props.link);
  return (
    <>
      {props.link.includes(".") ? (
        <iframe src={props.link} className="h-full w-full"></iframe>
      ) : (
        <div className="h-full w-full overflow-y-scroll">
          {props.link === "work/317-feathers" && <Feathers />}
          {props.link === "work/a-max-patch-i-made-in-2020" && <AMaxPatch />}
          {props.link === "work/demons-of-analogy" && <DemonsOfAnalogy />}
          {props.link === "work/floating-world-variations" && (
            <FloatingWorldVariations />
          )}
          {props.link === "work/la-neige-unknown" && <LaNeigeUnknown />}
          {props.link === "work/paired-tense-theses" && <PairedTenseTheses />}
          {props.link === "work/phenomenology" && <Phenomenology />}
          {props.link === "work/place-elegy" && <PlaceElegy />}
          {props.link === "work/production-of-meanings" && (
            <ProductionOfMeanings />
          )}
          {props.link === "work/progress-1-23" && <Progress123 />}
          {props.link === "work/quarantine-exegesis" && <QuarantineExegesis />}
          {props.link === "work/slowing-song" && <SlowingSong />}
          {props.link === "work/spring" && <Spring />}
          {props.link === "work/what-ive-done" && <WhatIveDone />}
        </div>
      )}
    </>
  );
}
