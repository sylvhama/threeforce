import { Shape } from "three";
import { forwardRef } from "react";

interface Props {
  x: number;
  y: number;
  length?: number;
}

export const Triangle = forwardRef<THREE.Mesh, Props>(
  ({ x, y, length = 8 }, ref) => {
    const shape = new Shape()
      .moveTo(x, y)
      .lineTo(x - length, y + length * -2)
      .lineTo(x + length, y + length * -2)
      .lineTo(x, y);

    const extrudeSettings = {
      depth: 4,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 2,
      bevelSize: 1,
      bevelThicksness: 1
    };

    return (
      <mesh ref={ref} position={[0, 0, 0]}>
        <extrudeGeometry args={[shape, extrudeSettings]} />
        <meshStandardMaterial color="#eec036" />
      </mesh>
    );
  }
);
