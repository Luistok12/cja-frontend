import React from "react";

export default function Navbar() {
  return (
    <nav style={{
      position:"fixed",
      top:0,
      width:"100%",
      zIndex:1000,
      background:"rgba(5,10,25,0.75)",
      backdropFilter:"blur(12px)",
      borderBottom:"1px solid rgba(255,204,0,0.25)",
      boxShadow:"0 6px 25px rgba(0,0,0,0.35)"
    }}>
      <div style={{
        maxWidth:1200,
        margin:"auto",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"18px 20px"
      }}>
        
        {/* MARCA */}
        <div style={{
          fontSize:26,
          fontWeight:900,
          letterSpacing:1
        }}>
          <span style={{color:"#0A84FF"}}>CJA</span>
          <span style={{color:"#FFD400", marginLeft:6}}>Taller Mecánico</span>
        </div>

        {/* LINKS */}
        <div style={{
          display:"flex",
          gap:40,
          fontWeight:"bold"
        }}>
          <a href="#servicios" style={{color:"#fff", textDecoration:"none"}}>Servicios</a>
          <a href="#repuestos" style={{color:"#fff", textDecoration:"none"}}>Repuestos</a>
          <a href="#contacto" style={{color:"#fff", textDecoration:"none"}}>Contactos</a>
        </div>

      </div>
    </nav>
  );
}