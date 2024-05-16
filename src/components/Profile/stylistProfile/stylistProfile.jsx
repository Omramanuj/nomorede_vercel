import React from "react";
import styles from "./stylistProfile.module.css";
import { stylists } from "@/data/stylistsList";
import { CardList } from "@/components/cardList/CardList";
import {Card} from "@/components/card/Card";

export default function StylistProfile(partner_id) {
  let stylist = {};
  for (let i of stylists) {
    // console.log(i);
    if (i.partner_id === partner_id.partner_id) {
      console.log(i.partner_id);
      console.log(partner_id.partner_id);
      stylist = i;
      // console.log(stylist);
    break;
    }
    else {
      console.log(false);
    }
  }
 
  return (
    <>
      <div className={styles.container}>
      <div className={styles.contain}>
        <img
          src={stylist.profile_picture}
          alt="Stylist"
          className={styles.profileImage}
        />
        <div className={styles.info}>
          <h2 className={styles.name}>{stylist.name}</h2>
          {stylist.address && stylist.address.length > 0 && (
            <p className={styles.state}>State: {stylist.address[0].state}</p>
          )}
          <p className={styles.workExperience}>
            Work Experience: {stylist.work_experience}
          </p>
          {stylist.experties && (
            <p className={styles.expertise}>
              Expertise: {stylist.experties.join(", ")}
            </p>
          )}{" "}
        </div>
      </div>
        <Card />
      </div>
        
    </>
  );
}
