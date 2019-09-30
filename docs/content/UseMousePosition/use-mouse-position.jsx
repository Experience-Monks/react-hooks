import React from 'react';
import { useMousePosition } from 'jam3-hooks';

const MousePosition = () => {
  const { x, y } = useMousePosition()

  return (
    <div>
      Mouse position x: {x}
      <br />
      Mouse position y: {y}
    </div>
  )
};
export default MousePosition
