import './AcuiInstructor.css';

function AcuiInstructor() {
  const gallery = [
    { src: '/acuicultura/eduardo-acuaponia.jpg', alt: 'Eduardo Catania con lechugas hidropónicas en invernadero de acuaponía' },
    { src: '/acuicultura/eduardo-tilapia-noche.jpg', alt: 'Eduardo Catania con tilapia — toma cenital nocturna' },
    { src: '/acuicultura/eduardo-tilapia-grande.jpg', alt: 'Eduardo Catania sosteniendo tilapia de gran tamaño' },
    { src: '/acuicultura/grupo-fongar.jpg', alt: 'Eduardo Catania en instalación de tanques azules' },
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
              src="/acuicultura/eduardo-perfil.jpg"
              alt="Eduardo Rubén Catania — Especialista en Acuicultura Controlada"
                className="acui-instructor-img"
              />
              <div className="acui-instructor-ring"></div>
              <div className="acui-instructor-ring acui-ring-2"></div>
            </div>
          </div>

          <div className="acui-instructor-info animate-on-scroll">
            <h3 className="acui-instructor-name">Eduardo Rubén Catania</h3>
            <p className="acui-instructor-title">Desarrollador de Sistemas de Acuicultura Controlada</p>
            <p className="acui-instructor-role">Especialista en Producción Acuícola Autosuficiente</p>

            <div className="acui-instructor-credentials">
              <div className="acui-credential">
                <span className="acui-credential-icon">🎓</span>
                <span>Director de la Escuela de Acuicultura "Productor Acuícola"</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">📍</span>
                <span>Instalaciones con producción real en San Vicente, Buenos Aires</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🐟</span>
                <span>+50 años como productor acuícola y +30 años como educador</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🏛️</span>
                <span>Ex docente universitario en acuicultura</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🌿</span>
                <span>Pionero en acuaponía y economía circular aplicada</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🌎</span>
                <span>Capacitador con alumnos internacionales</span>
              </div>
              <div className="acui-credential">
                <span className="acui-credential-icon">🏆</span>
                <span>Premio provincial, premio nacional y reconocimiento del Concejo Deliberante de San Vicente</span>
              </div>
            </div>

            <blockquote className="acui-instructor-quote">
              "No enseño teoría de libros. Enseño lo que funciona, lo que probé en mis propios tanques durante más de cinco décadas."
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
