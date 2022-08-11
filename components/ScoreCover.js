import { useEffect, useRef } from "react";

export default function ScoreCover(props) {
  const thisImg = useRef();
  const thisDiv = useRef();

  useEffect(() => {
    console.log($(thisDiv.current).height());
    $(thisImg.current).attr(
      "width",
      $(thisDiv.current).height() *
        ($(thisImg.current).width() / $(thisImg.current).height())
    );
  });

  return (
    <div
      ref={thisDiv}
      style={{
        maxWidth: "calc(100% - 100px)",
      }}
      className={
        "m-1 ml-auto j-shadow-800 bg-semiblack-800 shrink h-full overflow-hidden " +
        (props.className || "")
      }
    >
      <img
        ref={thisImg}
        src={props.src}
        className="max-h-full max-w-full"
      ></img>
    </div>
  );
}
