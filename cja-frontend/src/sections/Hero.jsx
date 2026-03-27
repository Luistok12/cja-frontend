import React from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <section className="hero-bg">
      <div className="container section-content" style={{display:"flex",alignItems:"center",gap:50}}>
        
        <div style={{flex:1}}>
          <h1 style={{fontSize:70,lineHeight:1.05}}>
            Taller de motos <br/>
            <span style={{color:"#0A84FF"}}>profesional</span>
          </h1>

          <p style={{margin:"30px 0",fontSize:22,color:"#aaa"}}>
            Service • Reparación • Repuestos originales
          </p>

          <button className="btn btn-primary">Contactar por WhatsApp</button>
        </div>

        <div style={{flex:1,textAlign:"center"}}>
          <img src={logo} style={{
            width:550,
            filter:"drop-shadow(0 0 40px #0A84FF)"
          }}/>
        </div>

      </div>
    </section>
  );
}