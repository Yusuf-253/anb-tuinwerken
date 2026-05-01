"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          
          <motion.div 
            className={styles.infoSide}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.subtitle}>Contact</span>
            <h2 className={styles.title}>Laten we uw project bespreken</h2>
            <p className={styles.description}>
              Heeft u een vraag over boomverzorging of wilt u een volledige tuinrenovatie starten? 
              Vul het formulier in en we nemen binnen de 48 uur contact met u op.
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <strong>E-mail</strong>
                <p>info@anbtuinwerken.be</p>
              </div>
              <div className={styles.detailItem}>
                <strong>Telefoon</strong>
                <p>+32 470 00 00 00</p>
              </div>
              <div className={styles.detailItem}>
                <strong>Regio</strong>
                <p>Gent en omstreken</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.formSide}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label htmlFor="name">Naam</label>
                <input type="text" id="name" placeholder="Uw volledige naam" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="email">E-mailadres</label>
                <input type="email" id="email" placeholder="uw@email.com" required />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="service">Dienst</label>
                <select id="service">
                  <option value="boomverzorging">Boomverzorging</option>
                  <option value="tuinrenovatie">Tuinrenovatie</option>
                  <option value="totaalproject">Totaalproject</option>
                  <option value="onderhoud">Onderhoud</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="message">Bericht</label>
                <textarea id="message" rows={5} placeholder="Vertel ons meer over uw project..."></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Verstuur aanvraag</button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;