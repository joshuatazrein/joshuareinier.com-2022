export default function Explanation(props) {
  return (
    <div
      className={`text-sm py-2 text-slate-200 text-shadow bg-semiblack-800 bd-shadow-800 w-fit overflow-scroll my-2 ${
        props.className || ""
      }`}
    >
      {props.children}
    </div>
  );
}
