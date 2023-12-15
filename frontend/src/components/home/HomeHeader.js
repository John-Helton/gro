// HomeHeader.js
import React from "react";
import clasess from "./HomeHeader.module.css";

function HomeHeader() {

  return (
    <div className={clasess["background-image"]} style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h1 style={{ color: "white", fontSize: "3rem", textAlign: "center" }}>¡Bienvenido a Group Travel!</h1>
        <p style={{ color: "white", fontSize: "1.5rem", textAlign: "center" }}>Descubre los mejores destinos y tours para tus viajes</p>
      </div>
      {/* Aquí puedes colocar otros componentes */}
    </div>
  );
}

export default HomeHeader;
