export default function Title(props) {
  return (
    <div
      className={`w-full flex items-center justify-center h-[300px] max-h-[50vh]`}
      style={{
        background: props.background ? `url(${props.background})` : "",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1
        className={`text-xl sm:text-4xl mt-2 text-center font-bold accent font-sans ${
          props.className || ""
        }`}
        style={props.style || {}}
      >
        {props.title}
      </h1>
    </div>
  );
}
