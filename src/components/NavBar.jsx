import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Logo.svg";
import Bacteria from "../assets/Blanco-02.svg";
import "./css/NavBar.css";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        ScrollTrigger.create({
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                const nav = document.querySelector(".nav");
                if (!nav) return;
                gsap.to(nav, {
                    y: self.direction === 1 ? -50 : 0,
                    opacity: self.direction === 1 ? 0 : 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            },
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    const handleLinkClick = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            gsap.to(".mobile-menu", {
                x: "100%",
                duration: 0.4,
                ease: "power3.out",
                onComplete: () => {
                    setMenuOpen(false);
                    gsap.to(window, {
                        scrollTo: { y: target.offsetTop, autoKill: true },
                        duration: 1.5,
                        ease: "power3.inOut"
                    });
                }
            });
        }
    };

    const toggleMenu = () => {
        setMenuOpen(prev => {
            const newState = !prev;
            gsap.to(".mobile-menu", {
                x: newState ? "0%" : "100%",
                duration: 0.5,
                ease: "power3.out"
            });
            return newState;
        });
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="Prana Logo" className="logoNav" />
            </div>

            <nav className="nav">
                <a href="#about" className="nav-link" onClick={handleLinkClick}>ACERCA DE NOSOTROS</a>
                <a href="#events" className="nav-link" onClick={handleLinkClick}>PRÓXIMOS EVENTOS</a>
                <a href="#contact" className="nav-link" onClick={handleLinkClick}>CONTACTO</a>
            </nav>

            <div className="icon">
                <img src={Bacteria} alt="Decorative Icon" className="bacteria" />
            </div>

            <div className="hamburger-icon" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className="mobile-menu">
                <div className="close-menu" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>

                <a href="#about" className="mobile-link" onClick={handleLinkClick}>ACERCA DE NOSOTROS</a>
                <a href="#events" className="mobile-link" onClick={handleLinkClick}>PRÓXIMOS EVENTOS</a>
                <a href="#contact" className="mobile-link" onClick={handleLinkClick}>CONTACTO</a>
            </div>
        </header>
    );
};

export default NavBar;
