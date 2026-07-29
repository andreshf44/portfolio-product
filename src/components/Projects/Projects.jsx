import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    id: "01",
    company: "BPO · FirmaYa",
    title: "Firma y gestión documental",
    description:
      "Desarrollo frontend de una aplicación web orientada a procesos de firma, gestión documental y administración de usuarios, trabajando sobre flujos reales de producto y múltiples perfiles de usuario.",
    tags: ["Web App", "React", "Ruby on Rails", "JavaScript"],
    type: "Producto digital",
    year: "2024 — Actualidad",
  },
  {
    id: "02",
    company: "Haiku",
    title: "Experiencia digital para alojamientos",
    description:
      "Diseño e implementación de una experiencia web enfocada en descubrir alojamientos, explorar sus características y facilitar el proceso de reserva.",
    tags: ["Next.js", "React", "Tailwind", "Motion"],
    type: "Product Experience",
    year: "2026",
  },
  {
    id: "03",
    company: "Go Fly Fishing",
    title: "Plataforma para experiencias de pesca",
    description:
      "Experiencia digital bilingüe para presentar excursiones, servicios y experiencias de pesca con mosca en el sur de Chile.",
    tags: ["UX/UI", "Responsive", "Wix", "Velo"],
    type: "Digital Experience",
    year: "2026",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">

        {/* HEADER */}
        <motion.header
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="projects__eyebrow">
            <span>02</span>
            <span className="projects__eyebrow-line" />
            <span>Selected work</span>
          </div>

          <div className="projects__heading">
            <h2>
              Productos que he
              <br />
              ayudado a <span>construir.</span>
            </h2>

            <p>
              Una selección de proyectos donde desarrollo, producto y
              experiencia de usuario se encuentran.
            </p>
          </div>
        </motion.header>

        {/* PROJECT LIST */}
        <motion.div
          className="projects__list"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="project"
              variants={item}
            >
              <div className="project__index">
                <span>{project.id}</span>
              </div>

              <div className="project__content">
                <div className="project__company">
                  {project.company}
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project__tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project__meta">
                <div>
                  <span>Type</span>
                  <strong>{project.type}</strong>
                </div>

                <div>
                  <span>Year</span>
                  <strong>{project.year}</strong>
                </div>
              </div>

              <button
                className="project__open"
                aria-label={`Ver proyecto ${project.company}`}
              >
                ↗
              </button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;