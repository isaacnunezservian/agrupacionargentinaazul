import './AcuiOpportunity.css';

function AcuiOpportunity() {
  return (
    <section className="acui-opportunity" id="acui-oportunidad">
      <div className="acui-opportunity-container">
        <div className="acui-opportunity-header animate-on-scroll">
          <span className="acui-section-badge">Oportunidad de Mercado</span>
          <h2 className="acui-section-title">¿Por Qué Acuicultura?</h2>
          <p className="acui-section-subtitle">
            La acuicultura en Argentina dejó de ser marginal para convertirse en un
            <strong> sector con alto potencial exportador</strong>. Quienes se formen hoy
            estarán a la vanguardia de una industria en pleno crecimiento.
          </p>
        </div>

        <div className="acui-poles-grid">
          <div className="acui-pole-card animate-on-scroll">
            <div className="acui-pole-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="acui-pole-number">01</div>
            <h3>Polo Patagonia Norte</h3>
            <p className="acui-pole-focus">Aguas frías — Jaulas flotantes</p>
            <p className="acui-pole-species">Trucha Arcoíris</p>
            <div className="acui-pole-stat">
              <span className="acui-pole-stat-number">70%</span>
              <span className="acui-pole-stat-label">Exportación (EE.UU., Japón, Brasil)</span>
            </div>
          </div>

          <div className="acui-pole-card acui-pole-featured animate-on-scroll">
            <div className="acui-pole-ribbon">Mayor Oportunidad</div>
            <div className="acui-pole-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="acui-pole-number">02</div>
            <h3>Polo NEA y Centro</h3>
            <p className="acui-pole-focus">Aguas cálidas — Estanques excavados</p>
            <p className="acui-pole-species">Pacú y Surubí</p>
            <div className="acui-pole-stat">
              <span className="acui-pole-stat-number">85%</span>
              <span className="acui-pole-stat-label">Mercado interno (supermercados, restaurantes)</span>
            </div>
          </div>

          <div className="acui-pole-card animate-on-scroll">
            <div className="acui-pole-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
              </svg>
            </div>
            <div className="acui-pole-number">03</div>
            <h3>Polo Emergente</h3>
            <p className="acui-pole-focus">Maricultura costera</p>
            <p className="acui-pole-species">Mejillones y Ostras</p>
            <div className="acui-pole-stat">
              <span className="acui-pole-stat-number">90%</span>
              <span className="acui-pole-stat-label">Consumo interno (gastronomía premium)</span>
            </div>
          </div>
        </div>

        <div className="acui-opportunity-bottom animate-on-scroll">
          <div className="acui-opportunity-quote">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" opacity="0.3">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
            <p>
              Con nuestro programa, no solo aprendés a criar peces.
              <strong> Aprendés a montar un negocio rentable</strong> con acuaponía,
              producción controlada y cadena de valor completa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcuiOpportunity;
