import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
export const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.profileContainer}>
          <img src="/pr.webp" alt="Profile" className={styles.avatar} />
          <div className={styles.userInfo}>
            <h2 className={styles.name}>Anastasiia Mls</h2>
            <p className={styles.username}>
              @mls - <Link href="/">follow</Link>{" "}W
            </p>
          </div>
        </div>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sint eaque
          dignissimos ullam commodi eos adipisci facere! Quis id explicabo ipsam
         
        </p>
        <div className={styles.imageContainer}>
          <Image src="/try3.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.foot}>
          {" "}
          <Link href="/" className={styles.link}>
            Read More
          </Link>
          <button className={styles.foot_but}>book meet</button>
        </div>
      </div>
    </div>
  );
};
