import { Featured } from "@/components/featured/Featured";
import styles from "../../Home/homepage.module.css";
import React from "react";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/Menu/Menu";
import StylistProfile from "@/components/Profile/stylistProfile/stylistProfile";

export default function Home({ params }) {
  return (
    <div className={styles.container}>
      {/* <CategoryList /> */}
      <div className={styles.midSection}>
        <div className={styles.content}>
         
         <StylistProfile partner_id={params.partner_id}/>
          <Menu />
        </div>
      </div>
    </div>
  );
}
