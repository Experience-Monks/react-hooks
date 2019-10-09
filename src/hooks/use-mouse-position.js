import { useEffect, useState } from "react";
import { isBrowser } from "../util";

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY });
    isBrowser && window.addEventListener("mousemove", setFromEvent);

    return () => {
      isBrowser && window.removeEventListener("mousemove", setFromEvent);
    };
  }, [setPosition]);

  return position;
};

export default useMousePosition;
