"use client"
import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";

import Image from "next/image";



export default function ComponentMenuPost({ stylist }) {


  return (

   
    <>
      <Link href={`/stylist/${stylist.partner_id}`}  className={styles.item} replace>
        <div className={styles.item}>
          {stylist.profile_picture && (
            <div className={styles.imageContainer}>
              <img
                src={stylist.profile_picture}
                alt="Stylist"
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <h3 className={styles.postTitle}>{stylist.name}</h3>
            <div className={styles.detail}>
              <span className={styles.expertise}>
                {stylist.experties.join(", ")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
