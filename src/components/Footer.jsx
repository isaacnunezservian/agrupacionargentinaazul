import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <svg className="footer-wave" width="50" height="50" viewBox="0 0 200 200" fill="none">
            <path 
              d="M50 100C70 80, 90 80, 110 100C130 120, 150 120, 170 100" 
              stroke="currentColor" 
              strokeWidth="8" 
              strokeLinecap="round"
              fill="none"
            />
          </svg>
          <div className="footer-text">
            <span className="footer-agrupacion">AGRUPACIÓN</span>
            <span className="footer-argentina">ARGENTINA AZUL</span>
          </div>
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
          <a href="https://www.instagram.com/fundacionargentinaazul/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.facebook.com/fundacionargentinaazul" target="_blank" rel="noopener noreferrer">
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
