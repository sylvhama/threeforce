import { PropsWithChildren } from "react";

// @ts-ignore
import styles from "./FadeIn.module.css";

export function FadeIn({ children }: PropsWithChildren<{}>) {
  return <div className={styles.FadeIn}>{children}</div>;
}
