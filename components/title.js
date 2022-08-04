export default function Title(props) {
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{
        height: "300px",
        background: `url(${props.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1
        className={`text-4xl mt-2 text-center font-bold accent font-sans ${
          props.className || ""
        }`}
        style={props.style || {}}
      >
        {props.title}
      </h1>
    </div>
  );
}
