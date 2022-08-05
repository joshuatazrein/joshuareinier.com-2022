export default function Container(props) {
  return (
    <div
      className={`px-2 z-10 w-full max-w-xl mx-auto ${props.className || ""}`}
    >
      {props.children}
    </div>
  );
}
