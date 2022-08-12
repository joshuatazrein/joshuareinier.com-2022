import { useEffect, useRef } from "react";

export default function ScoreCover(props) {
  return (
    <img
      src={props.src}
      className="m-1 shrink h-full overflow-hidden ml-auto j-shadow-800 bg-semiblack-800 max-h-full object-contain"
      style={{
        maxWidth: "calc(100% - 100px)",
      }}
    ></img>
  );
}
