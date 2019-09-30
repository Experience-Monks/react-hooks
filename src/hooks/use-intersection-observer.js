import { useState, useEffect } from "react";

const INTERSECTION_OBSERVER_CONFIG = {
  threshold: 0.0,
  triggerOnce: true,
  rootMargin: "0px"
};

/**
 * React hook that return is the object is intersected
 */
function useIntersectionObserver(ref, config = {}, rootRef = null) {
  const [isIntersecting, setIntersecting] = useState(false);

  const options = {
    root: rootRef && rootRef.current,
    ...INTERSECTION_OBSERVER_CONFIG,
    ...config
  };

  useEffect(() => {
    const observer = new IntersectionObserver(function(entries) {
      if (options.triggerOnce) {
        if (entries[0].isIntersecting) {
          setIntersecting(true);
          observer.unobserve(ref.current);
        }
      } else {
        setIntersecting(entries[0].isIntersecting);
      }
    }, options);

    if (!ref) {
      console.warn(`No target specified - use useRef() hook to pass the target value`);
      return;
    }

    const { current } = ref;

    observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [ref, options, setIntersecting]);

  return isIntersecting;
}

export default useIntersectionObserver;
