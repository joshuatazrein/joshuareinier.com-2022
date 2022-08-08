export default function Explanation(props) {
  return (
    <div
      className={`grow h- max-h-fit text-sm py-2 text-slate-200 text-shadow bg-semiblack-800 bd-shadow-800 w-fit overflow-scroll ${
        props.className || ""
      }`}
      style={{ height: "1fr" }}
    >
      {props.children}
    </div>
  );
}
