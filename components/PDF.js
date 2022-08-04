import { useEffect, useRef, useState } from "react";
import Container from "./container";

export default function PDF(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-3/4 h-viewer relative mx-auto">
      <a
        href={props.src}
        target="_blank"
        className="absolute top-0 right-0 border border-white rounded p-1 m-2 bg-semiblack-500 z-40"
      >
        <img src="/icon/fullscreen.svg" height={16} width={16} />
      </a>
      <iframe
        src={props.src}
        className="mt-2 mx-auto rounded relative w-full h-full"
        style={{
          filter: props.dark
            ? "invert(96%)"
            : "invert(22%) sepia(22%) hue-rotate(160deg) brightness(80%) contrast(120%)",
        }}
      ></iframe>
    </div>
  );
}
