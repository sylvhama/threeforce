import { PropsWithChildren } from "react";

// @ts-ignore
import styles from "./Center.module.css";

export function Center({ children }: PropsWithChildren<{}>) {
  return <div className={styles.Center}>{children}</div>;
}
