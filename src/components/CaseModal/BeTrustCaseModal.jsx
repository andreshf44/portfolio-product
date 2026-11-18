
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import "./BeTrustCaseModal.css";

const contributions = {
  firmaya: [
    {
      title: "Desarrollo de interfaces en Ruby on Rails.",
      description:
        "Implementación y mantenimiento de vistas mediante HTML, CSS y componentes ERB, integrando nuevos diseños en la estructura existente de la aplicación y adaptándolos a los distintos flujos del producto.",
    },
    {
      title: "Flujos interactivos con Hotwire y JavaScript.",
      description:
        "Desarrollo de procesos multipaso con Turbo Frames, permitiendo actualizar secciones de la interfaz sin recargar la página completa. Implementación de comportamientos interactivos como modales, paneles desplegables y respuestas a eventos del usuario.",
    },
    {
      title: "Evolución del sistema visual y reutilización de componentes.",
      description:
        "Análisis de la estructura frontend existente para identificar componentes, tokens y clases CSS reutilizables. Trabajo de normalización de estilos compartidos, revisión de sobrescrituras y separación de responsabilidades entre componentes generales y estilos específicos de cada vista.",
    },
    {
      title: "Implementación progresiva del rediseño.",
      description:
        "Organización de la evolución visual del producto en cinco flujos: Acceso y cuenta, Inicio, Mi cuenta, Documentos y Firma. Trabajo sobre las vistas de acceso, inicio y navegación, integrando las nuevas propuestas de diseño de manera gradual y procurando conservar la funcionalidad, el comportamiento responsive y la compatibilidad con la aplicación existente.",
    },
  ],

  colbun: [
    {
      title: "Diseño de interfaces mobile.",
      description:
        "Diseño de versiones móviles a partir de pantallas desktop existentes, reorganizando contenido, navegación y componentes para su uso en formatos reducidos.",
    },
    {
      title: "Implementación de vistas desktop.",
      description:
        "Desarrollo de interfaces de escritorio mediante HTML y CSS, integrando los diseños en la estructura de vistas de Ruby on Rails.",
    },
    {
      title: "Responsive y funcionalidades frontend.",
      description:
        "Adaptación de vistas entre tamaños de pantalla y desarrollo o ajuste de comportamientos con JavaScript dentro de la aplicación Rails.",
    },
  ],

  design: [
    {
      title: "Diagnóstico de experiencia y arquitectura visual.",
      description:
        "Análisis de interfaces, navegación y recorridos de usuario para identificar oportunidades de mejora en jerarquía visual, claridad, accesibilidad y consistencia entre vistas.",
    },
    {
      title: "Diseño de nuevas experiencias.",
      description:
        "Desarrollo de propuestas de rediseño para el acceso, inicio y navegación de FirmaYa2, buscando facilitar la comprensión de las acciones, fortalecer las señales de confianza y construir una experiencia más cercana, clara y coherente.",
    },
    {
      title: "Sistema de diseño y documentación.",
      description:
        "Elaboración de un Design Book basado en cinco principios: cercanía, confianza, claridad, accesibilidad y calma. Definición de criterios visuales y de interacción que orientan la evolución del producto y su implementación progresiva mediante componentes y estilos reutilizables.",
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
          Experiencia construyendo
          <br />
          <span>productos digitales</span>
        </h2>

        <div className="case-modal__metadata">
          <div>
            <small>ROL</small>
            <span>Front-end Developer</span>
          </div>

          <div>
            <small>TECNOLOGÍAS</small>
            <span>
              Ruby on Rails · Hotwire (Turbo Frames) ·
              JavaScript · HTML · CSS
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
              En BeTrust trabajo como Front-end Developer
              en FirmaYa2 y Colbún, dos aplicaciones
              desarrolladas sobre Ruby on Rails. Mi
              contribución abarca implementación de vistas,
              flujos interactivos con Hotwire y JavaScript,
              adaptación responsive y mantenimiento de
              interfaces existentes.
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

        {/* 04 — UX/UI Y PRODUCTO */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            04 / UX/UI Y PRODUCTO
          </span>

          <ContributionList items={contributions.design} />
        </section>

        {/* 05 — CONTRIBUCIÓN EN CIFRAS */}

        <section className="case-modal__section">
          <span className="case-modal__section-label">
            05 / CONTRIBUCIÓN EN CIFRAS
          </span>

          <div>
            <div className="case-modal__stats">
              <div>
                <strong>109</strong>
                <span>Tickets finalizados · FirmaYa</span>
              </div>

              <div>
                <strong>102</strong>
                <span>Tickets finalizados · Colbún</span>
              </div>
            </div>

            <div className="case-modal__contributions">
              <p>
                <strong>
                  Desarrollo y evolución de producto.
                </strong>{" "}
                Mi experiencia en BeTrust combina
                implementación técnica, mantenimiento
                de aplicaciones existentes y evolución
                de interfaces con una mirada de producto.
                Este trabajo me ha permitido profundizar
                en la construcción de soluciones frontend
                que buscan equilibrar funcionalidad,
                experiencia de usuario y mantenibilidad
                del código.
              </p>
            </div>
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
