export default function Heading(props) {
  return (
    <h2
      className="text-xl font-bold accent font-sans j-shadow"
      style={props.style || {}}
    >
      {props.children}
    </h2>
  );
}
