import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("xovovwzj");

  if (state.succeeded) {
    return (
      <section id="contacto" className="contact-section">
        <h2>Contacto</h2>
        <p className="success-message">¡Mensaje enviado correctamente! 🎉</p>
      </section>
    );
  }

  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="nombre">Nombre*</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="email">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="tu@email.com"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="input-group">
          <label htmlFor="asunto">Asunto*</label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            placeholder="¿Sobre qué querés hablar?"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="mensaje">Mensaje*</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            required
          ></textarea>
          <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
        </div>

        <button
          type="submit"
          className="btn-enviar"
          disabled={state.submitting}
        >
          {state.submitting ? "Enviando..." : "Enviar Mensaje"}
        </button>
      </form>
    </section>
  );
}
