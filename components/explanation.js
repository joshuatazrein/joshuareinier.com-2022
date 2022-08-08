export default function Explanation(props) {
  return (
    <p
      className={`grow h-full max-h-fit text-sm py-2 text-slate-200 text-shadow bg-semiblack-800 bd-shadow-800 w-fit ${
        props.className || ""
      }`}
    >
      {props.children}
    </p>
  );
}
