import { motion } from "framer-motion";
import "./About.css";

const principles = [
  {
    id: "01",
    title: "Pienso en sistemas",
    text: "No diseño pantallas aisladas. Busco entender cómo cada decisión afecta al producto completo, sus estados, usuarios y flujos.",
  },
  {
    id: "02",
    title: "Construyo con intención",
    text: "Cada interacción, componente y animación debe tener una razón. La interfaz no adorna: ayuda a entender y usar mejor el producto.",
  },
  {
    id: "03",
    title: "Trabajo entre diseño y código",
    text: "Me interesa ese espacio donde UX, producto y frontend se encuentran. Ahí es donde puedo aportar más valor.",
  },
];

const education = [
  {
    degree: "Ingeniería en Informática y Gestión",
    institution: "Universidad Diego Portales",
    year: "2020 — 2024",
  },
  {
    degree: "Técnico en Programación Avanzada",
    institution: "Universidad Diego Portales",
    year: "2020",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <motion.div
          className="about__eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span>04</span>
          <span className="about__eyebrow-line" />
          <span>About</span>
        </motion.div>

        <div className="about__layout">
          <motion.div
            className="about__intro"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h2>
              Desarrollo interfaces,
              <br />
              pero pienso en <span>producto.</span>
            </h2>

            <p>
              Soy Front-end Developer y me interesa construir experiencias
              digitales claras, útiles y cuidadas. Mi trabajo vive entre la
              lógica del producto, la experiencia de usuario y la
              implementación técnica.
            </p>
          </motion.div>

          <motion.aside
            className="about__profile"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="about__profile-label">Profile</span>

            <div className="about__profile-row">
              <span>Role</span>
              <strong>Front-end Developer / UX Designer</strong>
            </div>

            <div className="about__profile-row">
              <span>Focus</span>
              <strong>Product Interfaces</strong>
            </div>

            <div className="about__profile-row">
              <span>Stack</span>
              <strong>Ruby on Rails · React · Next.js · JavaScript</strong>
            </div>

            <div className="about__profile-row">
              <span>Based</span>
              <strong>Chile</strong>
            </div>
          </motion.aside>
        </div>

        <div className="about__principles">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.id}
              className="about__principle"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
            >
              <span className="about__principle-index">
                {principle.id}
              </span>

              <h3>{principle.title}</h3>

              <p>{principle.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="about__career"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="about__education">
            <span className="about__career-label">
              Formación
            </span>

            <div className="about__education-list">
              {education.map((item) => (
                <div
                  key={`${item.degree}-${item.year}`}
                  className="about__education-item"
                >
                  <div>
                    <h3>{item.degree}</h3>
                    <p>{item.institution}</p>
                  </div>

                  <span>{item.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about__cv">
            <span className="about__career-label">
              Curriculum
            </span>

            <p>
              Experiencia profesional, formación y stack técnico
              reunidos en un documento resumido.
            </p>

            <a
              href="/andres-herrera-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__cv-link"
            >
              <span>Ver CV</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;