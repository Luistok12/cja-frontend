import React from "react";

export default function Navbar() {
    return (
      <nav style={{ background: "#111", padding: "15px 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ color: "#FFD400" }}>CJA Taller Mecánico</h2>
          <div>
            <a href="#servicios" style={{ marginRight: 20 }}>Servicios</a>
            <a href="#repuestos" style={{ marginRight: 20 }}>Repuestos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </nav>
    );
  }