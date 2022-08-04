export default function PDF(props) {
  return (
    <iframe
      src={props.src}
      className="h-viewer w-full mt-4 rounded"
      style={
        props.dark
          ? { filter: "invert(96%)" }
          : {
              filter:
                "invert(22%) sepia(22%) hue-rotate(160deg) brightness(80%) contrast(120%)",
            }
      }
    ></iframe>
  );
}
