import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import useSound from "use-sound";

import { Triforce } from "./components";

// @ts-ignore
import titleSound from "./components/Triforce/title.mp3";
// @ts-ignore
import styles from "./Scene.module.css";

export function Scene() {
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const [play] = useSound(titleSound);

  if (!isStarted)
    return (
      <div className={styles.StartContainer}>
        <button
          className={styles.Start}
          type="button"
          onClick={() => {
            setIsStarted(true);
            play();
          }}
        >
          Start
        </button>
        <small>there will be sound</small>
      </div>
    );

  return (
    <div
      className={`${styles.MainContainer} ${
        isAnimationDone ? styles.TransitionDone : ""
      }`}
    >
      <Canvas style={{ zIndex: 1 }} camera={{ position: [0, 0, -130] }}>
        <Triforce onFinish={() => setIsAnimationDone(true)} />
        <pointLight position={[0, 0, -200]} />
      </Canvas>
      <div className={styles.TitleContainer}>
        <h1>
          <span className={styles.Legend}>the legend of</span>
          <span className={styles.Zelda}>Zelda</span>
          <span className={styles.Link}>a link to the past</span>
        </h1>
      </div>
      <footer>© 2021 Sylvain Hamann </footer>
    </div>
  );
}
