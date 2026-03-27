import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      position:"fixed",
      width:"100%",
      background:"rgba(0,0,0,0.45)",
      backdropFilter:"blur(12px)",
      borderBottom:"1px solid #0A84FF22"
    }}>
      <div className="container" style={{
        display:"flex",
        justifyContent:"flex-end",
        padding:"18px 0",
        gap:40,
        fontWeight:"bold"
      }}>
        <a href="#servicios">Servicios</a>
        <a href="#repuestos">Repuestos</a>
        <a href="#contacto">Contacto</a>
      </div>
    </nav>
  );
}