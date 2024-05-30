"use client";

import React from "react";
import Image from "next/image";
import styles from "./auth.module.css";

const imagesRight = [
  { src: "/right/lleft.png", alt: "Mercury OS" },
  { src: "/right/Right1.jpeg", alt: "Another image" },
  { src: "/right/Right2.jpeg", alt: "Another image" },
  { src: "/right/Right3.jpeg", alt: "Another image" },
  { src: "/right/Right4.jpeg", alt: "Another image" },
  { src: "/right/Right7.jpeg", alt: "Another image" },
  { src: "/right/Right5.jpeg", alt: "Another image" },
];

const imagesLeft = [
  { src: "/left/Lefrt2.jpeg", alt: "Worlds" },
  { src: "/left/left.png", alt: "Another image" },
  { src: "/left/left(1).png", alt: "Another image" },
  { src: "/left/Left1.jpeg", alt: "Another image" },
  { src: "/left/left4.jpeg", alt: "Another image" },
  { src: "/left/left3.jpeg", alt: "Another image" },
  { src: "/left/left5.jpeg", alt: "Another image" },
];

const ImageList = ({ images }) => (
  <div className={styles.imageContainer}>
    {images.map((image, index) => (
      <div
        key={index}
        className={styles.imageWrapper}
        style={{ zIndex: 7 - index, animationDelay: `${index * 1}s` }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
    ))}
  </div>
);

const Auth = () => (
  <div className={styles.container}>
    <Section images={imagesRight} headerText="After" headerClass={styles.headerYesterday} />
    <MidSection />
    <Section images={imagesLeft} headerText="Before" headerClass={styles.headerTomorrow} />
  </div>
);

const Section = ({ images, headerText, headerClass }) => (
  <div className={styles.section}>
    <ImageList images={images} />
    <h2 className={headerClass}>{headerText}</h2>
  </div>
);

const MidSection = () => (
  <div className={styles.midSection}>
    <h2 className={styles.headerToday}>Join our waitlist</h2>
    <p className={styles.description}>
      Our analysis will help you manage your fashion looks better, and we will provide the best suitable products for you.
    </p>
    <form className={styles.form}>
      <input placeholder="Enter Your Email" className={styles.input} />
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>Join our waitlist</button>
      </div>
    </form>
  </div>
);

export default Auth;
