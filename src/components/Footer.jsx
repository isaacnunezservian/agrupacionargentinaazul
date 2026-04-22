import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img
            src="/logo-agrupacion-argentina-azul.png"
            alt="Agrupación Argentina Azul"
            className="footer-logo-image"
          />
        </div>

        <div className="footer-info">
          <p>
            Militancia por la conciencia marítima.<br />
            El cambio está en el mar.
          </p>
        </div>

        <div className="footer-links">
          <a href="https://fundacionargentinaazul.org" target="_blank" rel="noopener noreferrer">
            Fundación Argentina Azul
          </a>
          <a href="https://www.instagram.com/argentina.azul/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/agrupacionargentinaazul/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Agrupación Argentina Azul. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
