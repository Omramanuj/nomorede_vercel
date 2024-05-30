import React from "react";
import styles from "./waitListFooter.module.css";

export default function WaitListFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>@ALL RIGHTS RESERVED</div>
      <div className={styles.social}>
        <button className={styles.button}>TWITTER</button>
        <button className={styles.button}>INSTAGRAM</button>
        <button className={styles.button}>LINKEDIN</button>
      </div>
    </div>
  );
}
