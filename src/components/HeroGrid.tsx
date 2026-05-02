"use client";

import { motion } from "framer-motion";
import styles from "@/styles/HeroGrid.module.scss";

const images = [
  "/tuinfoto1.jpeg", 
  "/tuinfoto2.jpeg",
  "/tuinfoto3.jpeg",
  "/tuinfoto4.jpeg",
  "/tuinfoto5.jpeg",
  "/tuinfoto7.png", 
  "/tuinfoto8.png",
];

const HeroGrid = () => {
  return (
    <div className={styles.gridContainer}>
      {images.map((src, index) => (
        <motion.div 
          key={index}
          className={styles.gridItem}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ 
            duration: 1.5, 
            delay: index * 0.1,
            ease: "easeOut" 
          }}
        >
          <img src={src} alt={`Project ANB Tuinwerken ${index + 1}`} />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroGrid;