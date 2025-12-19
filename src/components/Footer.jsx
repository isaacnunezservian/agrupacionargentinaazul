import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <svg className="footer-wave" width="50" height="50" viewBox="0 0 200 200" fill="none">
            <path 
              d="M50 80C70 60, 90 60, 110 80C130 100, 150 100, 170 80" 
              stroke="#ffffff" 
              strokeWidth="8" 
              strokeLinecap="round"
              fill="none"
            />
            <path 
              d="M50 120C70 100, 90 100, 110 120C130 140, 150 140, 170 120" 
              stroke="#ffffff" 
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
