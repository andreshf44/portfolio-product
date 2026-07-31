import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Proyectos", href: "#projects" },
    { label: "Experiencia", href: "#experience" },
    { label: "Sobre mí", href: "#about" },
  ];

  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbar__container">
        <a className="navbar__brand" href="#home" aria-label="Ir al inicio">
        <span className="navbar__brand-mark" aria-hidden="true">
  <svg
    className="navbar__brand-logo"
    viewBox="0 0 64 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* A */}
    <path
      d="M10 38L25 10L34 38"
      className="navbar__logo-stroke"
    />

    {/* travesaño / conexión */}
    <path
      d="M18 28H40"
      className="navbar__logo-stroke"
    />

    {/* H */}
    <path
      d="M40 12V38"
      className="navbar__logo-stroke"
    />

    <path
      d="M52 12V38"
      className="navbar__logo-stroke"
    />

    <path
      d="M40 26H52"
      className="navbar__logo-accent"
    />
  </svg>
</span>

          <span className="navbar__brand-copy">
            <span>Andrés Herrera</span>
            <small>Front-end developer</small>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Navegación principal">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className="navbar__link">
              <span className="navbar__link-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <a className="navbar__cta" href="#contact">
          <span className="navbar__cta-status" aria-hidden="true" />
          <span>Conversemos</span>
          <span className="navbar__cta-arrow" aria-hidden="true">
            ↗
          </span>
        </a>
      </div>
    </motion.header>
  );
}

export default Navbar;