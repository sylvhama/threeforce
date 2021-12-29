import { useRef } from "react";
import useSound from "use-sound";

import { FadeIn } from "components";

// @ts-ignore
import masterSword from "assets/mastersword.gif";
// @ts-ignore
import swordSound from "assets/sword.mp3";
// @ts-ignore
import styles from "./Title.module.css";

export function Title() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const [playSword] = useSound(swordSound);

  return (
    <div className={styles.TitleWrapper}>
      <FadeIn>
        <div className={styles.TitleContainer}>
          <img
            className={styles.Sword}
            onAnimationEnd={() => playSword()}
            src={masterSword}
            alt="Master Sword"
          />
          <h1 ref={h1Ref}>
            <span className={styles.Legend}>the legend of</span>
            <span className={styles.Zelda}>Zelda</span>
            <span className={styles.Z} aria-hidden="true">
              Z
            </span>
            <span className={styles.Link}>a link to the past</span>
          </h1>
        </div>
      </FadeIn>
    </div>
  );
}
