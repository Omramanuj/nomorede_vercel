"use client";

import React from "react";
import styles from "./auth.module.css";
import Image from "next/image";

const Auth = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.yesterday}`}>
        <h2 className={styles.headerYesterday}>Yesterday</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/try8.png"
              alt="Worlds"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/try5.png"
              alt="Another image"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.profileContainer}>
          <img src="/pr.webp" alt="Profile" className={styles.avatar} />
          <div className={styles.userInfo}>
            <h2 className={styles.name}>Anastasiia Mls</h2>
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h2 className={styles.headerToday}>Nomorede</h2>
        <p className={styles.description}>
          Join a new fashion community. Connect, share, and celebrate the best
          styles every day.
        </p>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Mobile" className={styles.input} />
          <textarea
            placeholder="Description"
            className={styles.input}
            rows="4"
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
      <div className={`${styles.section} ${styles.tomorrow}`}>
        <h2 className={styles.headerTomorrow}>Tomorrow</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/px.jpg"
              alt="Mercury OS"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/try4.png"
              alt="Another image"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.profileContainer}>
          <img src="/pr.webp" alt="Profile" className={styles.avatar} />
          <div className={styles.userInfo}>
            <h2 className={styles.name}>Anastasiia Mls</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
