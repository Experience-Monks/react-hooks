import React from "react";
import { useWindowSize } from "@jam3/react-hooks";

const WindowSize = () => {
  const { innerWidth, innerHeight } = useWindowSize(100);

  return (
    <div>
      window width: {innerWidth}
      <br />
      window height: {innerHeight}
    </div>
  );
};
export default WindowSize;
