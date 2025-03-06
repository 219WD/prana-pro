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
    FacebookPixel.init(pixelId);
    FacebookPixel.pageView();

    // Inicializar Lenis cuando se monta el componente
    const cleanupLenis = initLenis();

    // Limpiar al desmontar el componente
    return cleanupLenis;
  }, []);
  return (
    <BrowserRouter>
      <Helmet>
        <title>Prana Tucumán</title>
        <link rel="icon" type="image/png" href="/site-logo.png" />
        <meta name="description" content="219Labs es una agencia digital en Tucumán especializada en desarrollo web, software y marketing digital. Transformamos tu negocio digitalmente con soluciones innovadoras y creativas." />
        <meta name="keywords" content="Agencia Digital Tucumán, Diseño y Desarrollo Web, Marketing Digital, Software y Desarrollo Web" />
        <meta name="author" content="219Labs CanepaDev" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "219Labs",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Mate de Luna 1269",
              "addressLocality": "Tucumán",
              "addressRegion": "T",
              "postalCode": "4000",
              "addressCountry": "AR",
            },
            "telephone": "+5493816671884",
            "description":
              "Agencia de desarrollo web, software y marketing digital de Tucuman. 219LABS ha estado a la vanguardia de la innovación digital, creando productos web3 de última generación y brindando soporte de diseño excepcional tanto para startups como para grandes corporaciones.",
            "url": "https://219labs.vercel.app/",
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