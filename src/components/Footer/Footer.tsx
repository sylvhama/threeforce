import { FadeIn } from "components";

// @ts-ignore
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <FadeIn>
        © 2021 <a href="https://shamann.dev">Sylvain Hamann</a>
      </FadeIn>
    </footer>
  );
}
