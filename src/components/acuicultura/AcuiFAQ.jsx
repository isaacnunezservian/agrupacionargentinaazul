import { useState } from 'react';
import './AcuiFAQ.css';

const faqs = [
  {
    q: '¿Necesito experiencia previa en acuicultura?',
    a: 'No. El programa está diseñado para que cualquier persona pueda aprender desde cero. Empezamos con los fundamentos del ecosistema acuícola y avanzamos progresivamente hasta la planificación de tu propio negocio.'
  },
  {
    q: '¿Cuál es la modalidad del programa?',
    a: 'Es un sistema de doble acción: los martes tenés 3 horas de clases teóricas virtuales (podés conectarte desde cualquier lugar), y los viernes 3 horas de prácticas presenciales en las instalaciones de la Escuela de Acuicultura en San Vicente, Buenos Aires.'
  },
  {
    q: '¿Dónde son las prácticas presenciales?',
    a: 'Las prácticas se realizan en las instalaciones de la Escuela "Productor Acuícola" dirigida por Eduardo Catania, ubicada en San Vicente, provincia de Buenos Aires. Contamos con tanques, sistemas de filtrado, acuaponía y equipamiento profesional.'
  },
  {
    q: '¿Cuántas horas semanales requiere?',
    a: 'Aproximadamente 7 horas semanales: 3 horas de clases teóricas virtuales los martes + asesoramiento + 3 horas de prácticas presenciales los viernes. Es compatible con un trabajo o actividad diaria.'
  },
  {
    q: '¿Necesito seguro de accidentes personales?',
    a: 'Sí, todos los alumnos deben contar con un seguro de accidentes personales para participar de las prácticas presenciales. Es un requisito estándar de seguridad.'
  },
  {
    q: '¿Qué puedo hacer al terminar el programa?',
    a: 'Al finalizar tendrás las competencias para montar tu propio sistema de producción acuícola controlada con acuaponía. Sabrás construir filtros, fabricar alimento, manejar la cría de peces y planificar tu emprendimiento productivo y comercial.'
  },
  {
    q: '¿Cuántas personas entran en el programa?',
    a: 'El grupo está limitado a un máximo de 25 personas para garantizar atención personalizada y espacio en las prácticas presenciales. Una vez que se cubren los cupos, no se aceptan más inscripciones.'
  }
];

function AcuiFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="acui-faq" id="acui-faq">
      <div className="acui-faq-container">
        <div className="acui-faq-header animate-on-scroll">
          <span className="acui-section-badge">Preguntas Frecuentes</span>
          <h2 className="acui-section-title">¿Tenés Dudas?</h2>
          <p className="acui-section-subtitle">
            Respondemos las preguntas más comunes sobre el programa.
            Si tenés otra consulta, escribinos por WhatsApp.
          </p>
        </div>

        <div className="acui-faq-list animate-on-scroll">
          {faqs.map((faq, i) => (
            <div
              className={`acui-faq-item ${openIndex === i ? 'open' : ''}`}
              key={i}
            >
              <button
                className="acui-faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{faq.q}</span>
                <svg className="acui-faq-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14"/>
                </svg>
              </button>
              <div className="acui-faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="acui-faq-cta animate-on-scroll">
          <p>¿Tenés otra pregunta?</p>
          <a
            href="https://wa.me/5491170061908?text=Hola%2C%20tengo%20una%20consulta%20sobre%20el%20programa%20de%20Acuicultura"
            className="acui-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Preguntanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default AcuiFAQ;
