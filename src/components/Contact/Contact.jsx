import { motion } from "framer-motion";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <motion.div
          className="contact__eyebrow"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <span>05</span>
          <span className="contact__eyebrow-line" />
          <span>Contact</span>
        </motion.div>

        <div className="contact__layout">
          <motion.div
            className="contact__main"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <span className="contact__availability">
              <span className="contact__availability-dot" />
              Disponible para nuevas oportunidades
            </span>

            <h2>
              Construyamos algo
              <br />
              que valga la pena <span>usar.</span>
            </h2>

            <p>
              Si estás construyendo un producto digital y necesitas alguien
              que pueda moverse entre interfaz, producto y desarrollo
              frontend, conversemos.
            </p>

            <a
              className="contact__mail"
              href="mailto:andreshf@live.cl"
            >
              <span>andreshf@live.cl</span>
              <span aria-hidden="true">↗</span>
            </a>
          </motion.div>

          <motion.aside
            className="contact__aside"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="contact__aside-header">
              <span>Links</span>
            </div>

            <a
              className="contact__link"
              href="https://www.linkedin.com/in/andres-herrera-frey-b4879335"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>01</small>
                LinkedIn
              </span>

              <span>↗</span>
            </a>

            <a
              className="contact__link"
              href="https://wa.me/56944177821"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <small>02</small>
                WhatsApp / Teléfono 
              </span>
              
              <span>↗</span>
            </a>

            <a
              className="contact__link"
              href="https://github.com/andreshf44?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>03</small>
                GitHub
              </span>

              <span>↗</span>
            </a>

            <a
              className="contact__link"
              href="mailto:andreshf@live.cl"
            >
              <span>
                <small>04</small>
                Email
              </span>

              <span>↗</span>
            </a>

          </motion.aside>
        </div>
      </div>
    </section>
  );
}

export default Contact;