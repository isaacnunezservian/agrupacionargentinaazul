import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AcuiNavbar.css';

function AcuiNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`acui-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="acui-navbar-container">
        <Link to="/" className="acui-navbar-brand">
          <div className="acui-navbar-logo">
            <img
              src="/acuicultura/logo-aquadeal.jpg"
              alt="Aquadeal Argentina"
              className="acui-navbar-logo-img"
              width="40"
              height="40"
            />
            <div className="acui-navbar-brand-text">
              <span className="acui-navbar-title">Aquadeal</span>
              <span className="acui-navbar-subtitle">Argentina</span>
            </div>
          </div>
        </Link>

        <div className={`acui-navbar-links ${menuOpen ? 'open' : ''}`}>
          <button onClick={() => scrollToSection('acui-oportunidad')} className="acui-nav-link">Oportunidad</button>
          <button onClick={() => scrollToSection('acui-programa')} className="acui-nav-link">Programa</button>
          <button onClick={() => scrollToSection('acui-instructor')} className="acui-nav-link">Instructor</button>
          <button onClick={() => scrollToSection('acui-inversion')} className="acui-nav-link">Inversión</button>
          <button onClick={() => scrollToSection('acui-faq')} className="acui-nav-link">FAQ</button>
          <a
            href="https://wa.me/5491133765421?text=Hola%2C%20quiero%20información%20sobre%20el%20programa%20de%20Acuicultura"
            className="acui-nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inscribirme
          </a>
        </div>

        <button
          className={`acui-navbar-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default AcuiNavbar;
