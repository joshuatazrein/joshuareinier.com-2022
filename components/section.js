import { createRef, useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import AppContext from "../services/AppContext";

gsap.registerPlugin(ScrollTrigger);

function testVideo(url) {
  if (url.includes("/vid/")) return true;
}

export default function Section(props) {
  const thisSection = useRef();
  let propStyles = props.style || {};
  const [inView, setInView] = useState(false);
  const close = () => setOpen(false);
  const context = useContext(AppContext);
  const observer = useRef();
  const trigger = useRef();

  if (inView && props.background && !testVideo(props.background)) {
    propStyles.backgroundImage = `linear-gradient(
      rgba(0, 0, 0, 0.33), 
      rgba(0, 0, 0, 0.33)
    ), url("${props.background}")`;
    propStyles.backgroundPosition = "center";
    propStyles.backgroundSize = "cover";
  }

  useEffect(() => {
    // create config object: rootMargin and threshold
    // are two properties exposed by the interface
    const config = {
      rootMargin: `0px 0px ${window.innerHeight}px 0px`,
      threshold: 0,
    };

    // register the config object with an instance
    // of intersectionObserver
    observer.current = new IntersectionObserver(function (section, self) {
      // process just the images that are intersecting.
      // isIntersecting is a property exposed by the interface
      if (section[0].isIntersecting) {
        // custom function that copies the path to the img
        // from data-src to src
        setInView(true);
        // the image is now in place, stop watching
        self.unobserve(section[0].target);
      }
    }, config);

    observer.current.observe(thisSection.current);

    ScrollTrigger.create({
      trigger: thisSection.current,
      start: "top top",
      pin: true,
      pinSpacing: false,
      anticipatePin: 10,
    });
  }, []);

  return (
    <div
      ref={thisSection}
      className={`section relative w-full h-screen p-4 pt-[60px] flex flex-col overflow-auto snap-start ${
        props.className || ""
      } ${
        context.search || (context.filter && context.filter !== props.category)
          ? "hidden"
          : ""
      }`}
      style={{ ...propStyles }}
    >
      {inView && (
        <>
          {props.background && testVideo(props.background) && (
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={`/img/${
                props.background.slice(5, props.background.length - 5) + ".png"
              }`}
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
              className="object-cover"
            ></video>
          )}
          <div
            className={`px-2 z-10 w-full h-full max-w-xl mx-auto flex flex-col ${
              props.className || ""
            }`}
          >
            {props.children}
            <div className="bg-transparent z-10 grow"></div>

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
                onClick={() => context.openSection(props.link)}
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
