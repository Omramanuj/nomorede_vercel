// /app/stylist/[partner_id]/page.jsx

import React from "react";
import { Featured } from "@/components/featured/Featured";
import styles from "../../Home/homepage.module.css";
import { CategoryList } from "@/components/categoryList/CategoryList";
import { CardList } from "@/components/cardList/CardList";
import { Menu } from "@/components/Menu/Menu";
import StylistProfile from "@/components/Profile/stylistProfile/stylistProfile";

// Define and export the generateStaticParams function
export async function generateStaticParams() {
  const partners = getPartnersData(); // Replace with your data fetching logic

  return partners.map(partner => ({
    partner_id: partner.id.toString(),
  }));
}

function getPartnersData() {
  // Example function to get partners data
  // Replace this with your actual data fetching logic
  return [
    { id: 1, name: 'Partner 1' },
    { id: 2, name: 'Partner 2' },
    { id: 3, name: 'Partner 3' },
  ];
}

export default function Home({ params }) {
  return (
    <div className={styles.container}>
      <div className={styles.midSection}>
        <div className={styles.content}>
          <StylistProfile partner_id={params.partner_id} />
          <Menu />
        </div>
      </div>
    </div>
  );
}
