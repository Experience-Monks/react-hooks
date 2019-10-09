import { useState, useEffect, useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
import { isBrowser } from "../util";

function getSize() {
  return {
    innerHeight: isBrowser ? window.innerHeight : 0,
    innerWidth: isBrowser ? window.innerWidth : 0
  };
}

function useWindowSize(debounce = 250) {
  const [windowSize, setWindowSize] = useState(getSize());

  const [handleResize] = useDebouncedCallback(
    useCallback(() => {
      setWindowSize(getSize());
    }, [setWindowSize]),
    debounce
  );

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return windowSize;
}

export default useWindowSize;
