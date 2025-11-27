export default function Projects() {
  return (
    <section id="proyectos" className="projects-section">
      <h2>Nuestros Proyectos</h2>

      <div className="projects-grid">

        {/* PROYECTO DESBLOQUEADO */}
        <a href="https://docs.google.com/presentation/d/1GIEsD872XrhkQ_MCgLGdgV_flYkpZu8gCZmBQQglxYg/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="project-link">
          <div className="project-card unlocked">
            <img 
              src="/EasyMove.png"
              alt="Proyecto Innovación"
            />
            <h3>EasyMove</h3>
            <p>
              EASYMOVE es una aplicación web que busca transformar la forma en que las personas contratan servicios de mudanza en Argentina.
            </p>
          </div>
        </a>


        {/* PROYECTO BLOQUEADO */}
        <div className="project-card locked">
          <div className="locked-overlay">
            <span className="lock-icon">🔒</span>
            <p>Próximamente</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1560264418-c4445382edbc"
            alt="Bloqueado"
          />
          <h3>Plataforma Web Empresarial</h3>
          <p>Contenido bloqueado</p>
        </div>

        {/* PROYECTO BLOQUEADO */}
        <div className="project-card locked">
          <div className="locked-overlay">
            <span className="lock-icon">🔒</span>
            <p>Próximamente</p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
            alt="Bloqueado"
          />
          <h3>Soluciones con IA</h3>
          <p>Contenido bloqueado</p>
        </div>

      </div>
    </section>
  );
}
