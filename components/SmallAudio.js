import { useEffect, useRef, useState } from "react";

export default function SmallAudio(props) {
  const thisAudio = useRef();
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const max = 24;
  const thisCanvas = useRef();

  function draw() {
    const h = thisCanvas.current.height;
    const w = thisCanvas.current.width;
    console.log(h, w);
    const c = thisCanvas.current.getContext("2d");
    c.clearRect(0, 0, h, w);
    c.fillStyle = "#FFF";
    const p = 12 + progress * (h / 2 - 12);
    console.log(p);
    c.beginPath();
    c.arc(Math.floor(h / 2), Math.floor(w / 2), p, 0, Math.PI * 2);
    c.fill();
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
      if (thisAudio.current.currentTime >= props.duration) {
        setPlay(false);
        setProgress(0);
      } else {
        setProgress(thisAudio.current.currentTime / props.duration);
      }
    };
  }, []);

  return (
    <>
      <audio src={props.src} ref={thisAudio} />
      <div
        className={`relative top-2 left-2`}
        style={{ height: 0, width: 24 + max }}
      >
        <button className="p-1 bg-semiblack-600 border border-white rounded-full z-30 h-[24px] w-[24px] top-[12px] left-[12px] absolute">
          <img
            onClick={() => setPlay(!play)}
            src={play ? "/icon/pause.svg" : "/icon/play.svg"}
            className="h-full w-full"
          />
        </button>

        <canvas
          ref={thisCanvas}
          className="absolute z-20 top-0 left-0"
          width={24 + max}
          height={24 + max}
        ></canvas>
      </div>
    </>
  );
}
