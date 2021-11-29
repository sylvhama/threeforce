import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

import { Triangle } from "./components";

export function Triforce() {
  const topRef = useRef<THREE.Mesh>(null);
  const leftRef = useRef<THREE.Mesh>(null);
  const rightRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (topRef.current) {
      topRef.current.rotation.y += 0.03;
    }
    if (leftRef.current) {
      leftRef.current.rotation.y += 0.03;
    }
    if (rightRef.current) {
      rightRef.current.rotation.y += 0.03;
    }
  });

  return (
    <>
      <Triangle ref={topRef} x={0} y={24} />
      <Triangle ref={leftRef} x={-9} y={6} />
      <Triangle ref={rightRef} x={9} y={6} />
    </>
  );
}
