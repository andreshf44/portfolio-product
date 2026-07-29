import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";
import "./Hero.css";

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
              <span>React · UI systems · Motion</span>
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
          <span className="hero__visual-index">01 / 04</span>

          <div className="hero__frame">
            <div className="hero__frame-top">
              <div className="hero__frame-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <span>Selected interface · 2026</span>
            </div>

            <div className="hero__image-wrapper">
              <img
                className="hero__image"
                src={heroImg}
                alt="Vista de una interfaz digital desarrollada por Andrés Herrera"
              />

              <div className="hero__image-overlay" />

              <div className="hero__image-tag">
                <span className="hero__image-tag-dot" />
                <span>Interface in development</span>
              </div>

              <div className="hero__image-number" aria-hidden="true">
                01
              </div>
            </div>

            <div className="hero__frame-footer">
              <div>
                <span className="hero__frame-label">Focus</span>
                <strong>Product interface</strong>
              </div>

              <div>
                <span className="hero__frame-label">Stack</span>
                <strong>React · CSS · Motion</strong>
              </div>

              <span className="hero__frame-arrow" aria-hidden="true">
                ↗
              </span>
            </div>
          </div>

          <motion.div
            className="hero__floating-card"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="hero__floating-label">Current status</span>

            <div className="hero__floating-status">
              <span />
              Available for selected projects
            </div>
          </motion.div>
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