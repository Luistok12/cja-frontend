import { useEffect, useState } from "react";
import { getRepuestos } from "../services/api";
import React from "react";

export default function Repuestos() {
  const [repuestos, setRepuestos] = useState([]);

  useEffect(() => {
    getRepuestos().then(setRepuestos);
  }, []);

  return (
    <section id="repuestos" style={{ padding: "60px 0" }}>
      <div className="container">
        <h2>Repuestos</h2>

        <ul>
          {repuestos.map(r => (
            <li key={r.id}>{r.nombre} - ${r.precio}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}