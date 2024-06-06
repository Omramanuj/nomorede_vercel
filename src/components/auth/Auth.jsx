"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./auth.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Auth = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/join-waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name: null, mobile: null }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setMessage(result.message);
        setEmail("");
        toast.success(result.message);
      } else {
        const error = await response.json();
        setMessage(error.message);
        toast.error(error.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("There was an error joining the waitlist. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <Section
        images={imagesRight}
        headerText="AFTER"
        headerClass={styles.headerYesterday}
      />
      <MidSection
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
        message={message}
      />
      <Section
        images={imagesLeft}
        headerText="BEFORE"
        headerClass={styles.headerTomorrow}
      />
      <ToastContainer />
    </div>
  );
};

const Section = ({ images, headerText, headerClass }) => (
  <div className={styles.section}>
    <ImageList images={images} />
    <h2 className={headerClass}>{headerText}</h2>
  </div>
);

const MidSection = ({ email, setEmail, handleSubmit, message }) => (
  <div className={styles.midSection}>
    <h2 className={styles.headerToday}>STYLE - THE NEW YOU</h2>
    <p className={styles.description}>
      Our analysis will help you manage your fashion looks better, and we will
      provide the best suitable products for you.
    </p>
    <p className={styles.description}>
      Signup for Early-Bird Discounts and create your science-backed style!
    </p>
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter Your Email"
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className={styles.buttonContainer}>
        <button type="submit" className={styles.button}>
          Join our waitlist
        </button>
      </div>
    </form>
    {/* {message && <p className={styles.message}>{message}</p>} */}
  </div>
);

export default Auth;
