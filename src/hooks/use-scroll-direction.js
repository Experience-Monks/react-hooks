import { useEffect, useState, useCallback, useRef } from "react";
import { useDebouncedCallback } from "use-debounce";
import { getScrollTop, isBrowser } from "../util/";

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";
const TOP = "top";
const defaultThrottle = 100;

export default function useScrollDirection(throttle = defaultThrottle) {
  const lastScrollY = useRef(getScrollTop());
  const [scrollDir, setScrollDir] = useState(TOP);

  const [handleScroll] = useDebouncedCallback(
    useCallback(() => {
      const scrollY = getScrollTop();
      setScrollDir(scrollY === 0 ? TOP : scrollY > lastScrollY.current ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY.current = scrollY;
    }, [setScrollDir]),
    throttle,
    { maxWait: throttle }
  );

  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return scrollDir;
}
