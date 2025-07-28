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
    const handleChevronClick = () => {
        window.open("https://drive.google.com/drive/folders/1sXeNuPoRZwi4eFKCtI4-mWnZMMrVn9Zy", "_blank");
    };
    return (
        <div className="home-container" id="galery">
            <div className="content-wrapper">
                <main className="main-content">
                    <div className="text-section">
                        <div>
                            <h1 className="title">
                                We all need <span className="highlight">prana</span>
                            </h1>
                            <p className="description">
                            Revive la energía del 03/05 en Prana. Una noche donde la armonía se restauró y la música nos conectó en lo más profundo, con el sonido envolvente de CID INC y Dmitry Molosh por primera vez juntos en Tucumán. Cada imagen captura la esencia de un Open Air inolvidable. Explorá la galería y volvé a sentir cada beat, cada conexión, cada instante de pura magia.
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

                    <div className="grid-section">
                        <div className="grid-container">
                            {images.map((image, index) => (
                                <div key={index} className="grid-card">
                                    <img src={image} alt={`Grid item ${index + 1}`} className="grid-image" />
                                    <button className="chevron-icon" onClick={handleChevronClick}>
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
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>

                <div className="arrow-container">
                    <div className="scroll-indicator">↓</div>
                </div>
            </div>
        </div>
    );
};

export default Third;
