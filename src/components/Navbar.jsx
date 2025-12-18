import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <div className={`logo-container ${scrolled ? 'logo-animate' : ''}`}>
            {/* SVG de la ola del logo */}
            <svg className="logo-wave" width="50" height="50" viewBox="0 0 200 200" fill="none">
              <path 
                d="M50 100C70 80, 90 80, 110 100C130 120, 150 120, 170 100" 
                stroke="currentColor" 
                strokeWidth="8" 
                strokeLinecap="round"
                fill="none"
              />
              <path 
                d="M40 120C60 100, 80 100, 100 120C120 140, 140 140, 160 120" 
                stroke="currentColor" 
                strokeWidth="6" 
                strokeLinecap="round"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-agrupacion">AGRUPACIÓN</span>
            <span className="logo-argentina">ARGENTINA AZUL</span>
          </div>
        </div>

        <button 
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')}>Inicio</a></li>
          <li><a onClick={() => scrollToSection('about')}>¿Qué es?</a></li>
          <li><a onClick={() => scrollToSection('impact')}>Impacto</a></li>
          <li><a onClick={() => scrollToSection('cta')} className="nav-cta">Sumate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
