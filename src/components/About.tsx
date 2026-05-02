"use client";
import { motion } from "framer-motion";
import styles from "@/styles/About.module.scss";

const About = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.about} id="over-ons">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          
          <motion.div 
            className={styles.imageSide}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/tuinfoto2.jpeg" alt="Vakmanschap in de tuin" />
            <div className={styles.experienceBadge}>
              <span>10+</span>
              <p>Jaar Ervaring</p>
            </div>
          </motion.div>

          <motion.div 
            className={styles.textSide}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className={styles.subtitle}>Passie voor groen</span>
            <h2 className={styles.title}>Uw tuin, onze zorg en expertise</h2>
            <p className={styles.description}>
              ANB Tuinwerken is ontstaan uit een diepe passie voor de natuur en de drive om buitenruimtes 
              om te vormen tot functionele kunstwerken. Gevestigd in de regio Gent, combineren we 
              technische kennis van boomverzorging met een creatieve blik op tuinrenovatie.
            </p>
            
            <ul className={styles.features}>
              <li>
                <strong>Lokale Expertise</strong>
                <p>Wij kennen de bodem en vegetatie in en rond Gent door en door.</p>
              </li>
              <li>
                <strong>Persoonlijke Aanpak</strong>
                <p>Eén aanspreekpunt van het eerste gesprek tot de laatste afwerking.</p>
              </li>
            </ul>

            {/* De knop linkt nu naar de contactsectie */}
            <button className={styles.aboutBtn} onClick={scrollToContact}>
              Gratis offerte aanvragen
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;