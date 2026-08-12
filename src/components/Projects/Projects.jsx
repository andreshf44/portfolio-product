import { motion } from "framer-motion";

import haikuImg from "../../assets/images/projects/haiku.png";
import goFlyImg from "../../assets/images/projects/go-fly-fishing.png";
import weghausImg from "../../assets/images/projects/weghaus.png";
import ied from "../../assets/images/projects/ied.png"
import tactoSur from "../../assets/images/projects/tacto-sur.png"

import "./Projects.css";

const projects = [
  {
    id: "01",
    company: "BeTrust",
    title: "Plataforma de firma electrónica",
    description:
      "Desarrollo y evolución de interfaces para una plataforma de firma electrónica y gestión documental, participando en flujos de producto, administración de usuarios y experiencias adaptadas a distintos perfiles del sistema.",
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
      "Diseño y desarrollo de una plataforma web para un proyecto de hospedaje boutique, enfocada en descubrir alojamientos, explorar experiencias y facilitar el proceso de reserva mediante una interfaz inmersiva, responsive y bilingüe.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Responsive UI",
      "Multilingual",
      "UX/UI",
    ],
    type: "Hospitality",
    year: "2026",
    role: "Design & Front-end Developer",
    url: "https://haikurefugio.cl/",
    image: haikuImg,
  },
  {
    id: "03",
    company: "Go Fly Fishing",
    title: "Plataforma web para turismo de pesca",
    description:
      "Diseño y desarrollo de una plataforma web bilingüe para una empresa de pesca con mosca en Pucón, enfocada en presentar experiencias, optimizar la visibilidad online y facilitar el contacto con clientes nacionales e internacionales.",
    tags: [
      "Wix",
      "Responsive UI",
      "SEO",
      "Multilingual",
      "UX/UI",
      "Web Design",
    ],
    type: "Tourism Platform",
    year: "2026",
    role: "Design & Development",
    url: "https://www.goflyfishing.cl/",
    image: goFlyImg,
  },
  {
    id: "04",
    company: "Weghaus",
    title: "Configurador interactivo de productos",
    description:
      "Desarrollo de funcionalidades frontend para un configurador de productos, implementando selección dinámica de opciones, manejo de estados, actualización de imágenes en tiempo real, persistencia de configuraciones e integración con formularios.",
    tags: [
      "JavaScript",
      "State Management",
      "Dynamic UI",
      "Forms",
      "Wix",
      "Responsive UI",
    ],
    type: "Product Configurator",
    year: "2026",
    role: "Front-end Developer",
    url: "https://www.weghaus.cl/",
    image: weghausImg,
  },
  {
    id: "05",
    company: "Tacto Sur",
    title: "Plataforma cultural para artes escénicas",
    description:
      "Diseño y desarrollo de una plataforma web para una organización de artes escénicas, implementando una experiencia responsive, gestión de contenido e integración con Mercado Pago para el proceso de suscripción.",
    tags: [
      "React",
      "UX/UI",
      "Responsive UI",
      "Mercado Pago",
      "JavaScript",
      "Web Design",
    ],
    type: "Cultural Platform",
    year: "2025",
    role: "Design & Front-end Developer",
    url: "https://tactosur.com/",
    image: tactoSur,
  },
  {
    id: "06",
    company: "iED Global",
    title: "Plataforma digital para educación",
    description:
      "Implementación frontend en React a partir de un diseño existente, desarrollando funcionalidades, flujos de navegación e interacción para garantizar una experiencia consistente y el correcto funcionamiento de la plataforma.",
    tags: [
      "React",
      "JavaScript",
      "Front-end",
      "Responsive UI",
      "EdTech",
      "UI Implementation",
    ],
    type: "EdTech Platform",
    year: "2025",
    role: "Front-end Developer",
    url: "https://i-edglobal.com/",
    image: ied,
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
            Una selección de aplicaciones, productos y experiencias 
            digitales donde estrategia, diseño y desarrollo se integran 
            para construir mejores productos.
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