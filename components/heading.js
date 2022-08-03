export default function Heading(props) {
  return (
    <h2
      className="text-xl font-bold text-slate-100 font-sans j-shadow"
      style={props.style || {}}
    >
      {props.children}
    </h2>
  );
}
