import React from "react";

export default function Contacto() {
  return (
    <section id="contacto">
      <div className="container section-content">

        <h2 style={{textAlign:"center",fontSize:45,marginBottom:50}}>
          Contactanos
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:40,
          alignItems:"center"
        }}>

          {/* INFO CONTACTO */}
          <div>
            <h3 style={{fontSize:28,marginBottom:20,color:"#FFD400"}}>
              CJA Taller Mecánico
            </h3>

            <p style={{marginBottom:15,fontSize:18}}>
              📍 Salta Capital, Argentina
            </p>

            <p style={{marginBottom:15,fontSize:18}}>
              🕒 Lunes a Sábado 9:00 - 18:00
            </p>

            <p style={{marginBottom:30,fontSize:18}}>
              📱 WhatsApp: +54 9 387 XXX XXXX
            </p>

            <button className="btn btn-primary" style={{fontSize:18}}>
              Enviar WhatsApp
            </button>
          </div>

          {/* MAPA */}
          <div style={{
            borderRadius:20,
            overflow:"hidden",
            boxShadow:"0 0 30px #0A84FF55"
          }}>
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1810.3245876444319!2d-65.38457786572448!3d-24.84166840531254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1774652536035!5m2!1ses!2sar"
              width="100%"
              height="420"
              style={{border:0}}
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}