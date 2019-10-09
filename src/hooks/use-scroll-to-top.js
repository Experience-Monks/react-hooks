import { useRef } from "react";
import { isBrowser } from "../util";

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
function useScrollToTop() {
  const hasScrolled = useRef(false);

  if (!hasScrolled.current) {
    hasScrolled.current = true;
    if (isBrowser) window.scrollTo(0, 0);
  }
}

export default useScrollToTop;
