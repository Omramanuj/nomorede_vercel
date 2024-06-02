import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./waitListFooter.module.css";

export default function WaitListFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>@ALL RIGHTS RESERVED</div>
      <div className={styles.social}>
        <button className={styles.button}>
          <FaTwitter className={styles.icon} />
          TWITTER
        </button>
        <button className={styles.button}>
          <FaInstagram className={styles.icon} />
          INSTAGRAM
        </button>
        <button className={styles.button}>
          <FaLinkedin className={styles.icon} />
          LINKEDIN
        </button>
      </div>
    </div>
  );
}
