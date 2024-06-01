// app/components/GetInTouch.js
import styles from "./Contact.module.css";
import { CiLocationOn } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

export default function GetInTouch() {
  return (
    <div className={styles.getInTouchContainer}>
      <h2>Get in Touch</h2>
      <div className={styles.contactDetails}>
        <div>
          <CiLocationOn className={styles.Icon} />

          <h3>Address</h3>
          <p>Weifield Group Contracting</p>
          <p>6950 S. Jordan Road</p>
          <p>Centennial, CO 80112</p>
          {/* Add more office addresses here */}
        </div>
        <div>
          <CiHeadphones className={styles.Icon} />
          <h3>Phone</h3>
          <p>Weifield Group Contracting: 877.WEIFIELD </p>
          <p>phone: +91 xxxxx 12345</p>
          {/* Add more phone details here */}
        </div>
        <div>
        <CiMail className={styles.Icon} />
          <h3>Email</h3>
          <p>Request for Proposal: Info@weifieldgroup.com</p>
          {/* Add more email details here */}
        </div>
      </div>
    </div>
  );
}
