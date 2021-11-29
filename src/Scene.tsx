import { Canvas } from "@react-three/fiber";

import { Triforce } from "./components";

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, -100] }}>
      <pointLight position={[0, 0, -200]} />
      <Triforce />
    </Canvas>
  );
}
