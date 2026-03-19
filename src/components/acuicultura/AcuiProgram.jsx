import './AcuiProgram.css';

const units = [
  {
    num: '01',
    title: 'Ecosistema y Economía Circular',
    desc: 'Simbiosis de producción orgánica, economía circular y fundamentos del ecosistema acuícola controlado.',
    icon: '🌱',
    type: 'Teoría + Práctica'
  },
  {
    num: '02',
    title: 'Físico-Química del Agua',
    desc: 'Ciclo del nitrógeno, medición de parámetros esenciales (oxígeno disuelto, pH) y calidad del agua.',
    icon: '🔬',
    type: 'Teoría + Práctica'
  },
  {
    num: '03',
    title: 'Ingeniería Hidráulica',
    desc: 'Montaje de cañerías, sistemas de bombeo, prueba de equipos y diseño de circuitos hidráulicos.',
    icon: '🔧',
    type: 'Práctica intensiva'
  },
  {
    num: '04',
    title: 'Dispositivos de Control',
    desc: 'Construcción de filtros, biofiltros, sedimentadores y sistemas de aireación.',
    icon: '⚙️',
    type: 'Práctica intensiva'
  },
  {
    num: '05',
    title: 'Nutrición y Alimento',
    desc: 'Formulación y fabricación de alimento balanceado. Optimización de la conversión alimenticia (FCR).',
    icon: '🧪',
    type: 'Teoría + Práctica'
  },
  {
    num: '06',
    title: 'Manejo Biológico',
    desc: 'Cálculo de raciones, pesajes, densidad de siembra, sistemas hidropónicos y acuaponía integrada.',
    icon: '🐟',
    type: 'Práctica intensiva'
  },
  {
    num: '07',
    title: 'Planificación del Negocio',
    desc: 'Puesta en marcha del desarrollo productivo y comercial. Revisión final de proyectos individuales.',
    icon: '📊',
    type: 'Teoría + Mentoring'
  }
];

function AcuiProgram() {
  return (
    <section className="acui-program" id="acui-programa">
      <div className="acui-program-container">
        <div className="acui-program-header animate-on-scroll">
          <span className="acui-section-badge">Programa Completo</span>
          <h2 className="acui-section-title">¿Qué Vas a Aprender?</h2>
          <p className="acui-section-subtitle">
            7 unidades con sistema de doble acción: <strong>teoría los martes</strong> (virtual) y{' '}
            <strong>práctica los viernes</strong> (presencial en San Vicente).
            Formación integral para que puedas producir y vender desde el día uno.
          </p>
        </div>

        <div className="acui-program-modality animate-on-scroll">
          <div className="acui-modality-card">
            <div className="acui-modality-icon">💻</div>
            <div>
              <strong>Martes — Virtual</strong>
              <p>3 horas de clases teóricas online + asesoramiento</p>
            </div>
          </div>
          <div className="acui-modality-card">
            <div className="acui-modality-icon">🏗️</div>
            <div>
              <strong>Viernes — Presencial</strong>
              <p>3 horas de práctica en la Escuela de Acuicultura, San Vicente</p>
            </div>
          </div>
        </div>

        <div className="acui-timeline">
          {units.map((unit, i) => (
            <div className="acui-timeline-item animate-on-scroll" key={unit.num}>
              <div className="acui-timeline-line">
                <div className="acui-timeline-dot">{unit.icon}</div>
                {i < units.length - 1 && <div className="acui-timeline-connector"></div>}
              </div>
              <div className="acui-timeline-card">
                <div className="acui-timeline-num">{unit.num}</div>
                <span className="acui-timeline-type">{unit.type}</span>
                <h3>{unit.title}</h3>
                <p>{unit.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="acui-program-cta animate-on-scroll">
          <p>Al finalizar, tendrás las habilidades para <strong>montar, operar y comercializar</strong> tu propio emprendimiento acuícola.</p>
          <a
            href="https://wa.me/5491170061908?text=Hola%2C%20quiero%20más%20detalles%20sobre%20el%20programa%20de%20Acuicultura"
            className="acui-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Quiero Más Información
          </a>
        </div>
      </div>
    </section>
  );
}

export default AcuiProgram;
