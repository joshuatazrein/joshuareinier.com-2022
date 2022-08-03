export default function Title(props) {
  return (
    <h1
      className={`text-2xl mt-2 text-center font-bold text-slate-100 font-sans ${
        props.className || ""
      }`}
      style={props.style || {}}
    >
      {props.children}
    </h1>
  );
}
