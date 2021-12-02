import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import { Triangle } from "./components";

function useTrianglePosition(
  originX: number,
  originY: number,
  destinationX: number,
  destinationY: number,
  down = true,
  left = true
) {
  const [x, setX] = useState(originX);
  const [y, setY] = useState(originY);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      const step = 0.25;
      const stepY = down ? -step : step;
      const stepX = left ? -step : step;

      if (y !== destinationY) {
        setY((y) => y + stepY);
        ref.current.rotateY(0.08);
      } else {
        ref.current.rotation.y = 0;
      }

      if (x !== destinationX) {
        setX((x) => x + stepX);
      }
    }
  });

  return {
    x,
    y,
    ref
  };
}

interface Props {
  play(): void;
}

export function Triforce({ play }: Props) {
  useEffect(() => {
    play();
  }, [play]);

  const { x: topX, y: topY, ref: topRef } = useTrianglePosition(0, 104, 0, 24);

  const { x: leftX, y: leftY, ref: leftRef } = useTrianglePosition(
    89,
    -72,
    9,
    6,
    false
  );

  const { x: rightX, y: rightY, ref: rightRef } = useTrianglePosition(
    -89,
    -72,
    -9,
    6,
    false,
    false
  );

  return (
    <>
      <Triangle ref={topRef} x={topX} y={topY} />
      <Triangle ref={leftRef} x={leftX} y={leftY} />
      <Triangle ref={rightRef} x={rightX} y={rightY} />
    </>
  );
}

// 0 24
// 9 6
// -9 6
