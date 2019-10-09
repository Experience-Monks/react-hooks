import { useEffect, useState } from "react";
import { isBrowser } from "../util";

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      const math = (100 * window.scrollY) / (document.documentElement.scrollHeight - window.innerHeight);
      setProgress(math.toFixed(0));
    };

    isBrowser && window.addEventListener("scroll", updateHeight);
    return () => {
      isBrowser && window.removeEventListener("scroll", updateHeight);
    };
  }, [setProgress]);

  return progress;
};

export default useScrollProgress;
