import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import Repuestos from "./sections/Repuestos";
import Contacto from "./sections/Contacto";
import React from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Repuestos />
      <Contacto />
    </>
  );
}