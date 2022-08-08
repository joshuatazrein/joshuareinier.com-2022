import Link from "next/link";
import { createRef, useEffect, useRef, useState } from "react";
import Container from "./container";

function testVideo(url) {
  if (url.includes("/vid/")) return true;
}

export default function Section(props) {
  let propStyles = props.style || {};
  const [inView, setInView] = useState(false);

  if (inView && props.background && !testVideo(props.background)) {
    propStyles.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.33), 
      rgba(0, 0, 0, 0.33)
    ), url("${props.background}")`;
    propStyles.backgroundPosition = "center";
    propStyles.backgroundSize = "cover";
  }

  useEffect(() => {
    if (props.scrollMax > (props.scrollOrder - 1) * (window.innerHeight - 80)) {
      setInView(true);
    }
  });

  const thisSection = useRef();

  return (
    <div
      className={`section relative w-full h-screen p-4 pt-[60px] flex flex-col snap-start ${
        props.className || ""
      } ${
        props.search || (props.filter && props.filter !== props.category)
          ? "hidden"
          : ""
      }`}
      style={{ ...propStyles }}
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
          <div className="px-2 z-10 w-full max-w-xl mx-auto h-full d-flex flex-col">
            {props.children}
            <div className="g-transparent z-10 grow"></div>

            {props.linkExternal ? (
              <a
                href={props.link}
                target="_blank"
                className="border border-white rounded font-sans font-semibold w-full bg-semiblack-500 z-10 max-w-xl mx-auto block accent text-center"
              >
                {props.linkText || "read"}
              </a>
            ) : (
              <button
                className="border border-white rounded font-sans font-semibold w-full bg-semiblack-500 z-10 max-w-xl mx-auto block accent"
                onClick={() => props.openSection(props.link)}
              >
                {props.linkText || "read"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
