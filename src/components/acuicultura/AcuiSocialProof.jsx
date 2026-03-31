import { useEffect, useRef, useState, useCallback } from 'react';
import './AcuiSocialProof.css';

function AcuiSocialProof() {
  const galleryRef = useRef(null);
  const [modalVideo, setModalVideo] = useState(null);
  const modalVideoRef = useRef(null);

  const testimonials = [
    {
      src: '/acuicultura/testimonial-1.mp4',
      youtube: 'https://youtu.be/E5lniLOXsTo?si=OAg6foI55ZqPEJf4',
    },
    {
      src: '/acuicultura/testimonial-2.mp4',
      youtube: 'https://youtu.be/8MioqUREjok?si=V_5WDJWDSqfNA7sV',
    },
    {
      src: '/acuicultura/testimonial-3.mp4',
      youtube: 'https://youtu.be/kxBJOkEupEE?si=bqOMzadfy4SPghkD',
    },
  ];

  const openModal = useCallback((index) => {
    setModalVideo(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalVideo(null);
    document.body.style.overflow = '';
  }, []);

  // Close modal on Escape key
  useEffect(() => {
    if (modalVideo === null) return;
    const handleKey = (e) => { if (e.key === 'Escape') closeModal(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalVideo, closeModal]);

  // Auto-play modal video when opened
  useEffect(() => {
    if (modalVideo !== null && modalVideoRef.current) {
      modalVideoRef.current.play().catch(() => {});
    }
  }, [modalVideo]);

  const media = [
    { type: 'image', src: '/acuicultura/prog-1.jpg', alt: 'Tanques blancos con sistema de cañerías' },
    { type: 'video', src: '/acuicultura/loop-1.mp4', alt: 'Video de producción acuícola en acción' },
    { type: 'image', src: '/acuicultura/prog-2.jpg', alt: 'Tanques azules circulares de cría' },
    { type: 'image', src: '/acuicultura/prog-3.jpg', alt: 'Eduardo con alumno visitando instalaciones' },
    { type: 'video', src: '/acuicultura/loop-2.mp4', alt: 'Video de manejo de tanques y peces' },
    { type: 'image', src: '/acuicultura/prog-4.jpg', alt: 'Tanque repleto de peces en producción' },
    { type: 'image', src: '/acuicultura/prog-5.jpg', alt: 'Cosecha masiva de tilapias' },
    { type: 'video', src: '/acuicultura/loop-3.mp4', alt: 'Video de cosecha y producción real' },
    { type: 'image', src: '/acuicultura/prog-6.jpg', alt: 'Detalle de tilapias recién cosechadas' },
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const videos = gallery.querySelectorAll('video[data-src]');
    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            if (!video.src) {
              video.src = video.dataset.src;
            }
            video.play().catch(() => {});
          } else if (video.src) {
            video.pause();
          }
        });
      },
      { rootMargin: '200px' }
    );

    videos.forEach((v) => observer.observe(v));
    return () => observer.disconnect();
  }, []);

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
            <span className="acui-proof-stat-number acui-counter" data-target="50" data-prefix="+" data-suffix=" años">0</span>
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

        <div className="acui-proof-gallery animate-on-scroll" ref={galleryRef}>
          {media.map((item, i) => (
            <div className="acui-proof-gallery-item" key={i}>
              {item.type === 'video' ? (
                <video
                  data-src={item.src}
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label={item.alt}
                />
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" />
              )}
              <div className="acui-proof-gallery-overlay">
                <span>{item.alt}</span>
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
              <strong>Fundación Argentina Azul</strong>
              <span>Desarrollo marítimo</span>
            </div>
          </div>
        </div>

        {/* Testimonios en video */}
        <div className="acui-testimonials animate-on-scroll">
          <h3 className="acui-testimonials-title">Lo Que Dicen Nuestros Alumnos</h3>
          <div className="acui-testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="acui-testimonial-card" key={i}>
                <div
                  className="acui-testimonial-video-wrapper"
                  onClick={() => openModal(i)}
                >
                  <div className="acui-testimonial-poster">
                    <div className="acui-testimonial-poster-glow" />
                    <svg className="acui-testimonial-poster-quote" viewBox="0 0 24 24" width="32" height="32" fill="currentColor" aria-hidden="true">
                      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L9.027 6c-1.49.9-2.67 2.05-3.55 3.44C4.6 10.83 4.16 12.27 4.16 13.76c0 1.19.34 2.16 1.02 2.91.68.75 1.57 1.12 2.67 1.12 1.02 0 1.87-.33 2.55-.99.68-.66 1.02-1.51 1.02-2.55v.5zm9.484 0c0-.88-.23-1.618-.69-2.217-.326-.413-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.159-.95.1-1.95.78-3 .53-.81 1.24-1.48 2.13-2.01L18.51 6c-1.49.9-2.67 2.05-3.55 3.44-.878 1.39-1.317 2.83-1.317 4.32 0 1.19.34 2.16 1.02 2.91.68.75 1.57 1.12 2.67 1.12 1.02 0 1.87-.33 2.55-.99.68-.66 1.02-1.51 1.02-2.55v.5z"/>
                    </svg>
                    <div className="acui-testimonial-poster-play">
                      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <span className="acui-testimonial-poster-label">Ver testimonio</span>
                  </div>
                </div>
                <div className="acui-testimonial-info">
                  <a
                    href={t.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="acui-testimonial-yt-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/>
                    </svg>
                    Ver en YouTube
                  </a>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://youtube.com/playlist?list=PLF4XyUyrlpa4J1-lnLt9JopN-CVkrGEGY&si=BQeC_0f3ZvNa0rXj"
            target="_blank"
            rel="noopener noreferrer"
            className="acui-testimonials-mega-link"
          >
            <div className="acui-mega-link-icon">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/>
              </svg>
            </div>
            <div className="acui-mega-link-text">
              <strong>+100 testimonios de alumnos</strong>
              <span>Mirá la entrega de diplomas y todos los testimonios en YouTube</span>
            </div>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="acui-mega-link-arrow">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Playlists de alumnos */}
        <div className="acui-playlists animate-on-scroll">
          <h3 className="acui-playlists-title">Nuestros Alumnos en Acción</h3>
          <p className="acui-playlists-subtitle">Mirá lo que logran nuestros alumnos durante el programa</p>
          <div className="acui-playlists-grid">
            <a
              href="https://youtube.com/playlist?list=PLF4XyUyrlpa5XfHn1rl-Ks2Z8ZKNRLZCT&si=L_cFrbe2HKiZTrAP"
              target="_blank"
              rel="noopener noreferrer"
              className="acui-playlist-card"
            >
              <div className="acui-playlist-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  <path d="M10 9l5 3-5 3V9z"/>
                </svg>
              </div>
              <strong>Trabajos Prácticos</strong>
              <span>Mirá los trabajos prácticos de nuestros alumnos</span>
              <div className="acui-playlist-cta">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/>
                </svg>
                Ver playlist en YouTube
              </div>
            </a>
            <a
              href="https://youtube.com/playlist?list=PLF4XyUyrlpa51VKtDKiJ8FyLmXmOewqpn&si=CyfBgkwwx6tuR4Y7"
              target="_blank"
              rel="noopener noreferrer"
              className="acui-playlist-card"
            >
              <div className="acui-playlist-icon">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <strong>Prácticas Presenciales</strong>
              <span>Mirá las prácticas presenciales de nuestros alumnos</span>
              <div className="acui-playlist-cta">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                  <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/>
                </svg>
                Ver playlist en YouTube
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Modal de video fullscreen */}
      {modalVideo !== null && (
        <div className="acui-video-modal" onClick={closeModal}>
          <div className="acui-video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="acui-video-modal-close" onClick={closeModal} aria-label="Cerrar video">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <video
              ref={modalVideoRef}
              src={testimonials[modalVideo].src}
              controls
              playsInline
              autoPlay
              className="acui-video-modal-player"
            />
            <a
              href={testimonials[modalVideo].youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="acui-video-modal-yt-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
                <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#fff"/>
              </svg>
              Ver testimonio completo en YouTube
            </a>
          </div>
        </div>
      )}
    </section>
  );
}

export default AcuiSocialProof;
