export default function Subtitle(props) {
  return (
    <h2
      className="text-l text-slate-100 font-sans mt-1 italic j-shadow"
      style={props.style || {}}
    >
      {props.children}
    </h2>
  );
}
