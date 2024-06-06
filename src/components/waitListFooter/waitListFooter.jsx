import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./waitListFooter.module.css";

export default function WaitListFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.text}>@ALL RIGHTS RESERVED</div>
      <div className={styles.social}>
        <a href="https://www.instagram.com/nomorede_/" target="_blank" className={styles.button}>
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/company/nomorede/" target="_blank" className={styles.button}>
          <FaLinkedin className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
