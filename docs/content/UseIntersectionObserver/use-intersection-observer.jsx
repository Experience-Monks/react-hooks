import React, { useRef } from "react";
import { useIntersectionObserver } from "@jam3/react-hooks";

const IntersectionObserver = () => {
  const containerRef = useRef(null);
  const isIntersecting = useIntersectionObserver(containerRef, { rootMargin: "-200px", triggerOnce: false });

  const containerRef2 = useRef(null);
  const isIntersecting2 = useIntersectionObserver(containerRef2, { rootMargin: "-200px" });



  return (
    <>
      <div style={{ height: "100vh" }}>White Space</div>
      <span style={{display: "block"}}>Watching intersect using -200px of rootMargin</span>
      <span style={{display: "block"}}>Triggering multiple times</span>
      <div ref={containerRef} style={{height: '300px', transition: 'background-color 0.5s ease-out 0.5s', backgroundColor: isIntersecting ? "springgreen" : "crimson"}}>{isIntersecting ? "Intersected" : "Not Yet"}</div>

      <span style={{marginTop: "400px", display: "block"}}>Watching intersect using -200px of rootMargin</span>
      <span style={{display: "block"}}>Triggering once</span>
      <div ref={containerRef2} style={{height: '300px', transition: 'background-color 0.5s ease-out 0.5s', backgroundColor: isIntersecting2 ? "springgreen" : "crimson"}}>{isIntersecting2 ? "Intersected" : "Not Yet"}</div>
    </>
  );
};
export default IntersectionObserver;