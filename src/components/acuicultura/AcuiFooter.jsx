import { Link } from 'react-router-dom';
import './AcuiFooter.css';

function AcuiFooter() {
  return (
    <footer className="acui-footer">
      <div className="acui-footer-container">
        <div className="acui-footer-top">
          <div className="acui-footer-brand">
            <Link to="/" className="acui-footer-logo-link">
              <img
                src="/acuicultura/logo-aquadeal.jpg"
                alt="Aquadeal Argentina"
                className="acui-footer-logo-img"
                width="36"
                height="36"
              />
              <div>
                <span className="acui-footer-title">Aquadeal</span>
                <span className="acui-footer-subtitle">Argentina</span>
              </div>
            </Link>
            <p className="acui-footer-desc">
              Programa de formación intensiva en acuicultura controlada
              con acuaponía. Una iniciativa de la Fundación Argentina Azul.
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
            <a href="https://wa.me/5491133765421" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href="https://instagram.com/aquadeal.arg" target="_blank" rel="noopener noreferrer">@aquadeal.arg</a>
            <Link to="/">Argentina Azul</Link>
          </div>
        </div>

        <div className="acui-footer-bottom">
          <p>&copy; {new Date().getFullYear()} Agrupación Argentina Azul — Fundación Argentina Azul. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default AcuiFooter;
