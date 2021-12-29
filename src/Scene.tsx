import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import useSound from "use-sound";

import { Triforce, Title, StartScreen, Footer } from "./components";

// @ts-ignore
import titleSound from "assets/title.mp3";
// @ts-ignore
import styles from "./Scene.module.css";

export function Scene() {
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const [playTitle] = useSound(titleSound);

  if (!isStarted)
    return (
      <StartScreen
        start={() => {
          setIsStarted(true);
          playTitle();
          document.querySelector("main")?.focus();
        }}
      />
    );

  return (
    <div
      style={{ backgroundColor: isAnimationDone ? "#8d9fe0" : undefined }}
      className={styles.MainContainer}
    >
      {isAnimationDone && <Title />}
      <Canvas style={{ zIndex: 2 }} camera={{ position: [0, 0, -130] }}>
        <Triforce onFinish={() => setIsAnimationDone(true)} />
        <pointLight position={[0, 0, -200]} />
      </Canvas>
      {isAnimationDone && <Footer />}
    </div>
  );
}
