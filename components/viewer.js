import { useState } from "react";
import Container from "./container";

export default function Viewer(props) {
  // pass a "close" method to close it
  return (
    <div className="fixed left-0 top-[60px] w-screen h-viewer z-30">
      <iframe
        src={props.src}
        className="h-full w-full rounded relative"
      ></iframe>
      <button
        className="absolute top-0 right-0 border border-white rounded p-1 m-2 bg-semiblack-500 z-40"
        onClick={props.close}
      >
        <img
          src={open ? "/icon/close.svg" : "/icon/fullscreen.svg"}
          height={16}
          width={16}
        />
      </button>
    </div>
  );
}
