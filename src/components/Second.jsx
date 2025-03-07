import React from "react";
import "./css/Second.css";
import Tiki from '../assets/Blanco-04.svg';
import Flyer from '../assets/1000X1000px.jpg';
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
                                El 3 de mayo la música nos une en una noche única donde la armonía se restaura y la energía fluye. CID INC y Dmitry Molosh llegan por primera vez juntos a Tucumán para un evento Open Air imperdible. Sumérgete en el sonido, vibra con cada beat y déjate llevar por la magia.
                            </p>
                        </div>

                        <div className="info-box">
                            <button onClick={handlePurchaseClick}>
                                <a href="https://wa.me/1234567890?text=Comprar%20Entrada" target="_blank" rel="noopener noreferrer"><span>Comprar Entradas</span></a>
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
