"use client";

import { motion } from "framer-motion";
import styles from "@/styles/About.module.scss";

const About = () => {
  return (
    <section id="over-ons" className={styles.about}>
      <div className={styles.container}>
        <motion.div 
          className={styles.imageWrapper}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Placeholder voor een foto van een project of de zaakvoerder */}
          <div className={styles.imagePlaceholder}>
            <span>Vakmanschap in beeld</span>
          </div>
        </motion.div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.subtitle}>Over ANB Tuinwerken</span>
          <h2>Passie voor bomen, oog voor detail</h2>
          <p>
            Met jarenlange ervaring in boomverzorging en tuinaanleg staat ANB Tuinwerken garant voor kwaliteit in de regio Gent. Wij geloven dat elke tuin een uniek verhaal vertelt en behandelen elk project met de grootste zorg.
          </p>
          <p>
            Of het nu gaat om het veilig vellen van een zieke boom of het realiseren van een compleet nieuwe tuin: wij combineren moderne technieken met ambachtelijk vakmanschap.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>10+</strong>
              <span>Jaar Ervaring</span>
            </div>
            <div className={styles.statItem}>
              <strong>100%</strong>
              <span>Passie</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;