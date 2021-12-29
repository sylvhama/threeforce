// @ts-ignore
import styles from "./StartScreen.module.css";

interface Props {
  start(): void;
}

export function StartScreen({ start }: Props) {
  return (
    <div className={styles.StartContainer}>
      <button
        className={styles.Start}
        type="button"
        onClick={start}
        aria-describedby="warning"
      >
        Start
      </button>
      <small id="warning">there will be sound</small>
    </div>
  );
}
