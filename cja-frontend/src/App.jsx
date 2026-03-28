import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Servicios from "./sections/Servicios";
import Contacto from "./sections/Contacto";
import Repuestos from "./components/Repuestos";
import Footer from "./components/Footer";
import React from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servicios />
      <Repuestos/>
      <Contacto />
      <Footer />
    </>
  );
}