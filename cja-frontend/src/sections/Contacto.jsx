import React from "react";

export default function Contacto() {
  return (
    <>
      <section id="contacto" className="contacto-section">
        <div className="container section-content">
          <h2 className="contacto-title">Contactanos</h2>

          <div className="contacto-grid">
            {/* INFO CONTACTO */}
            <div className="contacto-info">
              <h3 className="contacto-subtitle">CJA Taller Mecánico</h3>

              <p>📍 Salta Capital, Argentina</p>
              <p>🕒 Lunes a Sábado 9:00 - 18:00</p>
              <p>📱 WhatsApp: +54 9 387 XXX XXXX</p>

              <button className="btn btn-primary contacto-btn">
                Enviar WhatsApp
              </button>
            </div>

            {/* MAPA */}
            <div className="contacto-mapa">
              <iframe
                title="mapa"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1810.3245876444319!2d-65.38457786572448!3d-24.84166840531254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1774652536035!5m2!1ses!2sar"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ESTILOS RESPONSIVOS */}
      <style>{`
        .contacto-section {
          padding: 100px 20px;
          background: #060b1a;
          color: white;
        }

        .contacto-title {
          text-align: center;
          font-size: 45px;
          margin-bottom: 50px;
          color: #FFD400;
        }

        .contacto-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .contacto-subtitle {
          font-size: 28px;
          margin-bottom: 20px;
          color: #FFD400;
        }

        .contacto-info p {
          margin-bottom: 15px;
          font-size: 18px;
        }

        .contacto-btn {
          font-size: 18px;
          margin-top: 20px;
        }

        .contacto-mapa {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 0 30px #0A84FF55;
        }

        /* RESPONSIVO */
        @media (max-width: 992px) {
          .contacto-title {
            font-size: 36px;
          }
          .contacto-subtitle {
            font-size: 24px;
          }
          .contacto-info p {
            font-size: 16px;
          }
        }

        @media (max-width: 768px) {
          .contacto-grid {
            grid-template-columns: 1fr; /* se apila en una columna */
          }
          .contacto-title {
            font-size: 32px;
          }
          .contacto-subtitle {
            font-size: 22px;
          }
          .contacto-info {
            text-align: center;
          }
          .contacto-btn {
            width: 100%;
          }
        }

        @media (max-width: 480px) {
          .contacto-title {
            font-size: 26px;
          }
          .contacto-subtitle {
            font-size: 20px;
          }
          .contacto-info p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}