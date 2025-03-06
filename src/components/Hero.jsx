import React from "react";
import "./css/Hero.css";
import Circulo from '../assets/Blanco-03.svg'

const Hero = () => {
  return (
    <main className="main-container" id="about">
      <section className="content">
        <p className="paragraph">
          En Prana, nos sumergimos en la esencia misma de la existencia,
          fusionando la música, la espiritualidad y la vitalidad en una fiesta
          que prioriza un servicio de alta calidad para un público exigente.
          Creamos Prana para una audiencia que quiere experimentar cosas nuevas
          y creativas conectando con lo más profundo de su espíritu.
        </p>
      </section>

      <div className="footer-hero">
        <div className="circle-icon">
          <img src={Circulo} alt="Circle Icon" />
        </div>

        <div className="scroll-indicator">↓</div>

        <div className="footer-hero-text">FUERZA VITAL</div>
      </div>
    </main>
  );
};

export default Hero;
