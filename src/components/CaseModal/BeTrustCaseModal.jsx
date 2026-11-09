
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./BeTrustCaseModal.css";

const contributions = {
  firmaya: [
    {
      title: "Arquitectura e implementación de vistas.",
      description:
        "Construcción y organización de la estructura HTML de nuevas interfaces, integrando los diseños dentro de la aplicación Ruby on Rails y definiendo una base visual y funcional coherente entre las distintas vistas.",
    },
    {
      title: "Implementación del rediseño de FirmaYa2.",
      description:
        "Desarrollo de nuevas interfaces a partir de propuestas de diseño, trasladando decisiones de jerarquía visual, composición, navegación y experiencia de usuario a componentes y vistas funcionales.",
    },
    {
      title: "Desarrollo responsive.",
      description:
        "Implementación y adaptación de interfaces para escritorio y dispositivos móviles, trabajando sobre la distribución de contenidos, el comportamiento de los elementos y la consistencia de la experiencia en distintos tamaños de pantalla.",
    },
    {
      title: "Flujos e interacciones frontend.",
      description:
        "Desarrollo de funcionalidades e interacciones con JavaScript, Hotwire, Turbo y Stimulus, conectando el comportamiento de las interfaces con los flujos y funcionalidades de la aplicación Rails.",
    },
    {
      title: "Evolución y mantenimiento del producto.",
      description:
        "Implementación de requerimientos, ajustes sobre funcionalidades existentes, resolución de incidencias y mejoras de interfaz dentro de una plataforma en desarrollo continuo.",
    },
  ],
  colbun: [
    {
      title: "Diseño de experiencias móviles.",
      description:
        "Diseño de versiones mobile a partir de interfaces existentes, reorganizando contenidos, elementos de navegación y componentes para ofrecer una experiencia adaptada a pantallas pequeñas.",
    },
    {
      title: "Implementación de interfaces desktop.",
      description:
        "Desarrollo de vistas para escritorio, trasladando diseños visuales a estructuras HTML y estilos CSS integrados en la aplicación.",
    },
    {
      title: "Adaptación responsive.",
      description:
        "Implementación de comportamientos responsive para mantener la funcionalidad y coherencia visual de las interfaces entre dispositivos.",
    },
    {
      title: "Funcionalidades frontend.",
      description:
        "Desarrollo y modificación de funcionalidades con JavaScript y Ruby on Rails, trabajando sobre la interacción de las vistas y su integración con el funcionamiento de la aplicación.",
    },
  ],
  design: [
    {
      title: "Diseño orientado a producto.",
      description:
        "Análisis de interfaces y flujos existentes para identificar oportunidades de mejora en claridad, navegación, accesibilidad y experiencia de usuario.",
    },
    {
      title: "Experiencia de acceso a FirmaYa2.",
      description:
        "Trabajo sobre el rediseño de la interfaz de acceso, considerando jerarquía de información, claridad de las acciones, confianza visual y adaptación responsive.",
    },
    {
      title: "Sistema de criterios UX/UI.",
      description:
        "Desarrollo de un Design Book para documentar principios de diseño, decisiones visuales y propuestas de evolución de la experiencia digital.",
    },
  ],
};

function ContributionList({ items }) {
  return (
    <div className="case-modal__contributions">
      {items.map(({ title, description }) => (
        <p key={title}>
          <strong>{title}</strong>{" "}
          {description}
        </p>
      ))}
    </div>
  );
}

function BeTrustCaseModal({ onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const modal = modalRef.current;
      if (!modal) return;

      const focusable = Array.from(
        modal.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      );

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === first ||
          !modal.contains(document.activeElement))
      ) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last ||
          !modal.contains(document.activeElement))
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);

      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, []);

  return (
    <motion.div
      ref={modalRef}
      className="case-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="betrust-case-title"
      aria-describedby="betrust-case-description"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="case-modal__topbar">
        <span>ANDRÉS HERRERA / CASE STUDY</span>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="case-modal__close"
          aria-label="Cerrar caso de estudio"
        >
          Cerrar <span aria-hidden="true">×</span>
        </button>
      </div>

      <motion.div
        className="case-modal__content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1 }}
      >
        {/* INTRODUCCIÓN */}

        <div className="case-modal__eyebrow">
          CASE STUDY · BETRUST · 2024 — ACTUALIDAD
        </div>

        <h2
          id="betrust-case-title"
          className="case-modal__title"
        >
          Desarrollo frontend para{" "}
          <span>productos digitales.</span>
        </h2>

        <div className="case-modal__metadata">
          <div>
            <small>ROL</small>
            <span>Front-end Developer</span>
          </div>

          <div>
            <small>TECNOLOGÍAS</small>
            <span>
              Ruby on Rails · Hotwire · JavaScript · HTML · CSS
            </span>
          </div>

          <div>
            <small>HERRAMIENTAS</small>
            <span>Jira · Bitbucket · Linux</span>
          </div>
        </div>

        {/* 01 — CONTEXTO */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            01 / CONTEXTO
          </span>

          <div>
            <p id="betrust-case-description">
              En BeTrust participo en el desarrollo frontend de
              productos digitales, trabajando en la construcción,
              implementación y evolución de interfaces para
              aplicaciones web. Mi experiencia comprende dos
              proyectos principales: FirmaYa2 y Colbún, en los
              que he desarrollado vistas, funcionalidades,
              experiencias responsive e integraciones frontend
              dentro de aplicaciones Ruby on Rails.
            </p>
          </div>
        </section>

        {/* 02 — FIRMAYA2 */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            02 / FIRMAYA2
          </span>

          <ContributionList items={contributions.firmaya} />
        </section>

        {/* 03 — COLBÚN */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            03 / COLBÚN
          </span>

          <ContributionList items={contributions.colbun} />
        </section>

        {/* 04 — UX/UI */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            04 / UX/UI Y PRODUCTO
          </span>

          <ContributionList items={contributions.design} />
        </section>

        {/* 05 — ENFOQUE TÉCNICO */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            05 / ENFOQUE TÉCNICO
          </span>

          <div className="case-modal__contributions">
            <p>
              <strong>Ruby on Rails.</strong>{" "}
              Implementación y evolución de vistas dentro
              de aplicaciones Rails, integrando la estructura
              de las interfaces con las funcionalidades
              del producto.
            </p>

            <p>
              <strong>Hotwire, Turbo y Stimulus.</strong>{" "}
              Desarrollo de interacciones y comportamientos
              dinámicos en el frontend, utilizando las
              herramientas de Hotwire dentro del entorno Rails.
            </p>

            <p>
              <strong>JavaScript.</strong>{" "}
              Implementación de lógica de interfaz,
              funcionalidades interactivas y comportamientos
              asociados a los flujos de usuario.
            </p>

            <p>
              <strong>HTML y CSS.</strong>{" "}
              Construcción de estructuras de vistas,
              implementación de diseños visuales y
              adaptación responsive para distintos
              dispositivos.
            </p>

            <p>
              <strong>Trabajo sobre producto existente.</strong>{" "}
              Desarrollo de nuevas funcionalidades y
              mantenimiento de interfaces dentro de
              aplicaciones con código y flujos previamente
              establecidos.
            </p>
          </div>
        </section>

        {/* 06 — EN NÚMEROS */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            06 / EN NÚMEROS
          </span>

          <div className="case-modal__stats">
            <div>
              <strong>109</strong>
              <span>
                Tickets finalizados · FirmaYa
              </span>
            </div>

            <div>
              <strong>102</strong>
              <span>
                Tickets finalizados · Colbún
              </span>
            </div>
          </div>
        </section>

        {/* 07 — RESULTADOS */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            07 / RESULTADOS
          </span>

          <div className="case-modal__contributions">
            <p>
              <strong>Implementación de nuevas experiencias.</strong>{" "}
              Desarrollo de vistas e interfaces funcionales
              a partir de diseños, integradas en aplicaciones
              utilizadas en contextos reales de negocio.
            </p>

            <p>
              <strong>Evolución de interfaces existentes.</strong>{" "}
              Adaptación de experiencias desktop y mobile,
              incorporación de funcionalidades y mantenimiento
              de componentes y flujos frontend.
            </p>

            <p>
              <strong>Contribución al diseño de producto.</strong>{" "}
              Participación en decisiones de experiencia
              de usuario, implementación de rediseños
              y elaboración de propuestas de evolución visual
              y funcional.
            </p>
          </div>
        </section>

        {/* 08 — APRENDIZAJES */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            08 / APRENDIZAJES
          </span>

          <div>
            <p>
              Esta experiencia ha fortalecido mi capacidad
              para trabajar sobre aplicaciones en producción,
              comprender arquitecturas frontend existentes
              y desarrollar soluciones que integran diseño,
              interacción y funcionamiento técnico.
              También me ha permitido profundizar en el
              ecosistema Ruby on Rails y Hotwire, abordando
              el desarrollo frontend desde una perspectiva
              orientada tanto a la implementación como
              a la experiencia de usuario.
            </p>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="case-modal__footer">
          <p>
            Por confidencialidad, este caso presenta
            contribuciones técnicas y de diseño sin exponer
            código privado ni interfaces internas de los
            productos.
          </p>

          <button type="button" onClick={onClose}>
            ← Volver a proyectos
          </button>
        </footer>
      </motion.div>
    </motion.div>
  );
}

export default BeTrustCaseModal;
