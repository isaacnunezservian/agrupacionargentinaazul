import './AcuiInstructor.css';

function AcuiInstructor() {
  const gallery = [
    { src: '/acuicultura/hero-catania-pez.jpg', alt: 'Eduardo Catania con pez de acuicultura' },
    { src: '/acuicultura/catania-carpa.jpg', alt: 'Catania con carpa en instalaciones' },
    { src: '/acuicultura/catania-tilapia.jpg', alt: 'Catania mostrando tilapia de gran tamaño' },
    { src: '/acuicultura/cosecha-tilapias.jpg', alt: 'Cosecha masiva de tilapias en criadero' },
  ];

  return (
    <section className="acui-instructor" id="acui-instructor">
      <div className="acui-instructor-container">
        <div className="acui-instructor-header animate-on-scroll">
          <span className="acui-section-badge">Tu Instructor</span>
          <h2 className="acui-section-title">Aprendé del Mejor</h2>
        </div>

        <div className="acui-instructor-main">
          <div className="acui-instructor-photo animate-on-scroll">
            <div className="acui-instructor-img-wrapper">
              <img
                src="/acuicultura/catania-tilapia-azul.jpg"
                alt="Eduardo Rubén Catania — Especialista en Acuicultura"
                className="acui-instructor-img"
              />
              <div className="acui-instructor-ring"></div>
              <div className="acui-instructor-ring acui-ring-2"></div>
            </div>
          </div>

          <div className="acui-instructor-info animate-on-scroll">
            <h3 className="acui-instructor-name">Eduardo Rubén Catania</h3>
            <p className="acui-instructor-title">Desarrollador de Sistemas de Acuicultura Simbiótica</p>
            <p className="acui-instructor-role">Especialista en Producción Controlada Autosuficiente</p>

            <div className="acui-instructor-credentials">
              <div className="acui-credential">
                <span className="acui-credential-icon">🎓</span>
                <span>Director de la Escuela de Acuicultura "Productor Acuícola"</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">📍</span>
                <span>Instalaciones en San Vicente, Buenos Aires</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🐟</span>
                <span>+25 años de experiencia en producción acuícola controlada</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🌿</span>
                <span>Pionero en acuaponía y economía circular aplicada</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🌎</span>
                <span>Capacitador internacional — FONGAR, Panamá, Costa Rica</span>
              </div>
            </div>

            <blockquote className="acui-instructor-quote">
              "No enseño teoría de libros. Enseño lo que funciona, lo que probé en mis propios tanques durante más de dos décadas."
            </blockquote>
          </div>
        </div>

        <div className="acui-instructor-gallery animate-on-scroll">
          <h4 className="acui-gallery-title">Eduardo en Acción</h4>
          <div className="acui-gallery-grid">
            {gallery.map((img, i) => (
              <div className="acui-gallery-item" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AcuiInstructor;
