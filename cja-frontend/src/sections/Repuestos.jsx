import React, {useEffect, useState} from "react";

export default function Repuestos() {
  const [repuestos,setRepuestos] = useState([]);

  useEffect(()=>{
    setRepuestos([
      {id:1,nombre:"Kit transmisión",precio:45000},
      {id:2,nombre:"Aceite Motul",precio:12000},
      {id:3,nombre:"Pastillas freno",precio:18000}
    ]);
  },[])

  return (
    <section id="repuestos">
      <div className="container section-content">
        <h2 style={{textAlign:"center",marginBottom:50,fontSize:40}}>Repuestos</h2>

        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:30}}>
          {repuestos.map(r=>(
            <div className="card" key={r.id}>
              <h3>{r.nombre}</h3>
              <p style={{color:"#FFD400",fontSize:22}}>${r.precio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}