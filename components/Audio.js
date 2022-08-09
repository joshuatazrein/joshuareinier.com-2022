import { useEffect, useRef, useState } from "react";
import styles from "./Audio.module.css";

export default function Audio(props) {
  const thisAudio = useRef();
  const thisFrame = useRef();
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0.2);
  const [playheadLocation, setPlayheadLocation] = useState(0);
  const [playheadOpen, setPlayheadOpen] = useState(false);
  const [playerWidth, setPlayerWidth] = useState(0);

  useEffect(() => {
    if (play) {
      thisAudio.current.play();
    } else {
      thisAudio.current.pause();
    }
  }, [play]);

  useEffect(() => {
    thisAudio.current.ondurationchange = () =>
      (thisAudio.current.currentTime = 0);
    thisAudio.current.ontimeupdate = () =>
      setProgress(thisAudio.current.currentTime / thisAudio.current.duration);
  }, []);

  useEffect(() => {
    setPlayerWidth($(thisFrame.current).width());
  }, [playerWidth]);

  return (
    <div className="w-full flex-none flex items-center rounded border border-slate-400 overflow-hidden my-1 h-5">
      <audio src={props.src} ref={thisAudio} />
      <button className="h-5 p-1 bg-semiblack-600">
        <img
          onClick={() => setPlay(!play)}
          src={play ? "/icon/pause.svg" : "/icon/play.svg"}
          height={16}
          width={16}
        />
      </button>
      <div
        ref={thisFrame}
        className={`h-full relative w-full shrink d-flex bg-semislate-800 ${styles.playArea}`}
        onMouseMove={(ev) => {
          console.log("mouseover");
          setPlayheadLocation(ev.pageX - $(thisFrame.current).offset().left);
        }}
        onMouseEnter={() => setPlayheadOpen(true)}
        onMouseLeave={() => setPlayheadOpen(false)}
        onClick={(ev) => {
          const newProgress =
            (ev.pageX - $(thisFrame.current).offset().left) /
            $(thisFrame.current).width();
          console.log(newProgress);
          thisAudio.current.currentTime =
            thisAudio.current.duration * newProgress;
        }}
      >
        <div
          className="bg-slate-400 h-full"
          style={{ width: `${progress * 100}%` }}
        ></div>
        <div
          className={`absolute w-0 h-full border-2 border-sky-200 top-0 ${styles.playHead}`}
          style={{
            left: playheadOpen ? playheadLocation : progress * playerWidth,
          }}
        ></div>
      </div>
    </div>
  );
}
