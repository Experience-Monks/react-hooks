import React from "react";
import { useScrollDirection } from "@jam3/react-hooks";

const directions = {
  "up": "up 👆",
  "down": "down 👇",
  "top": "top 🔝"
}

const ScrollDirection = () => {
  const scrollingDir = useScrollDirection();

  return (
    <>
      <div className="scroll" style={{ position: 'sticky', top: '5px', left:0 }}>Is scrolling (direction): {directions[scrollingDir]}</div>
      <div style={{ height: "400vh" }}></div>
    </>
  );
};

export default ScrollDirection;
