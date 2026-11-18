import { motion } from "framer-motion";
import "./About.css";


const principles = [
  {
    id: "01",
    category: "Pensamiento de producto",
    title: "Pienso en sistemas",
    text: "No desarrollo pantallas de manera aislada. Busco comprender cómo se relacionan los componentes, los estados y los flujos para construir experiencias coherentes dentro de un producto.",
  },
  {
    id: "02",
    category: "Criterio de diseño",
    title: "Construyo con intención",
    text: "Cada decisión de diseño e implementación tiene un propósito. Priorizo la claridad, la accesibilidad y las interacciones que ayudan a las personas a comprender y utilizar mejor el producto.",
  },
  {
    id: "03",
    category: "Perfil interdisciplinario",
    title: "Conecto diseño y código",
    text: "Trabajo entre la experiencia de usuario y el desarrollo frontend, transformando necesidades de producto en interfaces funcionales, cuidadas y técnicamente sostenibles.",
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
              pero pienso en <span>producto</span>
            </h2>

            <p>
            Soy Front-end Developer e Ingeniero en Informática y Gestión. 
            Me interesa construir productos digitales que combinen funcionalidad, 
            claridad y una experiencia de usuario bien pensada. Mi trabajo conecta 
            el desarrollo técnico con el diseño de interfaces y la comprensión de las necesidades 
            reales de las personas.
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
              <strong>Product Design & Development</strong>
            </div>

            <div className="about__profile-row">
              <span>Stack</span>
              <strong>React · Next.js · Rails · JavaScript</strong>
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
              <div className="about__principle-heading">
                <span className="about__principle-index">
                  {principle.id}
                </span>

                <span className="about__principle-category">
                  {principle.category}
                </span>
              </div>

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
              Mi experiencia, formación y conocimientos técnicos reunidos en un solo documento.
            </p>

            <a
              href="/andres-herrera-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__cv-link"
            >
              <span>Ver currículum</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;