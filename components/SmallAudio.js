import { useEffect, useRef, useState } from "react";

export default function SmallAudio(props) {
  const thisAudio = useRef();
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const max = 32;
  const thisCanvas = useRef();
  const fadeOut = useRef();

  function draw() {
    // const h = thisCanvas.current.height;
    // const w = thisCanvas.current.width;
    // const c = thisCanvas.current.getContext("2d");
    // c.clearRect(0, 0, h, w);
    // c.fillStyle = "#bae6fd";
    // const p = max / 2 + progress * (h / 2 - max / 2);
    // c.beginPath();
    // c.arc(Math.floor(h / 2), Math.floor(w / 2), p, 0, Math.PI * 2);
    // c.fill();
  }

  useEffect(() => {
    if (play) {
      $("audio")
        .toArray()
        .forEach((x) => x.pause());
      thisAudio.current.play();
    } else {
      thisAudio.current.pause();
    }
  }, [play]);

  useEffect(() => {
    if (thisCanvas.current) {
      draw();
    }
    if (
      thisAudio.current.currentTime >= props.duration - 1 &&
      !fadeOut.current
    ) {
      console.log("setting fade");
      fadeOut.current = setInterval(() => {
        if (thisAudio.current.volume > 0.2) {
          thisAudio.current.volume -= 0.1;
        } else {
          console.log("no volume");
          console.log(fadeOut.current);
          clearInterval(fadeOut.current);
          fadeOut.current = undefined;
          setPlay(false);
          thisAudio.current.currentTime = 0;
          thisAudio.current.volume = 1;
          setProgress(0);
        }
      }, 100);
    }
  }, [progress]);

  useEffect(() => {
    thisAudio.current.ondurationchange = () => {
      thisAudio.current.duration = 30;
      thisAudio.current.currentTime = 0;
      draw();
    };

    thisAudio.current.ondurationchange = () =>
      (thisAudio.current.currentTime = 0);
    thisAudio.current.ontimeupdate = () => {
      setProgress(thisAudio.current.currentTime / props.duration);
    };
  }, []);

  return (
    <>
      <audio src={props.src} ref={thisAudio} />
      <div
        className={`relative top-2 left-2`}
        style={{ height: 0, width: 32 + max }}
      >
        <button
          className={`p-1 bg-semiblack-600 border ${
            play ? "border-sky-300" : "border-white"
          } rounded-full z-30 h-[32px] w-[32px] top-[16px] left-[16px] absolute`}
        >
          <img
            onClick={() => setPlay(!play)}
            src={play ? "/icon/pause.svg" : "/icon/play.svg"}
            className="h-full w-full"
          />
        </button>
        <div
          className="bg-sky-200 rounded-full absolute"
          style={{
            width: 33 + progress * max,
            height: 33 + progress * max,
            top: 16 + max / 2 - (33 + progress * max) / 2,
            left: 16 + max / 2 - (33 + progress * max) / 2,
            transition: "height 1s, width 1s, top 1s, left 1s",
          }}
        ></div>
        {/* <canvas
          ref={thisCanvas}
          className="absolute z-20 top-0 left-0"
          width={32 + max}
          height={32 + max}
        ></canvas> */}
      </div>
    </>
  );
}
