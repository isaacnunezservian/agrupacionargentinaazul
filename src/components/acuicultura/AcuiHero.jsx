import './AcuiHero.css';

function AcuiHero() {
  return (
    <section className="acui-hero">
      <div className="acui-hero-bg">
        <img
          src="/acuicultura/catania-tilapia-azul.jpg"
          alt="Eduardo Catania con tilapia en instalación acuícola"
          className="acui-hero-img"
        />
        <div className="acui-hero-overlay"></div>
      </div>

      <div className="acui-hero-content">
        <div className="acui-hero-badge animate-on-scroll">
          <span className="acui-badge-dot"></span>
          Inscripciones Abiertas 2026
        </div>

        <h1 className="acui-hero-title animate-on-scroll">
          Dominá la Acuicultura.<br />
          <span className="acui-hero-highlight">Producí, Vendé, Crecé.</span>
        </h1>

        <p className="acui-hero-subtitle animate-on-scroll">
          Programa intensivo de 5 meses con el mayor especialista en
          producción acuícola controlada de Argentina.
          Aprendé a montar tu propio sistema productivo desde cero.
        </p>

        <div className="acui-hero-stats animate-on-scroll">
          <div className="acui-hero-stat">
            <span className="acui-counter" data-target="5" data-suffix=" meses">0</span>
            <span className="acui-hero-stat-label">Duración</span>
          </div>
          <div className="acui-hero-stat-divider"></div>
          <div className="acui-hero-stat">
            <span className="acui-counter" data-target="7" data-suffix=" unidades">0</span>
            <span className="acui-hero-stat-label">Módulos</span>
          </div>
          <div className="acui-hero-stat-divider"></div>
          <div className="acui-hero-stat">
            <span className="acui-counter" data-target="25" data-prefix="+" data-suffix=" años">0</span>
            <span className="acui-hero-stat-label">Experiencia</span>
          </div>
        </div>

        <div className="acui-hero-actions animate-on-scroll">
          <a
            href="https://wa.me/5491170061908?text=Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20Acuicultura"
            className="acui-hero-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Reservá Tu Lugar Ahora
          </a>
          <button
            className="acui-hero-secondary"
            onClick={() => document.getElementById('acui-programa')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver el Programa Completo
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>

        <div className="acui-hero-urgency animate-on-scroll">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="acui-urgency-icon">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-8h4v2h-6V7h2v5z"/>
          </svg>
          <span>Solo <strong>25 cupos</strong> disponibles — Inicio 2026</span>
        </div>
      </div>

      <div className="acui-hero-scroll-indicator">
        <div className="acui-scroll-mouse">
          <div className="acui-scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default AcuiHero;
