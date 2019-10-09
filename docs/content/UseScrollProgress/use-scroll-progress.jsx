import React from "react";
import { useScrollProgress } from "@jam3/react-hooks";

const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <>
      <div className="scroll" style={{ width: `${scrollProgress}%`, position: 'sticky', top: '5px', right:0, height: '4px', backgroundColor: 'red', transition: "width 0.15s ease-out" }}>{scrollProgress}%</div>
      <div style={{ height: "400vh" }}></div>
    </>
  );
};
export default ScrollProgress;
