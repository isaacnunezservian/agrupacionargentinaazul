import { Link } from 'react-router-dom';
import './AcuiPromo.css';

function AcuiPromo() {
  return (
    <section className="acui-promo">
      <div className="acui-promo-bg">
        <video
          src="/acuicultura/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="acui-promo-video"
        />
        <div className="acui-promo-overlay"></div>
      </div>

      <div className="acui-promo-content">
        <div className="acui-promo-badge animate-on-scroll">
          <span className="acui-promo-dot"></span>
          Inscripciones Abiertas 2026
        </div>

        <h2 className="acui-promo-title animate-on-scroll">
          Formáte en Acuicultura.<br />
          <span className="acui-promo-highlight">Producí desde Cero.</span>
        </h2>

        <p className="acui-promo-subtitle animate-on-scroll">
          Programa intensivo de 5 meses con más de 50 años de experiencia
          en producción acuícola controlada. Aprendé a montar tu propio
          sistema productivo con prácticas reales.
        </p>

        <div className="acui-promo-stats animate-on-scroll">
          <div className="acui-promo-stat">
            <span className="acui-promo-stat-value">5 meses</span>
            <span className="acui-promo-stat-label">Duración</span>
          </div>
          <div className="acui-promo-stat-divider"></div>
          <div className="acui-promo-stat">
            <span className="acui-promo-stat-value">+50 años</span>
            <span className="acui-promo-stat-label">Experiencia</span>
          </div>
          <div className="acui-promo-stat-divider"></div>
          <div className="acui-promo-stat">
            <span className="acui-promo-stat-value">25 cupos</span>
            <span className="acui-promo-stat-label">Disponibles</span>
          </div>
        </div>

        <div className="acui-promo-actions animate-on-scroll">
          <Link to="/acuicultura" className="acui-promo-cta">
            Conocé el Programa Completo
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="acui-promo-urgency animate-on-scroll">
          <span className="acui-promo-urgency-icon">🔥</span>
          Solo <strong>25 cupos</strong> — Descuento especial marzo &amp; abril
        </div>
      </div>
    </section>
  );
}

export default AcuiPromo;
