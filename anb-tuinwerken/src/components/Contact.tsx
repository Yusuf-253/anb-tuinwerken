"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "@/styles/Contact.module.scss";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.div 
          className={styles.info}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Contacteer ons</h2>
          <p>Klaar om uw tuinproject te starten? Neem vrijblijvend contact op voor een offerte of advies.</p>
          
          <div className={styles.details}>
            <div className={styles.item}>
              <Phone className={styles.icon} />
              <span>+32 4XX XX XX XX</span>
            </div>
            <div className={styles.item}>
              <Mail className={styles.icon} />
              <span>info@anb-tuinwerken.be</span>
            </div>
            <div className={styles.item}>
              <MapPin className={styles.icon} />
              <span>Regio Gent, België</span>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className={styles.form}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <input type="text" placeholder="Naam" required />
          <input type="email" placeholder="E-mailadres" required />
          <textarea placeholder="Uw bericht of vraag" rows={5} required></textarea>
          <button type="submit">Verzend aanvraag</button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;