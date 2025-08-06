import React from "react";
import "./css/Second.css";
import Tiki from "../assets/Blanco-04.svg";
import Flyer from "../assets/Flyer-principal -posteo.png";
import FacebookPixel from "react-facebook-pixel";

const precioEntrada = 15000;

const Second = () => {
  const handlePurchaseClick = () => {
    FacebookPixel.track("Purchase", { value: precioEntrada, currency: "ARS" });
  };
  return (
    <div className="home-container" id="events">
      <div className="content-wrapper">
        {/* Main content */}
        <main className="main-content">
          {/* Left column - Text content */}
          <div className="text-section">
            <div>
              <h1 className="title">
                Save the <span className="highlight">date</span>
              </h1>
              <p className="description">
                Se viene el calorcito… y Prana te acerca a La Playa con un
                festival de pura música y la energía necesaria para darle la
                bienvenida a la primavera. Agendá este 20 de Septiembre en Tafi
                Viejo. Y conseguí ya mismo tus Early Birds.
              </p>
            </div>

            <div className="info-box">
              <button onClick={handlePurchaseClick}>
                <a
                  href="https://api.whatsapp.com/send/?phone=3816574462&text=Hola!%20Como%20te%20va?%20Vengo%20de%20la%20web%20de%20Prana,%20quiero%20comprar%20una%20entrada!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Comprar Entradas</span>
                </a>
              </button>
            </div>
          </div>

          {/* Right column - Grid of cards */}
          <div className="grid-section">
            <div className="flyer-container">
              <img src={Flyer} alt="" />
            </div>
          </div>
        </main>

        {/* Down arrow at the bottom */}
        <div className="arrow-container">
          <div className="scroll-indicator">↓</div>
        </div>
      </div>
    </div>
  );
};

export default Second;
