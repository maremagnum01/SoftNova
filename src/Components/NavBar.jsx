import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    window.scrollTo({
      top: section.offsetTop - 60,
      behavior: "smooth"
    });
  };
  

  return (
    <nav>
      <div className="logo">SoftNova</div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "active" : ""}>
        <li onClick={() => scrollToSection("inicio")}>Inicio</li>
        <li onClick={() => scrollToSection("historia")}>Historia</li>
        <li onClick={() => scrollToSection("mision")}>Misión Visión y Valores</li>
        <li onClick={() => scrollToSection("proyectos")}>Proyectos</li>
        <li onClick={() => scrollToSection("contacto")}>Contacto</li>
      </ul>
    </nav>
  );
}
