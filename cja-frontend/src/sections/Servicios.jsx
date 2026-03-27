import React from "react";

const servicios = [
    "Service completo",
    "Reparación de motor",
    "Electricidad",
    "Cambio de aceite",
    "Diagnóstico",
    "Transmisión"
  ];
  
  export default function Servicios() {
    return (
      <section id="servicios" style={{ padding: "60px 0", background: "#111" }}>
        <div className="container">
          <h2>Servicios</h2>
  
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 30 }}>
            {servicios.map(s => (
              <div key={s} style={{ padding: 20, background: "#1e1e1e", borderRadius: 10 }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }