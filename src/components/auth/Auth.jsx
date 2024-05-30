"use client";

import React from "react";
import styles from "./auth.module.css";
import Image from "next/image";

const Auth = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} `}>
        <div className={styles.yesterday}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/lleft.png"
                alt="Mercury OS"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/Right1.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/Right2.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/Right3.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/Right4.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/Right7.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/right/Right5.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
          </div>
          <h2 className={styles.headerYesterday}>After</h2>
          {/* <div className={styles.profileContainer}>
            <img src="/pr.webp" alt="Profile" className={styles.avatar} />
            <div className={styles.userInfo}>
              <h2 className={styles.name}>Anastasiia Mls</h2>
            </div>
          </div> */}
        </div>
      </div>
   
        <div className={styles.midSection}>
        <h2 className={styles.headerToday}>join our waitlist</h2>
        <p className={styles.description}>
          Our analysis will help you to manage your fashion looks better and we
          will provide the best sutaible products for you .
        </p>
        <form className={styles.form}>
          <input
            placeholder="Enter Your Email"
            className={styles.input}
            rows="4"
          />
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.button}>
              Join our waitlist
            </button>
          </div>
        </form>
        </div>

      <div className={`${styles.section} `}>
        <div className={styles.tomorrow}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/left/Lefrt2.jpeg"
                alt="Worlds"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>

            <div className={styles.imageWrapper}>
              <Image
                src="/left/left.png"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/left/left(1).png"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/left/Left1.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/left/left4.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/left/left3.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
            <div className={styles.imageWrapper}>
              <Image
                src="/left/left5.jpeg"
                alt="Another image"
                layout="fill"
                objectFit="cover"
                className={styles.image}
              />
            </div>
          </div>
          <h2 className={styles.headerTomorrow}>Before</h2>
          {/* <div className={styles.profileContainer}>
          <img src="/pr.webp" alt="Profile" className={styles.avatar} />
          <div className={styles.userInfo}>
            <h2 className={styles.name}>Anastasiia Mls</h2>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
