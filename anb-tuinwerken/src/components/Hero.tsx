"use client";

import { motion } from "framer-motion";
import styles from "@/styles/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Vakmanschap dat groeit.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          ANB Tuinwerken: Uw partner voor boomverzorging en totale tuinrenovatie in regio Gent.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <button className={styles.buttonPrimary}>Ontdek onze diensten</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;