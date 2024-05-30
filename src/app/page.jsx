import { Featured } from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import React from "react";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/Menu/Menu";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.midSection}>
        <div className={styles.content}>
          <CardList />
          <Menu />
        </div>
      </div>
      <Footer/>
    </div>
  );
}
