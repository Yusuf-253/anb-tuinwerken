"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/Services.module.scss";

const services = [
  {
    title: "Boomverzorging",
    description: "Specialist in het veilig snoeien en vellen van bomen, ook op moeilijk bereikbare plaatsen.",
    details: "Bij ANB Tuinwerken hanteren we de nieuwste klimtechnieken en veiligheidsnormen. Of het nu gaat om vormsnoei, het verwijderen van dood hout of het volledig vellen van gevaarlijke bomen: wij zorgen voor een vakkundige afhandeling met minimale impact op de omgeving.",
    image: "/tuinfoto7.png",
  },
  {
    title: "Tuinrenovatie",
    description: "Van ontwerp tot uitvoering: wij toveren uw bestaande tuin om tot een modern groen paradijs.",
    details: "Uw tuin is een verlengstuk van uw woning. Wij kijken naar de bodemstructuur, lichtinval en uw persoonlijke wensen om een duurzaam ontwerp te realiseren. Van beplanting tot grondwerken, wij begeleiden het volledige proces.",
    image: "/tuinfoto1.jpeg",
  },
  {
    title: "Totaalprojecten",
    description: "Aanleg van terrassen, afsluitingen en opritten met oog voor detail en vakmanschap.",
    details: "Wij verzorgen de volledige omgevingsaanleg. Denk aan hoogwaardige terrasbekleding, stevige afsluitingen en opritten die zowel functioneel als esthetisch zijn. We werken enkel met duurzame materialen die de tand des tijds doorstaan.",
    image: "/tuinfoto8.png",
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className={styles.services} id="diensten">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.subtitle}>Onze Expertise</span>
          <h2 className={styles.title}>Diensten op maat</h2>
          <div className={styles.divider}></div>
        </header>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button 
                  className={styles.modalBtn}
                  onClick={() => setSelectedService(service)}
                >
                  Ontdek meer
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className={styles.modalWrapper}>
            <motion.div 
              className={styles.overlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
            />
            <motion.div 
              className={styles.modal}
              initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-40%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              exit={{ opacity: 0, scale: 0.8, x: "-50%", y: "-40%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedService(null)}>&times;</button>
              <div className={styles.modalScrollArea}>
                <div className={styles.modalContent}>
                  <div className={styles.modalImage}>
                    <img src={selectedService.image} alt={selectedService.title} />
                  </div>
                  <div className={styles.textSide}>
                    <h3>{selectedService.title}</h3>
                    <p>{selectedService.details}</p>
                    <button className={styles.contactBtn} onClick={() => setSelectedService(null)}>Sluiten</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;