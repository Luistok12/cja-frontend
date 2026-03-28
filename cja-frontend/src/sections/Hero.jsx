import React from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  return (
    <>
      <section className="hero-bg">
        <div className="container section-content hero-container">
          {/* TEXTO */}
          <div className="hero-text">
            <h1>
              Taller de motos <br />
              <span className="blue">profesional</span>
            </h1>

            <p>
              Service • Reparación • Repuestos originales
            </p>

            <button className="btn btn-primary">Contactar por WhatsApp</button>
          </div>

          {/* IMAGEN */}
          <div className="hero-image">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </section>

      {/* ESTILOS RESPONSIVOS */}
      <style>{`
        .hero-bg {
          padding: 80px 20px;
        }

        .hero-container {
          display: flex;
          align-items: center;
          gap: 50px;
        }

        .hero-text {
          flex: 1;
        }

        .hero-text h1 {
          font-size: 70px;
          line-height: 1.05;
        }

        .hero-text .blue {
          color: #0A84FF;
        }

        .hero-text p {
          margin: 30px 0;
          font-size: 22px;
          color: #aaa;
        }

        .hero-image {
          flex: 1;
          text-align: center;
        }

        .hero-image img {
          width: 550px;
          max-width: 100%;
          filter: drop-shadow(0 0 40px #0A84FF);
        }

        /* RESPONSIVO */
        @media (max-width: 992px) {
          .hero-container {
            flex-direction: column;
            text-align: center;
          }

          .hero-text h1 {
            font-size: 48px;
          }

          .hero-text p {
            font-size: 18px;
          }

          .hero-image img {
            width: 80%;
          }
        }

        @media (max-width: 576px) {
          .hero-text h1 {
            font-size: 36px;
          }

          .hero-text p {
            font-size: 16px;
          }

          .hero-image img {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}