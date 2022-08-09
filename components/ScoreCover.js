export default function ScoreCover(props) {
  return (
    <div
      className={
        "shrink grow my-1 overflow-auto mt-1 h-fit ml-auto " +
          props.className || ""
      }
    >
      <img
        className="j-shadow-invert"
        src={props.src}
        width="100%"
        style={{ filter: "invert(100%)" }}
      />
    </div>
  );
}
