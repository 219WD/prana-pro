import React from "react";
import "./css/Third.css";
import Logo from '../assets/Logo.svg';
import Tiki from '../assets/Blanco-04.svg';
import Image1 from '../assets/flyer4.jpg';
import Image2 from '../assets/flyer2.jpg';
import Image3 from '../assets/flyer3.jpg';
import Image4 from '../assets/flyer1.jpg';

const images = [Image1, Image2, Image3, Image4]; // Arreglo con las imágenes

const Third = () => {
    return (
        <div className="home-container" id="galery">
            <div className="content-wrapper">

                {/* Main content */}
                <main className="main-content">
                    {/* Left column - Text content */}
                    <div className="text-section">
                        <div>
                            <h1 className="title">
                                We all need <span className="highlight">prana</span>
                            </h1>
                            <p className="description">
                            Revive la energía del 22/11 en Prana. Una noche donde la música nos llevó más allá, con el sonido envolvente de Bob Tosh. Cada imagen captura la esencia de una fiesta inolvidable. Explora la galería y siente de nuevo cada beat, cada conexión, cada instante que hizo de esta fecha algo único.
                            </p>
                        </div>

                        <div className="circle-icon">
                            <img src={Tiki} alt="Circle Icon" />
                        </div>

                        <div className="info-box">
                            <p className="info-text">
                            Déjate llevar por los recuerdos y vuelve a vibrar con cada imagen. La magia de esa noche sigue viva, y esta es tu oportunidad de experimentarla una vez más.
                            </p>
                        </div>
                    </div>

                    {/* Right column - Grid of cards */}
                    <div className="grid-section">
                        <div className="grid-container">
                            {images.map((image, index) => (
                                <div key={index} className="grid-card">
                                    <img src={image} alt={`Grid item ${index + 1}`} className="grid-image" />
                                    <div className="chevron-icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="icon-size"
                                        >
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </div>
                                </div>
                            ))}
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

export default Third;
