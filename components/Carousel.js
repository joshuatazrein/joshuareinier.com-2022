import { useState } from "react";

export default function Carousel(props) {
  return (
    <div class="w-full h-screen overflow-x-scroll carousel">
      <div class="h-full w-fit flex">{props.children}</div>
    </div>
  );
}
