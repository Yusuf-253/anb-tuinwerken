"use client";
import { motion } from "framer-motion";
import styles from "@/styles/Projects.module.scss";

const projects = [
  { id: 1, image: "/tuinfoto3.jpeg", title: "Moderne Stadstuin", category: "Renovatie" },
  { id: 2, image: "/tuinfoto4.jpeg", title: "Ecologische Zwemvijver", category: "Totaalproject" },
  { id: 3, image: "/tuinfoto5.jpeg", title: "Dakterras Gent", category: "Aanleg" },
  { id: 4, image: "/tuinfoto7.png", title: "Vellen van eiken", category: "Boomverzorging" },
];

const Projects = () => {
  return (
    <section className={styles.projects} id="projecten">
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.subtitle}>Onze Realisaties</span>
          <h2 className={styles.title}>Projecten in de kijker</h2>
          <div className={styles.divider}></div>
        </header>

        <div className={styles.grid}>
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <div className={styles.info}>
                    <span>{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;