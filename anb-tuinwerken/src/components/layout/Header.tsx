"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>ANB <span>Tuinwerken</span></div>
        
        <nav className={styles.navLinks}>
          <a href="#diensten">Diensten</a>
          <a href="#projecten">Projecten</a>
          <a href="#over-ons">Over ons</a>
          <a href="#contact" className={styles.cta}>Offerte aanvragen</a>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;