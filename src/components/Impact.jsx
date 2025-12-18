import { useEffect, useRef } from 'react';
import './Impact.css';

const Impact = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = cardsRef.current?.querySelectorAll('.impact-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="impact section" id="impact">
      <div className="wave-decoration wave-bottom">
        <svg viewBox="0 0 200 200" fill="none">
          <path d="M20,100 Q60,140 100,100 T180,100" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="container">
        <h2 className="section-title">¿Por qué importa?</h2>
        <p className="section-subtitle">
          El mar argentino es clave para nuestro futuro. 
          Es hora de actuar.
        </p>

        <div className="impact-grid" ref={cardsRef}>
          <div className="impact-card animate-on-scroll">
            <div className="card-number">01</div>
            <h3>Potencial inexplorado</h3>
            <p>
              6.5 millones de km² de mar esperan ser integrados 
              a la economía nacional con visión sustentable.
            </p>
          </div>

          <div className="impact-card animate-on-scroll">
            <div className="card-number">02</div>
            <h3>Biodiversidad única</h3>
            <p>
              Nuestras aguas albergan especies endémicas y ecosistemas 
              vitales que necesitan protección urgente.
            </p>
          </div>

          <div className="impact-card animate-on-scroll">
            <div className="card-number">03</div>
            <h3>Soberanía en riesgo</h3>
            <p>
              La pesca ilegal y la falta de presencia estatal 
              ponen en peligro nuestros recursos marítimos.
            </p>
          </div>

          <div className="impact-card animate-on-scroll">
            <div className="card-number">04</div>
            <h3>Futuro sustentable</h3>
            <p>
              El océano puede ser motor de desarrollo limpio, 
              generando empleo y bienestar para las comunidades costeras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
