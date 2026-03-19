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
            <svg className="acui-logo-wave" viewBox="0 0 40 40" width="36" height="36">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              <path d="M8 22 Q14 16, 20 22 Q26 28, 32 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M8 18 Q14 12, 20 18 Q26 24, 32 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
            </svg>
            <div className="acui-navbar-brand-text">
              <span className="acui-navbar-title">Argentina Azul</span>
              <span className="acui-navbar-subtitle">Acuicultura</span>
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
            href="https://wa.me/5491170061908?text=Hola%2C%20quiero%20información%20sobre%20el%20programa%20de%20Acuicultura"
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
