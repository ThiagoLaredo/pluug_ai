import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export const initPageOpenAnimations = () => {

    // Define os elementos que terão animações de abertura com a classe 'page-open-animate'
    const pageOpenElements = document.querySelectorAll(".page-open-animate");
    gsap.set(pageOpenElements, { opacity: 0 });

    gsap.to(pageOpenElements, {
        opacity: 1,
        duration: 0.5,
        delay: 2,
        stagger: 0.2, // Animação com um pequeno atraso entre os elementos
        ease: "power1.inOut",
    });

    gsap.set([".contact-info", ".social-instagram a", ".header", "[data-menu='logo']", "[data-menu='button']", "#menu > li > a", "#menu > li > span", ".solucoes-intro", ".solucao-intro", ".intro-cases", ".case-titulo"], { opacity: 0 });

    gsap.to(".header", { duration: 0.1, opacity: 1, ease: "power1.inOut" });
    gsap.to(".contact-info", { duration: 0.5, delay: 0.1, opacity: 1, ease: "power1.inOut" });
    gsap.to(".social-instagram a", { duration: 0.5, delay: 0.2, opacity: 1, ease: "power1.inOut" });
    gsap.to("[data-menu='logo']", { duration: 0.5, delay: 0.3, opacity: 1, ease: "power1.inOut" });
    gsap.to("[data-menu='button']", { duration: 0.5, delay: 0.4, opacity: 1, ease: "power1.inOut" });
    gsap.to([".solucao-intro", ".solucoes-intro", ".intro-cases", ".case-titulo"], { duration: 0.5, delay: 2, opacity: 1, ease: "power1.inOut", });
    
    // Anima apenas os links e spans de primeiro nível, incluindo o <span>Serviços</span>
    gsap.to("#menu > li > a, #menu > li > span", { 
        duration: 0.5, 
        delay: 0.8, 
        opacity: 1, 
        stagger: 0.2, 
        ease: "power1.out" 
    });
  }

  export function initScrollAnimations() {
    console.log("initScrollAnimations() chamada!");
  
    const elements = document.querySelectorAll(".animate-me");
    console.log("Elementos encontrados:", elements);
  
    elements.forEach((el, index) => {
      console.log(`Registrando ScrollTrigger para o elemento ${index}`, el);
  
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
      });
    });
  }