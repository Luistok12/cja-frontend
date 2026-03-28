import React from "react";

const servicios = [
  { titulo: "Service completo", desc: "Cambio de aceite, filtros, revisión general y puesta a punto para alargar la vida útil de tu moto." },
  { titulo: "Reparación de motor", desc: "Apertura, diagnóstico y reparación completa del motor con repuestos de calidad." },
  { titulo: "Electricidad", desc: "Solución de fallas eléctricas, batería, arranque, luces y sistema de carga." },
  { titulo: "Cambio de aceite", desc: "Aceites premium y filtros nuevos para asegurar el mejor rendimiento del motor." },
  { titulo: "Soldadura", desc: "Reparación profesional de piezas plásticas y metálicas: cachas, carenados, soportes, chasis y estructuras dañadas." },
  { titulo: "Transmisión y frenos", desc: "Cambio de kit de transmisión, pastillas, discos y ajuste completo del sistema de frenado." }
];

export default function Servicios() {
  return (
    <>
      <section id="servicios">
        <div className="container section-content">
          <h2 className="servicios-title">
            Servicios del Taller
          </h2>

          <div className="servicios-grid">
            {servicios.map(s => (
              <div className="card" key={s.titulo}>
                <h3 className="card-title">{s.titulo}</h3>
                <p className="card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESTILOS RESPONSIVOS */}
      <style>{`
        .servicios-title {
          text-align: center;
          margin-bottom: 50px;
          font-size: 40px;
        }

        .servicios-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .card {
          padding: 20px;
          margin: 0 15px; /* margen lateral */
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
        }

        .card-title {
          color: #FFD400;
          margin-bottom: 10px;
        }

        .card-desc {
          color: #aaa;
          line-height: 1.6;
        }

        /* RESPONSIVO */
        @media (max-width: 992px) {
          .servicios-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .servicios-title {
            font-size: 32px;
          }
        }

        @media (max-width: 576px) {
          .servicios-grid {
            grid-template-columns: 1fr;
          }
          .servicios-title {
            font-size: 28px;
          }
          .card {
            margin: 0 10px; /* menos margen en pantallas muy chicas */
          }
        }
      `}</style>
    </>
  );
}