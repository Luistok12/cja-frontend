import React, { useEffect, useRef } from "react";

const productos = [
  { id: 1, nombre: "Kit transmisión", precio: "$45.000", img: "/repuestos/kit.png" },
  { id: 2, nombre: "Pastillas freno", precio: "$12.000", img: "/repuestos/freno.png" },
  { id: 3, nombre: "Aceite Motul", precio: "$18.000", img: "/repuestos/aceite.png" },
  { id: 4, nombre: "Batería YTX7", precio: "$35.000", img: "/repuestos/bateria.png" },
  { id: 5, nombre: "Filtro aire", precio: "$9.000", img: "/repuestos/filtro.png" },
  { id: 6, nombre: "Cubierta trasera", precio: "$70.000", img: "/repuestos/cubierta.png" },
];

export default function Repuestos() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollAmount = 0;

    const slide = setInterval(() => {
      if (!slider) return;
      scrollAmount += 320;

      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }, 3000);

    return () => clearInterval(slide);
  }, []);

  return (
    <>
      <section id="repuestos" className="repuestos-section">
        <h2 className="repuestos-title">Repuestos</h2>

        <div ref={sliderRef} className="repuestos-slider">
          {productos.map(prod => (
            <div key={prod.id} className="repuestos-card">
              <img src={prod.img} className="repuestos-img" alt={prod.nombre} />
              <h3>{prod.nombre}</h3>
              <p className="repuestos-price">{prod.precio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ESTILOS RESPONSIVOS */}
      <style>{`
        .repuestos-section {
          min-height: 100vh;
          padding: 120px 20px 60px;
          background: #060b1a;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .repuestos-title {
          font-size: 42px;
          margin-bottom: 50px;
          color: #FFD400;
        }

        .repuestos-slider {
          display: flex;
          gap: 30px;
          overflow-x: hidden;
          padding: 0 40px;
          width: 100%;
          max-width: 1200px;
          justify-content: flex-start;
          scroll-behavior: smooth;
        }

        .repuestos-card {
          min-width: 280px;
          background: #0b1328;
          border-radius: 18px;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          transition: 0.3s;
          flex-shrink: 0;
        }

        .repuestos-card h3 {
          margin: 10px 0;
        }

        .repuestos-img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          margin-bottom: 10px;
        }

        .repuestos-price {
          color: #0A84FF;
          font-size: 22px;
          font-weight: bold;
        }

        /* RESPONSIVO */
        @media (max-width: 992px) {
          .repuestos-title {
            font-size: 32px;
          }
          .repuestos-card {
            min-width: 220px;
            padding: 15px;
          }
          .repuestos-img {
            height: 150px;
          }
        }

        @media (max-width: 576px) {
          .repuestos-title {
            font-size: 26px;
          }
          .repuestos-slider {
            gap: 20px;
            padding: 0 15px;
          }
          .repuestos-card {
            min-width: 85%; /* ocupa casi todo el ancho */
            margin: 0 auto;
          }
          .repuestos-img {
            height: 140px;
          }
          .repuestos-price {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}