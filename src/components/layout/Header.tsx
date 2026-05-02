"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/Header.module.scss";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false); // Sluit menu na klik
    const element = document.getElementById(id);
    if (element) {
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
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuActive : ""}`}>
      <div className={styles.container}>
        {/* De bedrijfsnaam verdwijnt op mobiel via CSS */}
        <div className={styles.logoText} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          ANB Tuinwerken
        </div>

        {/* Hamburger Icoon */}
        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigatie Links */}
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
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