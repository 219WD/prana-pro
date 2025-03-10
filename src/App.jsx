import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { initLenis } from './hooks/useLenis.jsx';
import HomeScreen from './pages/HomeScreen.jsx'
import NavBar from './components/NavBar.jsx';
import FacebookPixel from "react-facebook-pixel";


function App() {
  useEffect(() => {
    // Inicializar el Pixel de Meta con el Pixel ID desde las variables de entorno
    const pixelId = import.meta.env.VITE_PIXEL_ID;
    if (!pixelId) return; // Si no hay Pixel ID, no hacemos nada

    try {
      FacebookPixel.init(pixelId);
      FacebookPixel.pageView();
    } catch (error) {
      console.warn("Facebook Pixel bloqueado o no cargado:", error);
    }

    // Inicializar Lenis cuando se monta el componente
    const cleanupLenis = initLenis();

    // Limpiar al desmontar el componente
    return cleanupLenis;
  }, []);
  return (
    <BrowserRouter>
      <Helmet>
        <title>Prana Tucumán - Música y Experiencias</title>
        <link rel="icon" type="image/svg+xml" href="/Blanco-02.svg" />
        <meta name="description" content="Prana Tucumán es el punto de encuentro para los amantes de la música electrónica. Vive experiencias únicas con los mejores artistas en un ambiente inigualable." />
        <meta name="keywords" content="Prana Tucumán, música electrónica, eventos, fiestas, DJs, open air, club, Tucumán, Argentina" />
        <meta name="author" content="Prana Tucumán" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MusicVenue",
            "name": "Prana Tucumán",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Yerba Buena Tucuman",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR"
            },
            "telephone": "3816574462",
            "description": "Espacio dedicado a la música electrónica y las experiencias sensoriales en Tucumán. Eventos con DJs nacionales e internacionales.",
            "url": "www.prana-pro.com",
            "sameAs": [
              "https://www.instagram.com/prana.pro",
              "https://www.facebook.com/profile.php?id=61573448551051"
            ]
          })}
        </script>
      </Helmet>

      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;