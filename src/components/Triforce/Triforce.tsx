import { useState, useRef, useEffect } from "react";
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
    destinationY,
  };
}

const topPosition = createPosition(0, 104, 0, 24);
const leftPosition = createPosition(89, -72, 9, 6);
const rightPosition = createPosition(-89, -72, -9, 6);

function useTrianglePosition(
  position: Position,
  down = true,
  left = true
): [React.RefObject<THREE.Mesh>, boolean] {
  const [hasFinished, setHasFinished] = useState(false);
  const ref = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (ref.current) {
      const step = 0.25;
      const stepY = down ? -step : step;
      const stepX = left ? -step : step;

      if (ref.current.position.y !== position.destinationY) {
        ref.current.position.y = ref.current.position.y + stepY;
        ref.current.rotateY(0.08);
      }

      if (ref.current.position.x !== position.destinationX) {
        ref.current.position.x = ref.current.position.x + stepX;
      }

      if (
        ref.current.position.y === position.destinationY &&
        ref.current.position.x === position.destinationX
      ) {
        ref.current.rotation.y = 0;
        setHasFinished(true);
      }
    }
  });

  return [ref, hasFinished];
}

interface Props {
  onFinish(): void;
}

export function Triforce({ onFinish }: Props) {
  const [topRef, topHasFinished] = useTrianglePosition(topPosition);
  const [leftRef, leftHasFinished] = useTrianglePosition(leftPosition, false);
  const [rightRef, rightHasFinished] = useTrianglePosition(
    rightPosition,
    false,
    false
  );

  useEffect(() => {
    if (topHasFinished && leftHasFinished && rightHasFinished) {
      onFinish();
    }
  }, [topHasFinished, leftHasFinished, rightHasFinished]);

  return (
    <group position={[0, -5, 0]}>
      <Triangle
        originX={topPosition.originX}
        originY={topPosition.originY}
        ref={topRef}
      />
      <Triangle
        originX={leftPosition.originX}
        originY={leftPosition.originY}
        ref={leftRef}
      />
      <Triangle
        originX={rightPosition.originX}
        originY={rightPosition.originY}
        ref={rightRef}
      />
    </group>
  );
}
