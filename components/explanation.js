import { useEffect, useRef } from "react";

export default function Explanation(props) {
  const thisDiv = useRef();
  useEffect(() => {
    $(thisDiv.current).css("-webkit-line-clamp", `unset`);
    const lineHeight =
      $(thisDiv.current).innerHeight() /
      Number($(thisDiv.current).css("line-height").slice(0, 2));
    $(thisDiv.current).css("-webkit-line-clamp", `${Math.floor(lineHeight)}`);
  });
  return (
    <div
      ref={thisDiv}
      className={`text-sm pt-2 text-slate-200 text-shadow bg-semiblack-800 bd-shadow-800 w-fit shrink ellipsis my-2 ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  );
}
