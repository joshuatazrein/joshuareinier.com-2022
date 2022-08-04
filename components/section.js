import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import Container from "./container";

function testVideo(url) {
  if (url.includes(".mp4")) return true;
}

export default function Section(props) {
  const thisSection = createRef();
  let propStyles = props.style || {};
  const [inView, setInView] = useState(false);

  if (props.background && !testVideo(props.background)) {
    propStyles.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.25), 
      rgba(0, 0, 0, 0.25)
    ), url("${props.background}")`;
    propStyles.backgroundPosition = "center";
    propStyles.backgroundSize = "cover";
  }

  useEffect(() => {
    if (props.scrollMax > (props.scrollOrder - 2) * window.innerHeight) {
      setInView(true);
    }
  });

  return (
    <div ref={thisSection} className="w-full h-fit">
      {inView === true ? (
        <div
          className={`section w-full h-viewer p-4 flex flex-col ${
            props.className || ""
          } ${
            props.background && testVideo(props.background) ? "relative" : ""
          }`}
          style={{ ...propStyles, minHeight: "fit-content" }}
        >
          {props.background && testVideo && (
            <video
              autoPlay
              muted
              loop
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
          {props.linkA ? (
            <a href={props.link} className="z-10 max-w-xl mx-auto block w-full">
              <button className="w-full border border-white rounded font-sans font-semibold bg-semiblack-500">
                {props.linkText || "read"}
              </button>
            </a>
          ) : (
            <Link href={props.link}>
              <button className="border border-white rounded font-sans font-semibold w-full bg-semiblack-500 z-10 max-w-xl mx-auto block">
                {props.linkText || "read"}
              </button>
            </Link>
          )}
        </div>
      ) : (
        "false"
      )}
    </div>
  );
}
