import { motion } from "framer-motion";
import "./Experience.css";

const experience = [
  {
    year: "2024 — Actualidad",
    company: "BPO Advisors",
    role: "Front-end Developer",
    description:
      "Desarrollo y evolución de aplicaciones web orientadas a procesos de firma, gestión documental, administración de usuarios y flujos de producto.",
    tags: ["React", "JavaScript", "Ruby on Rails", "UI Systems"],
  },
  {
    year: "2023 — 2024",
    company: "WebClass",
    role: "Front-end Developer",
    description:
      "Desarrollo de interfaces y soluciones web con foco en experiencia de usuario, implementación visual y mantenimiento de producto.",
    tags: ["React", "JavaScript", "Responsive UI"],
  },
  {
    year: "2023",
    company: "Banco Itaú",
    role: "Práctica profesional",
    description:
      "Participación en desarrollo frontend dentro de un entorno corporativo y multidisciplinario.",
    tags: ["Frontend", "Producto digital", "Trabajo en equipo"],
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
              Experiencia construyendo
              <span> productos digitales.</span>
            </h2>

            <p>
              Mi recorrido combina desarrollo frontend, producto, interfaz y
              trabajo dentro de equipos reales.
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