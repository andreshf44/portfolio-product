import { motion } from "framer-motion";
import "./Intro.css";

function Intro({ onEnter }) {
  return (
    <motion.section
      className="intro"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: "blur(10px)",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <div className="intro__noise" aria-hidden="true" />
      <div className="intro__light intro__light--top" aria-hidden="true" />
      <div className="intro__light intro__light--center" aria-hidden="true" />

      <motion.div
        className="intro__header"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.35 }}
      >
        <span className="intro__identity">Andrés Herrera</span>
        <span className="intro__edition">Portfolio · 2026</span>
      </motion.div>

      <motion.button
        type="button"
        className="intro__trigger"
        onClick={onEnter}
        aria-label="Entrar al portafolio"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileTap={{ scale: 0.94 }}
      >
        <span className="intro__orbit intro__orbit--large" aria-hidden="true" />
        <span className="intro__orbit intro__orbit--medium" aria-hidden="true" />

        <span className="intro__wave intro__wave--one" aria-hidden="true" />
        <span className="intro__wave intro__wave--two" aria-hidden="true" />

        <span className="intro__circle">
          <span className="intro__circle-reflection" aria-hidden="true" />
          <span className="intro__point" />
        </span>

        <span className="intro__label">
          <span className="intro__label-index">01</span>
          <span>Click para iniciar</span>
        </span>
      </motion.button>

      <motion.div
        className="intro__footer"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="intro__footer-item">
          <span className="intro__footer-label">Role</span>
          <span>Front-end developer</span>
        </div>

        <div className="intro__footer-center">
          <span className="intro__footer-line" />
          <span>Interactive portfolio system</span>
          <span className="intro__footer-line" />
        </div>

        <div className="intro__footer-item intro__footer-item--right">
          <span className="intro__footer-label">Location</span>
          <span>Pucón · Chile</span>
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Intro;