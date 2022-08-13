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
  const context = useContext(AppContext);
  const observer = useRef();
  const thisTimeline = useRef();
  const thisBackground = useRef();

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
  }, []);

  useEffect(() => {
    if (inView) {
      // thisTimeline.current = gsap
      //   .timeline({})
      //   .fromTo(
      //     thisBackground.current,
      //     {
      //       top: "-100%",
      //     },
      //     {
      //       top: "100%",
      //       duration: 2,
      //       ease: "none",
      //     },
      //     0
      //   )
      //   .to(
      //     thisSection.current,
      //     {
      //       opacity: 1,
      //       duration: 1,
      //       ease: "power1",
      //     },
      //     0
      //   );
      // ScrollTrigger.create({
      //   id: props.link,
      //   trigger: thisSection.current,
      //   start: "top bottom",
      //   end: "bottom top",
      //   animation: thisTimeline.current,
      //   scrub: true,
      // });
    }
  }, [inView]);

  return (
    <div
      ref={thisSection}
      className={`section relative w-full h-screen p-4 pt-[60px] flex flex-col overflow-clip snap-center opacity-100 ${
        props.className || ""
      } ${
        context.search || (context.filter && context.filter !== props.category)
          ? "hidden"
          : ""
      }`}
      style={{ ...propStyles, scrollSnapStop: "always" }}
    >
      {inView && (
        <>
          {props.background && testVideo(props.background) ? (
            <video
              ref={thisBackground}
              autoPlay
              muted
              loop
              playsInline
              poster={`/img/${
                props.background.slice(5, props.background.length - 5) + ".png"
              }`}
              src={props.background}
              className="h-full w-full bottom-0 left-0 absolute z-0 object-cover"
            ></video>
          ) : (
            <img
              ref={thisBackground}
              src={props.background}
              className="h-full w-full bottom-0 left-0 absolute z-0 object-cover"
            ></img>
          )}
          <div
            className={`px-2 z-10 w-full h-full max-w-xl mx-auto flex flex-col ${
              props.className || ""
            }`}
          >
            {props.children}
            {!props.noGrow && <div className="bg-transparent z-10 grow"></div>}

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
