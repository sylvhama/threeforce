import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import useSound from "use-sound";

import { Triforce } from "./components";

// @ts-ignore
import titleSound from "./assets/title.mp3";
// @ts-ignore
import swordSound from "./assets/sword.mp3";
// @ts-ignore
import styles from "./Scene.module.css";
// @ts-ignore
import masterSword from "./assets/mastersword.gif";

function Title() {
  const [playSword] = useSound(swordSound);

  return (
    <div className={styles.TitleWrapper}>
      <div className={styles.TitleContainer}>
        <img
          className={styles.Sword}
          onTransitionEnd={() => playSword()}
          src={masterSword}
          alt="Master Sword"
        />
        <h1>
          <span className={styles.Legend}>the legend of</span>
          <span className={styles.Zelda}>Zelda</span>
          <span className={styles.Z} aria-hidden="true">
            Z
          </span>
          <span className={styles.Link}>a link to the past</span>
        </h1>
      </div>
    </div>
  );
}

export function Scene() {
  const [isStarted, setIsStarted] = useState(false);
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  const [playTitle] = useSound(titleSound);

  if (!isStarted)
    return (
      <div className={styles.StartContainer}>
        <button
          className={styles.Start}
          type="button"
          onClick={() => {
            setIsStarted(true);
            playTitle();
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
      <Title />
      <footer>
        © 2021 <a href="https://shamann.dev">Sylvain Hamann</a>
      </footer>
    </div>
  );
}
