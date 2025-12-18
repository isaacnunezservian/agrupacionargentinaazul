import { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = contentRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about section" id="about">
      <div className="wave-decoration wave-top">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M20,100 Q60,60 100,100 T180,100" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="container" ref={contentRef}>
        <h2 className="section-title animate-on-scroll">
          ¿Qué es Argentina Azul?
        </h2>
        
        <div className="about-content">
          <div className="about-main animate-on-scroll">
            <p className="text-highlight">
              Un <strong>modelo de país</strong> donde el mar es protagonista del desarrollo nacional.
            </p>
            <p>
              Mientras construíamos un país de espaldas al océano, dejamos sumergido 
              un territorio <strong>dos veces y media más grande</strong> que nuestras provincias.
            </p>
            <p>
              Argentina Azul propone integrar ese mundo submarino a nuestra identidad: 
              <strong>somos un país bicontinental y marítimo</strong>.
            </p>
          </div>

          <div className="about-pillars animate-on-scroll">
            <h3>Nuestros pilares</h3>
            <div className="pillars-grid">
              <div className="pillar-item">
                <div className="pillar-icon">🌊</div>
                <h4>Conservación</h4>
                <p>Protección de ecosistemas marinos y biodiversidad</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">💼</div>
                <h4>Economía Azul</h4>
                <p>Desarrollo sustentable de recursos oceánicos</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">🛡️</div>
                <h4>Seguridad</h4>
                <p>Defensa de nuestros intereses marítimos</p>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">🗺️</div>
                <h4>Soberanía</h4>
                <p>Ejercicio pleno de derechos territoriales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
