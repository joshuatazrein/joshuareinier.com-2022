export default function ScoreCover(props) {
  return (
    <img
      src={props.src}
      style={{
        maxWidth: "calc(100% - 80px)",
      }}
      width="50%"
      className={
        "m-1 ml-auto j-shadow-800 bg-semiblack-800 shrink " +
        (props.className || "")
      }
    />
  );
}
