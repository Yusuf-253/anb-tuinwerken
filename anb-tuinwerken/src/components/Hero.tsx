"use client";
import { motion } from "framer-motion";
import HeroGrid from "./HeroGrid";
import styles from "@/styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <HeroGrid />
      
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={styles.content}
        >
          {/* HET LOGO IS TERUG */}
          <div className={styles.logoWrapper}>
            <img src="/anb-logo.png" alt="ANB Tuinwerken Logo" />
          </div>

          <h1 className={styles.title}>Vakmanschap dat groeit</h1>
          
          <p className={styles.description}>
            ANB Tuinwerken: Uw partner voor boomverzorging en totale tuinrenovatie in regio Gent.
          </p>
          
          <div className={styles.actions}>
            <button className={styles.buttonPrimary}>
              Ontdek onze diensten
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;