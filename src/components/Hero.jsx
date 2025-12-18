import { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const statsRef = useRef(null);

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

    const stats = document.querySelectorAll('.stat-item');
    stats.forEach((stat) => observer.observe(stat));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-waves">
        <svg className="wave-bg wave-1" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C300,100 900,0 1200,50 L1200,120 L0,120 Z" fill="currentColor" opacity="0.1"/>
        </svg>
        <svg className="wave-bg wave-2" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,70 C400,20 800,100 1200,70 L1200,120 L0,120 Z" fill="currentColor" opacity="0.05"/>
        </svg>
      </div>

      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="hero-title-small">El cambio está</span>
          <span className="hero-title-large">en el mar</span>
        </h1>
        
        <p className="hero-subtitle">
          Dos argentinas y media sumergidas.<br />
          Es tiempo de reflotar nuestro futuro.
        </p>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item">
            <span className="stat-number">6.8M</span>
            <span className="stat-label">km de costa</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">6.5M</span>
            <span className="stat-label">km² de mar</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2.5x</span>
            <span className="stat-label">el territorio</span>
          </div>
        </div>

        <div className="hero-cta mb-10">
          <button className="btn btn-primary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Descubrí más
          </button>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
