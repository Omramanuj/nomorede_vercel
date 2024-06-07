"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./auth.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const imagesRight = [
  { src: "https://storage.googleapis.com/nomorede-frontend/right/lleft.png", alt: "Mercury OS" },
  { src: "https://storage.googleapis.com/nomorede-frontend/right/RIGHT1.jpeg", alt: "Image 1" },
  { src: "https://storage.googleapis.com/nomorede-frontend/right/RIGHT2.jpeg", alt: "Image 2" },
  { src: "https://storage.googleapis.com/nomorede-frontend/right/RIGHT3.jpeg", alt: "Image 3" },
  { src: "https://storage.googleapis.com/nomorede-frontend/right/RIGHT4.jpeg", alt: "Image 4" },
  { src: "https://storage.googleapis.com/nomorede-frontend/right/RIGHT7.jpeg", alt: "Image 5" },
  { src: "https://storage.googleapis.com/nomorede-frontend/right/RIGHT5.jpeg", alt: "Image 6" },
];

const imagesLeft = [
  { src: "https://storage.googleapis.com/nomorede-frontend/left/Left1.jpeg", alt: "Worlds" },
  { src: "https://storage.googleapis.com/nomorede-frontend/left/left.png", alt: "Image 1" },
  { src: "https://storage.googleapis.com/nomorede-frontend/left/left(1).png", alt: "Image 2" },
  { src: "https://storage.googleapis.com/nomorede-frontend/left/Left1.jpeg", alt: "Image 3" },
  { src: "https://storage.googleapis.com/nomorede-frontend/left/left4.jpeg", alt: "Image 4" },
  { src: "https://storage.googleapis.com/nomorede-frontend/left/left3.jpeg", alt: "Image 5" },
  { src: "https://storage.googleapis.com/nomorede-frontend/left/left5.jpeg", alt: "Image 6" },
];

const ImageList = ({ images }) => {

  return (
    <div className={styles.imageContainer}>

      {images.map((image, index) => (
        <div
          key={index}
          className={styles.imageWrapper}
          style={{ zIndex: 7 - index, animationDelay: `${index * 0.5}s` }}
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
};

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
