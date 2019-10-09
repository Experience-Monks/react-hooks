import React, { useRef, useCallback } from "react";
import { useOnHover } from "@jam3/react-hooks";

const OnHover = () => {
  const hoverRef = useRef(null);

  useOnHover(hoverRef, onHoverIn, onHoverOut);

  function onHoverIn() {
    console.log("Hovering In");
    hoverRef.current.style.backgroundColor = "green";
  }

  function onHoverOut() {
    console.log("Hovering Out");
    hoverRef.current.style.backgroundColor = "red";
  }

  return (
    <div
      ref={hoverRef}
      style={{ color: "white", width: "100px", height: "100px", backgroundColor: "red", transition: "background-color 0.5s ease-in" }}
    >
      Hover me
    </div>
  );
};
export default OnHover;
