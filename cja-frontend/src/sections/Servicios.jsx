import React from "react";

const servicios = [
  {
    titulo: "Service completo",
    desc: "Cambio de aceite, filtros, revisión general y puesta a punto para alargar la vida útil de tu moto."
  },
  {
    titulo: "Reparación de motor",
    desc: "Apertura, diagnóstico y reparación completa del motor con repuestos de calidad."
  },
  {
    titulo: "Electricidad",
    desc: "Solución de fallas eléctricas, batería, arranque, luces y sistema de carga."
  },
  {
    titulo: "Cambio de aceite",
    desc: "Aceites premium y filtros nuevos para asegurar el mejor rendimiento del motor."
  },
  {
    titulo: "Soldadura",
    desc: "Reparación profesional de piezas plásticas y metálicas: cachas, carenados, soportes, chasis y estructuras dañadas."
  },
  {
    titulo: "Transmisión y frenos",
    desc: "Cambio de kit de transmisión, pastillas, discos y ajuste completo del sistema de frenado."
  }
];

export default function Servicios() {
  return (
    <section id="servicios">
      <div className="container section-content">
        <h2 style={{textAlign:"center",marginBottom:50,fontSize:40}}>
          Servicios del Taller
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(3,1fr)",
          gap:30
        }}>
          {servicios.map(s => (
            <div className="card" key={s.titulo}>
              <h3 style={{color:"#FFD400",marginBottom:10}}>
                {s.titulo}
              </h3>

              <p style={{color:"#aaa",lineHeight:1.6}}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}