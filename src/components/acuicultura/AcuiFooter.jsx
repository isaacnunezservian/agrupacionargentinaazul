import { Link } from 'react-router-dom';
import './AcuiFooter.css';

function AcuiFooter() {
  return (
    <footer className="acui-footer">
      <div className="acui-footer-container">
        <div className="acui-footer-top">
          <div className="acui-footer-brand">
            <Link to="/" className="acui-footer-logo-link">
              <svg className="acui-footer-wave" viewBox="0 0 40 40" width="32" height="32">
                <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <path d="M8 22 Q14 16, 20 22 Q26 28, 32 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
              <div>
                <span className="acui-footer-title">Argentina Azul</span>
                <span className="acui-footer-subtitle">Acuicultura</span>
              </div>
            </Link>
            <p className="acui-footer-desc">
              Programa de formación intensiva en acuicultura controlada
              con acuaponía. Una iniciativa de la Fundación Azul.
            </p>
          </div>

          <div className="acui-footer-links-group">
            <h4>Programa</h4>
            <button onClick={() => document.getElementById('acui-oportunidad')?.scrollIntoView({ behavior: 'smooth' })}>Oportunidad</button>
            <button onClick={() => document.getElementById('acui-programa')?.scrollIntoView({ behavior: 'smooth' })}>Módulos</button>
            <button onClick={() => document.getElementById('acui-instructor')?.scrollIntoView({ behavior: 'smooth' })}>Instructor</button>
            <button onClick={() => document.getElementById('acui-inversion')?.scrollIntoView({ behavior: 'smooth' })}>Inversión</button>
          </div>

          <div className="acui-footer-links-group">
            <h4>Contacto</h4>
            <a href="https://wa.me/5491170061908" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <Link to="/">Argentina Azul</Link>
          </div>
        </div>

        <div className="acui-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Agrupación Argentina Azul — Fundación Azul. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default AcuiFooter;
