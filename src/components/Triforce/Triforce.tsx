import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

import { Triangle } from "./components";

interface Position {
  originX: number;
  originY: number;
  destinationX: number;
  destinationY: number;
}

function createPosition(
  originX: number,
  originY: number,
  destinationX: number,
  destinationY: number
): Position {
  return {
    originX,
    originY,
    destinationX,
    destinationY
  };
}

const topPosition = createPosition(0, 104, 0, 24);
const leftPosition = createPosition(89, -72, 9, 6);
const rightPosition = createPosition(-89, -72, -9, 6);

function useTrianglePosition(position: Position, down = true, left = true) {
  const [x, setX] = useState(position.originX);
  const [y, setY] = useState(position.originY);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      const step = 0.25;
      const stepY = down ? -step : step;
      const stepX = left ? -step : step;

      if (y !== position.destinationY) {
        setY((y) => y + stepY);
        ref.current.rotateY(0.08);
      } else {
        ref.current.rotation.y = 0;
      }

      if (x !== position.destinationX) {
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
  onFinish(): void;
}

export function Triforce({ onFinish }: Props) {
  const { x: topX, y: topY, ref: topRef } = useTrianglePosition(topPosition);

  const { x: leftX, y: leftY, ref: leftRef } = useTrianglePosition(
    leftPosition,
    false
  );

  const { x: rightX, y: rightY, ref: rightRef } = useTrianglePosition(
    rightPosition,
    false,
    false
  );

  useEffect(() => {
    if (
      topY === topPosition.destinationY &&
      topX === topPosition.destinationX
    ) {
      if (
        leftY === leftPosition.destinationY &&
        leftX === leftPosition.destinationX
      ) {
        if (
          rightY === rightPosition.destinationY &&
          rightX === rightPosition.destinationX
        ) {
          onFinish();
        }
      }
    }
  }, [onFinish, topY, topX, leftY, leftX, rightY, rightX]);

  return (
    <group position={[0, -5, 0]}>
      <Triangle ref={topRef} x={topX} y={topY} />
      <Triangle ref={leftRef} x={leftX} y={leftY} />
      <Triangle ref={rightRef} x={rightX} y={rightY} />
    </group>
  );
}

// 0 24
// 9 6
// -9 6
