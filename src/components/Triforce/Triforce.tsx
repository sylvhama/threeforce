import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

import { Triangle } from "./components";

function useTrianglePosition(
  originX: number,
  originY: number,
  destinationX: number,
  destinationY: number,
  down = true
) {
  const [x, setX] = useState(originX);
  const [y, setY] = useState(originY);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      const step = down ? -0.5 : 0.5;

      if (y !== destinationY) {
        setY((y) => y + step);
      }
    }
  });

  return {
    x,
    y,
    ref
  };
}

export function Triforce() {
  const groupRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotateY(0.05);
    }
  });

  const { x: topX, y: topY, ref: topRef } = useTrianglePosition(0, 104, 0, 24);
  const { x: leftX, y: leftY, ref: leftRef } = useTrianglePosition(
    9,
    -78,
    9,
    6,
    false
  );
  const { x: rightX, y: rightY, ref: rightRef } = useTrianglePosition(
    -9,
    -78,
    -9,
    6,
    false
  );

  return (
    <group ref={groupRef}>
      <Triangle ref={topRef} x={topX} y={topY} />
      <Triangle ref={leftRef} x={leftX} y={leftY} />
      <Triangle ref={rightRef} x={rightX} y={rightY} />
    </group>
  );
}

// 0 24
// 9 6
// -9 6
