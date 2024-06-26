"use client";

import React from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AuthLinks } from "../authLinks/AuthLinks";
import { ThemeToggle } from "../themeToggle/ThemeToggle";
import { useUser } from "@/context/UserContext";

export const Navbar = () => {
  const { partnerId } = useUser();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Nomorede</div>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={styles.searchIcon}
          />
        </button>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <span href="/Home" className={styles.link}>
          Homepage
        </span>
        <Link href="/contactUs" className={styles.link}>
          Contact
        </Link>
        {partnerId ? (
          <span href="/profile" className={styles.link}>
            Profile
          </span>
        ) : (
          <span href="/LogIn" className={styles.link}>
            LogIn
          </span>
        )}
       

        <AuthLinks />
      </div>
    </div>
  );
};
