import './AcuiPricing.css';

function AcuiPricing() {
  const included = [
    '21 semanas de formación integral — 126 horas (teoría + práctica)',
    'Clases virtuales en vivo los martes (3 hs semanales)',
    'Prácticas presenciales en San Vicente los viernes (3 hs)',
    'Asesoramiento técnico personalizado',
    'Acceso a instalaciones con producción acuícola real',
    'Mentoría para tu proyecto productivo individual',
    'Certificación al completar el programa',
  ];

  return (
    <section className="acui-pricing" id="acui-inversion">
      <div className="acui-pricing-container">
        <div className="acui-pricing-header animate-on-scroll">
          <span className="acui-section-badge">Tu Inversión</span>
          <h2 className="acui-section-title">Invertí en Tu Futuro Productivo</h2>
          <p className="acui-section-subtitle">
            Una formación que te prepara para generar ingresos reales.
            El retorno supera ampliamente la inversión.
          </p>
        </div>

        <div className="acui-pricing-card animate-on-scroll">
          <div className="acui-pricing-shimmer"></div>

          <div className="acui-pricing-card-header">
            <span className="acui-pricing-label">Programa Intensivo 2026</span>
            <div className="acui-pricing-amount">
              <span className="acui-pricing-currency">$</span>
              <span className="acui-pricing-value">100.000</span>
              <span className="acui-pricing-period">ARS</span>
            </div>
            <p className="acui-pricing-desc">Inversión total por el programa completo de 21 semanas</p>
          </div>

          <div className="acui-pricing-divider"></div>

          <div className="acui-pricing-includes">
            <h4>Todo lo que incluye:</h4>
            <ul>
              {included.map((item, i) => (
                <li key={i}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#4caf50" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="acui-pricing-highlight">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffc107">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span>
              Prácticas en instalaciones con <strong>producción acuícola real</strong> —
              aprendés con tanques, peces y cultivos reales
            </span>
          </div>

          <a
            href="https://wa.me/5491170061908?text=Hola%2C%20quiero%20inscribirme%20en%20el%20programa%20de%20Acuicultura%202026"
            className="acui-pricing-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Reservá Tu Lugar por WhatsApp
          </a>

          <p className="acui-pricing-spots">
            <span className="acui-pricing-spots-icon">⚡</span>
            Solo <strong>25 cupos</strong> — No te quedes afuera
          </p>
        </div>
      </div>
    </section>
  );
}

export default AcuiPricing;
