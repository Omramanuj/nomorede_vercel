import React from 'react';
import styles from './categoryList.module.css';
import Image from "next/image";

export const CategoryList = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/oner.png"
        alt="Categories"
        layout="responsive"
        width={2048}
        height={512}
        className={styles.image}
      />
    </div>
  );
};
