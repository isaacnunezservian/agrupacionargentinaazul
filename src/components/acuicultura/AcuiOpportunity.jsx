import './AcuiOpportunity.css';

function AcuiOpportunity() {
  return (
    <section className="acui-opportunity" id="acui-oportunidad">
      <div className="acui-opportunity-container">
        <div className="acui-opportunity-header animate-on-scroll">
          <span className="acui-section-badge">Oportunidad de Mercado</span>
          <h2 className="acui-section-title">¿Por Qué Acuicultura?</h2>
          <p className="acui-section-subtitle">
            Según el último informe SOFIA de la FAO, la acuicultura ya provee el{' '}
            <strong>60% del pescado que se consume en el mundo</strong> porque la pesca
            está en declive por la sobrepesca. En Argentina, la exportación de pescado
            supera a la de carne vacuna. Quienes se formen hoy estarán a la vanguardia
            de una industria en pleno crecimiento.
          </p>
        </div>

        <div className="acui-poles-grid">
          <div className="acui-pole-card animate-on-scroll">
            <div className="acui-pole-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <h3>La demanda crece, la pesca no alcanza</h3>
            <p className="acui-pole-focus">La pesca natural está estancada por la sobrepesca. La acuicultura es la única fuente de producción que sigue creciendo para cubrir la demanda mundial de proteína.</p>
            <div className="acui-pole-stat">
              <span className="acui-pole-stat-number">51%</span>
              <span className="acui-pole-stat-label">De la producción pesquera mundial ya proviene de acuicultura — FAO SOFIA 2024</span>
            </div>
          </div>

          <div className="acui-pole-card acui-pole-featured animate-on-scroll">
            <div className="acui-pole-ribbon"> </div>
            <div className="acui-pole-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20V10M18 20V4M6 20v-4"/>
              </svg>
            </div>
            <h3>Producción récord y en expansión</h3>
            <p className="acui-pole-focus">La producción acuícola mundial marcó un nuevo récord histórico. Se proyecta que supere los 200 millones de toneladas antes de 2030.</p>
            <div className="acui-pole-stat">
              <span className="acui-pole-stat-number">185 Mt</span>
              <span className="acui-pole-stat-label">Producción acuícola récord en 2022, superando por primera vez a la pesca — FAO</span>
            </div>
          </div>

          <div className="acui-pole-card animate-on-scroll">
            <div className="acui-pole-icon">
              <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
              </svg>
            </div>
            <h3>Argentina: oportunidad sin explotar</h3>
            <p className="acui-pole-focus">Argentina exporta más pescado que carne vacuna, pero su producción acuícola es mínima. Hay un espacio enorme para quienes se formen hoy.</p>
            <div className="acui-pole-stat">
              <span className="acui-pole-stat-number">60%</span>
              <span className="acui-pole-stat-label">Del pescado consumido en el mundo proviene de criaderos, no del mar — FAO</span>
            </div>
          </div>
        </div>

        <div className="acui-opportunity-controlled animate-on-scroll">
          <div className="acui-opportunity-controlled-content">
            <h3 className="acui-opportunity-controlled-title">¿Por Qué Acuicultura Controlada?</h3>
            <p className="acui-opportunity-controlled-text">
              A diferencia de la producción en mar abierto —que contamina el ambiente y enfrenta
              crisis como las de Chile y Europa—, la <strong>acuicultura controlada</strong> opera
              en circuito cerrado en tierra: mayor productividad por m³, cero contaminación ambiental
              y economía circular donde los desechos se convierten en nuevos ingresos.
            </p>
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
