import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__mark">
            A<span>.</span>H
          </span>

          <span>Andrés Herrera</span>
          <a
            href="https://wa.me/56944177821"
            target="_blank"
            rel="noopener noreferrer"
          >
             +56 9 44177821
          </a>
        </div>

        <p>
          Front-end Developer · Product Interfaces · {year}
        </p>

        <a href="#home">
          Back to top
          <span aria-hidden="true">↑</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;