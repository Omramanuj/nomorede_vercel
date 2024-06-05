import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./waitListFooter.module.css";

export default function WaitListFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>@ALL RIGHTS RESERVED</div>
      <div className={styles.social}>
        <button className={styles.button} >
          <FaTwitter className={styles.icon} />
          TWITTER
        </button>
        <a href="https://www.instagram.com/nomorede_/" target="_blank">
        <button className={styles.button} >
          <FaInstagram className={styles.icon} />
          INSTAGRAM
        </button>
        </a>
        <a href="https://www.linkedin.com/company/nomorede/" target="_blank">
        <button className={styles.button}>
          <FaLinkedin className={styles.icon} />
          LINKEDIN
        </button>
        </a>
      </div>
    </div>
  );
}
