import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import useSound from "use-sound";

import { Triforce } from "./components";

// @ts-ignore
import titleSound from "./components/Triforce/title.mp3";

export function Scene() {
  const [play] = useSound(titleSound);

  const [start, setStart] = useState(false);

  return start ? (
    <Canvas camera={{ position: [0, 0, -100] }}>
      <pointLight position={[0, 0, -200]} />
      <Triforce play={play} />
    </Canvas>
  ) : (
    <button type="button" onClick={() => setStart(true)}>
      Start
    </button>
  );
}
