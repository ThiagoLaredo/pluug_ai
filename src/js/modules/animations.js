import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

// export const initPageOpenAnimations = () => {

//     // Define os elementos que terão animações de abertura com a classe 'page-open-animate'
//     const pageOpenElements = document.querySelectorAll(".page-open-animate");
//     gsap.set(pageOpenElements, { opacity: 0 });

//     gsap.to(pageOpenElements, {
//         opacity: 1,
//         duration: 0.5,
//         delay: 2,
//         stagger: 0.2, // Animação com um pequeno atraso entre os elementos
//         ease: "power1.inOut",
//     });

//     gsap.set([".contact-info", ".social-instagram a", ".header", "[data-menu='logo']", "[data-menu='button']", "#menu > li > a", "#menu > li > span"], { opacity: 0 });

//     gsap.to(".header", { duration: 0.1, opacity: 1, ease: "power1.inOut" });
//     gsap.to(".contact-info", { duration: 0.5, delay: 0.1, opacity: 1, ease: "power1.inOut" });
//     gsap.to(".social-instagram a", { duration: 0.5, delay: 0.2, opacity: 1, ease: "power1.inOut" });
//     gsap.to("[data-menu='logo']", { duration: 0.5, delay: 0.3, opacity: 1, ease: "power1.inOut" });
//     gsap.to("[data-menu='button']", { duration: 0.5, delay: 0.4, opacity: 1, ease: "power1.inOut" });
    
//     // Anima apenas os links e spans de primeiro nível, incluindo o <span>Serviços</span>
//     gsap.to("#menu > li > a, #menu > li > span", { 
//         duration: 0.5, 
//         delay: 0.8, 
//         opacity: 1, 
//         stagger: 0.2, 
//         ease: "power1.out" 
//     });
//   }

export const initPageOpenAnimations = () => {
  // 1. Configuração INICIAL (só prepara os elementos sem mover)
  gsap.set("[data-menu='logo'], [data-menu='button'], #menu > li > a, #menu > li > span, .header_acoes a", {
      opacity: 0 // Só controlamos a opacidade inicial
  });

  gsap.set(".page-open-animate", {
      opacity: 0,
      y: 0 // Garante posição Y inicial zerada
  });

  // 2. Timeline PRINCIPAL
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  
  // Logo (0.2s)
  tl.to("[data-menu='logo']", {
      opacity: 1,
      duration: 0.8
  });

  // Botão Menu (0.3s)
  tl.to("[data-menu='button']", {
      opacity: 1,
      duration: 0.6
  }, 0.2);

  // Itens do Menu (0.4s com stagger)
  tl.to("#menu > li > a, #menu > li > span", {
      opacity: 1,
      stagger: 0.1,
      duration: 0.5
  }, 0.3);

  // Botões Ação (0.6s)
  tl.to(".header_acoes a", {
      opacity: 1,
      stagger: 0.15,
      duration: 0.5
  }, 0.5);

  // 3. Animação DOS ELEMENTOS DA SECTION (com verificação de posição)
  document.querySelectorAll('.page-open-animate').forEach((el, i) => {
      const rect = el.getBoundingClientRect();
      const isAboveFold = rect.top < window.innerHeight;
      
      // Só anima se estiver na área visível inicial
      if (isAboveFold) {
          gsap.fromTo(el, 
              { opacity: 0, y: 30 },
              {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  delay: 0.8 + (i * 0.1),
                  ease: "back.out(1.4)"
              }
          );
      } else {
          // Mantém visível se já estiver abaixo do fold
          gsap.set(el, { opacity: 1 });
      }
  });
};


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