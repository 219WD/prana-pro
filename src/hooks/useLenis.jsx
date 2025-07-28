import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

export const initLenis = () => {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0); 

  return () => {
    gsap.ticker.remove((time) => lenis.raf(time * 1000));
    lenis.destroy(); 
  };
};