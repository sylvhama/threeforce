import { Shape } from "three";
import { useSpring, animated } from "@react-spring/three";

interface Props {
  originX: number;
  originY: number;
  destinationX: number;
  destinationY: number;
  length?: number;
}

interface Animation {
  position: [x: number, y: number, z: number];
  rotationY: number;
  scale: number;
}

export const Triangle = ({
  originX,
  originY,
  destinationX,
  destinationY,
  length = 8,
}: Props) => {
  const shape = new Shape()
    .moveTo(0, 0)
    .lineTo(-length, length * -2)
    .lineTo(length, length * -2)
    .lineTo(0, 0);

  const extrudeSettings = {
    depth: 4,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 2,
    bevelSize: 1,
    bevelThicksness: 1,
  };

  const { position, rotationY, scale } = useSpring<Animation>({
    to: {
      position: [destinationX, destinationY, 0],
      rotationY: Math.PI * 10,
      scale: 1,
    },
    from: { position: [originX, originY, 0], rotationY: 0, scale: 0.25 },
    config: {
      duration: 5300,
    },
  });

  return (
    <animated.mesh position={position} rotation-y={rotationY} scale={scale}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial color="#eec036" />
    </animated.mesh>
  );
};
