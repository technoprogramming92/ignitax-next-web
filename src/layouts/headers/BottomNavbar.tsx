// components/BottomNavbar.js

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./BottomNavbar.module.css";

const BottomNavbar = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // downscroll
        setIsSticky(false);
      } else {
        // upscroll
        setIsSticky(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.bottomNavbar} ${
        isSticky ? styles.sticky : styles.hidden
      }`}
    >
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link legacyBehavior href='/'>
            <a className={styles.navLink}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href='/about'>
            <a className={styles.navLink}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href='/services'>
            <a className={styles.navLink}>Services</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link legacyBehavior href='/contact'>
            <a className={styles.navLink}>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavbar;
