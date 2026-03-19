import './AcuiSocialProof.css';

function AcuiSocialProof() {
  const images = [
    { src: '/acuicultura/grupo-fongar.jpg', alt: 'Grupo de capacitación FONGAR en granja hortícola' },
    { src: '/acuicultura/acuaponia-taller.jpg', alt: 'Taller práctico de acuaponía' },
    { src: '/acuicultura/acuaponia-lechugas.jpg', alt: 'Cultivo hidropónico de lechugas en sistema acuapónico' },
    { src: '/acuicultura/laboratorio-tanques.jpg', alt: 'Laboratorio con tanques circulares y filtros' },
    { src: '/acuicultura/instalacion-tanques.jpg', alt: 'Vista panorámica de instalación con tanques' },
    { src: '/acuicultura/tanques-peces.jpg', alt: 'Trabajadores en tanques de cría de peces' },
  ];

  return (
    <section className="acui-social-proof" id="acui-prueba-social">
      <div className="acui-social-proof-container">
        <div className="acui-social-proof-header animate-on-scroll">
          <span className="acui-section-badge">Respaldo Real</span>
          <h2 className="acui-section-title">Un Programa con Trayectoria</h2>
          <p className="acui-section-subtitle">
            Instalaciones reales, prácticas reales, resultados reales.
            Así se forma un productor acuícola profesional.
          </p>
        </div>

        <div className="acui-proof-stats animate-on-scroll">
          <div className="acui-proof-stat">
            <span className="acui-proof-stat-number acui-counter" data-target="25" data-prefix="+" data-suffix=" años">0</span>
            <span className="acui-proof-stat-label">De experiencia del instructor</span>
          </div>
          <div className="acui-proof-stat">
            <span className="acui-proof-stat-number acui-counter" data-target="7" data-suffix=" unidades">0</span>
            <span className="acui-proof-stat-label">De formación integral</span>
          </div>
          <div className="acui-proof-stat">
            <span className="acui-proof-stat-number">100%</span>
            <span className="acui-proof-stat-label">Práctico y aplicable</span>
          </div>
        </div>

        <div className="acui-proof-gallery animate-on-scroll">
          {images.map((img, i) => (
            <div className="acui-proof-gallery-item" key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="acui-proof-gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="acui-proof-entities animate-on-scroll">
          <p className="acui-proof-entities-label">Vinculado con entidades del sector</p>
          <div className="acui-proof-entity-list">
            <div className="acui-proof-entity">
              <strong>CAPP</strong>
              <span>Cámara de Acuicultura</span>
            </div>
            <div className="acui-proof-entity">
              <strong>FONGAR</strong>
              <span>Federación de Organizaciones</span>
            </div>
            <div className="acui-proof-entity">
              <strong>Escuela P.A.</strong>
              <span>Productor Acuícola</span>
            </div>
            <div className="acui-proof-entity">
              <strong>Fundación Azul</strong>
              <span>Desarrollo marítimo</span>
            </div>
          </div>
        </div>

        {/* Testimonios placeholder */}
        <div className="acui-testimonials animate-on-scroll">
          <h3 className="acui-testimonials-title">Lo Que Dicen Nuestros Alumnos</h3>
          <div className="acui-testimonials-grid">
            <div className="acui-testimonial-card acui-testimonial-placeholder">
              <div className="acui-testimonial-stars">★★★★★</div>
              <p className="acui-testimonial-text">
                "Próximamente — testimonios de alumnos del programa 2026."
              </p>
              <div className="acui-testimonial-author">
                <div className="acui-testimonial-avatar">?</div>
                <div>
                  <strong>Tu testimonio aquí</strong>
                  <span>Futuro productor acuícola</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcuiSocialProof;
