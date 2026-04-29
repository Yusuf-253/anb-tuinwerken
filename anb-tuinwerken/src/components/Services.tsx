"use client";

import { motion } from "framer-motion";
import { TreeDeciduous, Shovel, Scissors } from "lucide-react"; // Voor mooie iconen
import styles from "@/styles/Services.module.scss";

const services = [
  {
    title: "Boomverzorging",
    description: "Snoeien, vellen en standplaatsverbetering met oog voor de gezondheid van de boom.",
    icon: <TreeDeciduous size={32} />,
  },
  {
    title: "Tuinaanleg",
    description: "Van ontwerp tot realisatie: wij creëren de buitenruimte waar u van droomt.",
    icon: <Shovel size={32} />,
  },
  {
    title: "Tuinonderhoud",
    description: "Periodiek onderhoud om uw tuin in topconditie te houden, het hele jaar door.",
    icon: <Scissors size={32} />,
  },
];

const Services = () => {
  return (
    <section id="diensten" className={styles.services}>
      <div className={styles.container}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Onze Diensten</h2>
          <p>Passie voor groen, expertise in uitvoering.</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;