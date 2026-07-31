import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import haikuImg from "../../assets/images/projects/haiku.png";
import goFlyImg from "../../assets/images/projects/go-fly-fishing.png";
import weghausImg from "../../assets/images/projects/weghaus.png";

import "./Hero.css";

const projects = [
  {
    id: "01",
    name: "Haiku",
    image: haikuImg,
    role: "Design + Front-end",
    stack: "Next.js · React · UI",
    tag: "Hospitality experience",
    alt: "Sitio web Haiku desarrollado por Andrés Herrera",
  },
  {
    id: "02",
    name: "Go Fly Fishing",
    image: goFlyImg,
    role: "Design + Development",
    stack: "UX/UI · Responsive · Wix",
    tag: "Outdoor experience",
    alt: "Sitio web Go Fly Fishing desarrollado por Andrés Herrera",
  },
  {
    id: "03",
    name: "Weghaus",
    image: weghausImg,
    role: "Front-end Development",
    stack: "Dynamic UI · State · Forms",
    tag: "Interactive configurator",
    alt: "Interfaz Weghaus desarrollada por Andrés Herrera",
  },
];

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.28,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Hero() {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((current) => (current + 1) % projects.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const project = projects[activeProject];

  return (
    <section className="hero" id="home">
      <div className="hero__background" aria-hidden="true">
        <span className="hero__grid" />
        <span className="hero__glow hero__glow--left" />
        <span className="hero__glow hero__glow--right" />
      </div>

      <div className="hero__container">
        <motion.div
          className="hero__content"
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero__eyebrow" variants={textItem}>
            <span className="hero__eyebrow-line" />
            <span>Front-end developer · Product experience</span>
          </motion.div>

          <motion.h1 className="hero__title" variants={textItem}>
            Creo experiencias
            <span className="hero__title-accent"> digitales</span>
            <br />
            con intención.
          </motion.h1>

          <motion.p className="hero__description" variants={textItem}>
            Diseño y construyo productos digitales donde la estrategia, la
            interfaz y la tecnología funcionan como un mismo sistema.
          </motion.p>

          <motion.div className="hero__actions" variants={textItem}>
            <a
              href="#projects"
              className="hero__button hero__button--primary"
            >
              <span>Ver proyectos</span>
              <span aria-hidden="true">↘</span>
            </a>

            <a
              href="#about"
              className="hero__button hero__button--secondary"
            >
              Conocer mi proceso
            </a>
          </motion.div>

          <motion.div className="hero__meta" variants={textItem}>
            <div className="hero__meta-item">
              <span className="hero__meta-label">Especialidad</span>
              <span>React · Ruby on Rails · Web Apps · Product UI</span>
            </div>

            <div className="hero__meta-divider" />

            <div className="hero__meta-item">
              <span className="hero__meta-label">Base</span>
              <span>Pucón · Chile</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{
            opacity: 0,
            x: 50,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero__visual-heading">
            <span>
              {project.id} / {String(projects.length).padStart(2, "0")}
            </span>

            <span>Selected work</span>
          </div>

          <div className="hero__frame">
            <div className="hero__frame-top">
              <div className="hero__frame-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span>{project.name} · Selected project</span>
            </div>

            <div className="hero__image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.id}
                  className="hero__image"
                  src={project.image}
                  alt={project.alt}
                  initial={{
                    opacity: 0,
                    scale: 1.04,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </AnimatePresence>

              <div className="hero__image-overlay" />

              <motion.div
                key={`tag-${project.id}`}
                className="hero__image-tag"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
              >
                <span className="hero__image-tag-dot" />
                <span>{project.tag}</span>
              </motion.div>

              <div className="hero__image-project">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`project-${project.id}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span>Selected work</span>
                    <strong>{project.name}</strong>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="hero__frame-footer">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`role-${project.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="hero__frame-label">Role</span>
                  <strong>{project.role}</strong>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`stack-${project.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className="hero__frame-label">Stack / Focus</span>
                  <strong>{project.stack}</strong>
                </motion.div>
              </AnimatePresence>

              <a
                href="#projects"
                className="hero__frame-arrow"
                aria-label={`Ver proyecto ${project.name}`}
              >
                ↗
              </a>
            </div>
          </div>

          <div className="hero__project-nav">
            {projects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero__project-dot ${
                  index === activeProject
                    ? "hero__project-dot--active"
                    : ""
                }`}
                onClick={() => setActiveProject(index)}
                aria-label={`Mostrar ${item.name}`}
              >
                <span>{item.id}</span>
                <span className="hero__project-progress" />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.45,
        }}
      >
        <span>Scroll para explorar</span>

        <span className="hero__scroll-track">
          <span />
        </span>
      </motion.div>
    </section>
  );
}

export default Hero;
