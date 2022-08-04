import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import Container from "./container";
import Viewer from "./viewer";

function testVideo(url) {
  if (url.includes("/vid/")) return true;
}

export default function Section(props) {
  const thisSection = createRef();
  let propStyles = props.style || {};
  const [inView, setInView] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  if (props.background && !testVideo(props.background)) {
    propStyles.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.33), 
      rgba(0, 0, 0, 0.33)
    ), url("${props.background}")`;
    propStyles.backgroundPosition = "center";
    propStyles.backgroundSize = "cover";
  }

  useEffect(() => {
    if (props.scrollMax > (props.scrollOrder - 2) * (window.innerHeight - 80)) {
      setInView(true);
    }
  });

  return (
    <>
      {open && <Viewer src={props.link} close={close} linkA={props.linkA} />}
      <div
        ref={thisSection}
        className={`section w-full h-viewer p-4 flex flex-col ${
          props.className || ""
        } ${props.background && testVideo(props.background) ? "relative" : ""}`}
        style={{ ...propStyles, minHeight: "fit-content" }}
      >
        {inView && (
          <>
            {props.background && testVideo && (
              <video
                autoPlay
                muted
                loop
                playsInline
                src={props.background}
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: 1,
                  maxWidth: "unset",
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                }}
                class="object-cover"
              ></video>
            )}
            <Container>{props.children}</Container>

            <div className="grow bg-transparent z-10"></div>

            <button
              className="border border-white rounded font-sans font-semibold w-full bg-semiblack-500 z-10 max-w-xl mx-auto block accent"
              onClick={() => setOpen(true)}
            >
              {props.linkText || "read"}
            </button>
          </>
        )}
      </div>
    </>
  );
}
