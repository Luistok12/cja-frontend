import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // función para cerrar menú
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* MARCA */}
          <div className="navbar-brand">
            <span className="blue">CJA</span>
            <span className="yellow">Taller Mecánico</span>
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            ☰
          </button>

          {/* LINKS */}
          <div className={`menu-links ${open ? "open" : ""}`}>
            <a href="#servicios" onClick={handleLinkClick}>Servicios</a>
            <a href="#repuestos" onClick={handleLinkClick}>Repuestos</a>
            <a href="#contacto" onClick={handleLinkClick}>Contactos</a>
          </div>
        </div>
      </nav>

      {/* ESTILOS RESPONSIVOS */}
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(5,10,25,0.75);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,204,0,0.25);
          box-shadow: 0 6px 25px rgba(0,0,0,0.35);
        }

        .navbar-container {
          max-width: 1200px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 20px;
        }

        .navbar-brand {
          font-size: 26px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .navbar-brand .blue {
          color: #0a84ff;
        }

        .navbar-brand .yellow {
          color: #ffd400;
          margin-left: 6px;
        }

        .menu-links {
          display: flex;
          gap: 40px;
          font-weight: bold;
        }

        .menu-links a {
          color: #fff;
          text-decoration: none;
        }

        .menu-btn {
          background: none;
          border: none;
          color: #fff;
          font-size: 24px;
          cursor: pointer;
          display: none; /* Oculto en desktop */
        }

        /* RESPONSIVO */
        @media (max-width: 768px) {
          .menu-btn {
            display: block; /* Se muestra en móvil */
          }

          .menu-links {
            position: absolute;
            top: 70px;
            left: 0;
            width: 100%;
            background: rgba(5,10,25,0.95);
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 20px 0;
            display: none; /* Oculto por defecto */
          }

          .menu-links.open {
            display: flex; /* Se muestra al abrir */
          }
        }
      `}</style>
    </>
  );
}