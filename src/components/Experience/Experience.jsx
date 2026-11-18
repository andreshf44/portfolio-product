import { motion } from "framer-motion";
import "./Experience.css";

const experience = [
  {
    year: "2024 — Actualidad",
    company: "BeTrust",
    role: "Front-end Developer",
    description:
      "Desarrollo y evolución de interfaces para FirmaYa2 y Colbún, implementando vistas y flujos interactivos con Ruby on Rails, Hotwire y JavaScript. Trabajo en adaptación responsive, mantenimiento de funcionalidades y propuestas UX/UI orientadas a mejorar la claridad, accesibilidad y experiencia de usuario.",
    tags: ["Ruby on Rails", "Hotwire", "JavaScript", "HTML / CSS", "UX/UI"],
  },
  {
    year: "2023 — 2024",
    company: "WebClass",
    role: "Front-end Developer",
    description:
      "Desarrollo y mantenimiento de interfaces para plataformas educativas, implementando componentes y funcionalidades con Vue.js, JavaScript, HTML y CSS. Adaptación responsive de vistas, integración con aplicaciones existentes y mejoras orientadas a la usabilidad y experiencia de usuario.",
    tags: ["Vue.js", "JavaScript", "HTML / CSS", "Responsive UI", "PHP"],
  },
  {
    year: "2023",
    company: "Banco Itaú",
    role: "Práctica profesional",
    description:
      "Procesamiento y análisis de información mediante Excel y Power BI, realizando tareas de extracción, limpieza y transformación de datos para la elaboración de reportes. Uso de macros en Excel para automatizar tareas y apoyar la generación de informes.",
    tags: ["Excel", "Power BI", "ETL", "Macros", "Data Reporting"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <motion.header
          className="experience__header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="experience__eyebrow">
            <span>03</span>
            <span className="experience__eyebrow-line" />
            <span>Experience</span>
          </div>

          <div className="experience__heading">
            <h2>
              Mi recorrido en el desarrollo de
              <br/>
              <span> productos digitales</span>
            </h2>

            <p>
            Mi experiencia integra desarrollo frontend, diseño de interfaces 
            y evolución de productos digitales, colaborando con equipos y resolviendo necesidades reales.
            </p>
          </div>
        </motion.header>

        <motion.div
          className="experience__timeline"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <div className="experience__line" aria-hidden="true" />

          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.year}`}
              className="experience__item"
              variants={item}
            >
              <div className="experience__index">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="experience__point">
                <span />
              </div>

              <div className="experience__date">
                <span>{job.year}</span>
              </div>

              <div className="experience__content">
                <div className="experience__company">
                  {job.company}
                </div>

                <h3>{job.role}</h3>

                <p>{job.description}</p>

                <div className="experience__tags">
                  {job.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;