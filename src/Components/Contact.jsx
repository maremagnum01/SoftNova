export default function Contact() {
    return (
      <section id="contacto" className="contact-section">
        <h2>Contacto</h2>
  
        <form className="contact-form">
          <div className="input-group">
            <label>Nombre*</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>
  
          <div className="input-group">
            <label>Email*</label>
            <input type="email" placeholder="tu@email.com" required />
          </div>
  
          <div className="input-group">
            <label>Asunto*</label>
            <input type="text" placeholder="¿Sobre qué querés hablar?" required />
          </div>
  
          <div className="input-group">
            <label>Mensaje*</label>
            <textarea placeholder="Escribe tu mensaje..." required></textarea>
          </div>
  
          <button type="submit" className="btn-enviar">
            Enviar Mensaje
          </button>
        </form>
      </section>
    );
  }
  