"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // De functie voor de vloeiende scroll
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // We trekken een beetje hoogte af (bijv. 80px) zodat de titel niet 
      // direct achter de sticky header verdwijnt
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} style={{cursor: 'pointer'}}>
          ANB Tuinwerken
        </div>
        <nav className={styles.nav}>
          <a href="#diensten" onClick={(e) => handleScrollTo(e, 'diensten')}>Diensten</a>
          <a href="#projecten" onClick={(e) => handleScrollTo(e, 'projecten')}>Projecten</a>
          <a href="#over-ons" onClick={(e) => handleScrollTo(e, 'over-ons')}>Over Ons</a>
          <a href="#contact" className={styles.cta} onClick={(e) => handleScrollTo(e, 'contact')}>
            Offerte aanvragen
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;