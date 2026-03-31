import './AcuiTeam.css';

const team = [
  { name: 'Gabriel Polio', role: 'Director del Proyecto', initials: 'GP' },
  { name: 'Yamila Schwarzkopf', role: 'Gerente Comercial', initials: 'YS' },
  { name: 'Matías Cortiña', role: 'Comunicación', initials: 'MC' },
  { name: 'Guadalupe Pollio', role: 'Community Manager', initials: 'GP' },
  { name: 'Rafael Nuñez', role: 'Desarrollador de Sistemas & IA', initials: 'RN' },
];

function AcuiTeam() {
  return (
    <section className="acui-team" id="acui-equipo">
      <div className="acui-team-container">
        <div className="acui-team-header animate-on-scroll">
          <span className="acui-section-badge">Nuestro Equipo</span>
          <h2 className="acui-section-title">Quiénes Somos</h2>
          <p className="acui-section-subtitle">
            El equipo detrás de Aquadeal Argentina, trabajando para acercar
            la acuicultura controlada a todo el país.
          </p>
        </div>

        <div className="acui-team-grid">
          {team.map((member, i) => (
            <div className="acui-team-card animate-on-scroll" key={i}>
              <div className="acui-team-avatar">{member.initials}</div>
              <h3 className="acui-team-name">{member.name}</h3>
              <span className="acui-team-role">{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AcuiTeam;
