import logo from "../assets/logo.png";
import React from "react";

export default function Hero() {
  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", gap: 40 }}>
        
        <div>
          <h1 style={{ fontSize: 48 }}>CJA Taller Mecánico</h1>
          <p style={{ margin: "20px 0" }}>
            Reparación • Service • Repuestos
          </p>

          <button className="btn btn-primary">WhatsApp</button>
          <button className="btn btn-secondary">Servicios</button>
        </div>

        <img src={logo} style={{ width: 400 }} />
      </div>
    </section>
  );
}