import { motion } from "framer-motion";

import haikuImg from "../../assets/images/projects/haiku.png";
import goFlyImg from "../../assets/images/projects/go-fly-fishing.png";
import weghausImg from "../../assets/images/projects/weghaus.png";

import "./Projects.css";

const projects = [
  {
    id: "01",
    company: "IDOK · FirmaYa",
    title: "Firma y gestión documental",
    description:
      "Desarrollo y evolución de interfaces para una aplicación web de firma y gestión documental, trabajando sobre flujos de producto, administración de usuarios y distintas experiencias según perfiles y estados del sistema.",
    tags: [
      "Web App",
      "Ruby on Rails",
      "JavaScript",
      "Linux",
      "Jira",
      "Bitbucket",
    ],
    type: "Producto digital",
    year: "2024 — Actualidad",
    role: "Front-end Developer",
    image: null,
  },
  {
    id: "02",
    company: "Haiku",
    title: "Experiencia digital para alojamientos",
    description:
      "Diseño e implementación de una experiencia web enfocada en descubrir alojamientos, explorar sus características y facilitar el proceso de reserva.",
    tags: ["Next.js", "React", "UI", "Motion"],
    type: "Hospitality",
    year: "2026",
    role: "Design + Front-end",
    url: "https://haiku-web.vercel.app/",
    image: haikuImg,
  },
  {
    id: "03",
    company: "Go Fly Fishing",
    title: "Experiencias de pesca en el sur de Chile",
    description:
      "Diseño y desarrollo de una experiencia web bilingüe orientada a presentar excursiones, servicios y pesca con mosca en Pucón.",
    tags: ["UX/UI", "Responsive", "Wix", "Multilingual"],
    type: "Tourism Experience",
    year: "2026",
    role: "Design + Development",
    image: goFlyImg,
  },
  {
    id: "04",
    company: "Weghaus",
    title: "Configuración interactiva de producto",
    description:
      "Desarrollo de lógica frontend para selección de opciones, persistencia de estado, imágenes condicionales, resumen dinámico e integración con formularios.",
    tags: ["State", "Dynamic UI", "Forms", "Conditional Logic"],
    type: "Web Application",
    year: "2026",
    role: "Front-end Development",
    image: weghausImg,
  },
  {
    id: "05",
    company: "iED Global",
    title: "Plataforma digital para educación",
    description:
      "Trabajo frontend sobre una experiencia digital orientada a soluciones de educación, capacitación y servicios para organizaciones.",
    tags: ["Front-end", "Responsive UI", "EdTech"],
    type: "EdTech",
    year: "2025",
    role: "Front-end Development",
    image: null,
  },
  {
    id: "06",
    company: "Tacto Sur",
    title: "Plataforma cultural independiente",
    description:
      "Desarrollo de una plataforma web para una organización de artes escénicas del sur de Chile, enfocada en contenido, comunidad y suscripción.",
    tags: ["Web Development", "Responsive", "Culture"],
    type: "Cultural Platform",
    year: "2025",
    role: "Web Development",
    image: null,
  },
  {
    id: "07",
    company: "WebClass",
    title: "Experiencias digitales para educación",
    description:
      "Desarrollo y optimización de interfaces para productos educativos, trabajando en la evolución de componentes, templates y funcionalidades orientadas a mejorar la experiencia de uso dentro de la plataforma.",
    tags: [
      "Vue.js",
      "JavaScript",
      "HTML",
      "PHP",
      "EdTech",
    ],
    type: "Producto EdTech",
    year: "2023 — 2024",
    role: "Front-end Developer",
    image: null,
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 34,
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

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <motion.header
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
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
              Una selección de aplicaciones, productos y experiencias digitales
              donde desarrollo, producto e interfaz se encuentran.
            </p>
          </div>
        </motion.header>

        <motion.div
          className="projects__list"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className={`project ${
                index % 2 !== 0 ? "project--reverse" : ""
              }`}
              variants={item}
            >
              <div className="project__topline">
                <span>{project.id}</span>
                <span>{project.year}</span>
              </div>

              <div className="project__body">
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

                  <div className="project__details">
                    <div>
                      <span>Role</span>
                      <strong>{project.role}</strong>
                    </div>

                    <div>
                      <span>Type</span>
                      <strong>{project.type}</strong>
                    </div>
                  </div>
                </div>

                <div
                  className={`project__visual ${
                    !project.image ? "project__visual--empty" : ""
                  }`}
                >
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={`Vista previa del proyecto ${project.company}`}
                      />

                      <div className="project__visual-overlay" />

                      <div className="project__visual-label">
                        <span>Selected work</span>
                        <strong>{project.company}</strong>
                      </div>
                    </>
                  ) : (
                    <div className="project__placeholder">
                      <span>{project.id}</span>

                      <strong>{project.company}</strong>

                      <small>
                        Case study / preview
                        <br />
                        en preparación
                      </small>
                    </div>
                  )}

                  <a
                    className="project__open"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver proyecto ${project.company}`}
                  >
                    ↗
                  </a>
                  
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;