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
            <img
              src="/logo-agrupacion-argentina-azul.png"
              alt="Agrupación Argentina Azul"
              className="logo-image"
            />
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
