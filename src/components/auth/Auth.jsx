"use client";

import React from "react";
import styles from "./auth.module.css";
import Image from "next/image";
import { useState } from "react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.yesterday}`}>
        <h2 className={styles.headerYesterday}>Yesterday</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/coding.png"
              alt="Worlds"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/travel.png"
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
          {isSignUp && (
            <input type="text" placeholder="Name" className={styles.input} />
          )}
          <input type="email" placeholder="Email" className={styles.input} />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              {isSignUp ? "Sign Up" : "Login"}
            </button>
            <button
              type="button"
              className={styles.button}
              onClick={toggleForm}
            >
              {isSignUp ? "Back to Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
      <div className={`${styles.section} ${styles.tomorrow}`}>
        <h2 className={styles.headerTomorrow}>Tomorrow</h2>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/food.png"
              alt="Mercury OS"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/p1.jpeg"
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
