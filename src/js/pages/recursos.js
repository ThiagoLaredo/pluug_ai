import "../../css/global.css";
import "../../css/recursos.css";
import "../../css/header.css";
import "../../css/footer.css";
import "../../css/menu-mobile.css";
import "../../css/cores.css";
import "../../css/componentes.css";
import "../../css/social-sidebar.css";
import "../../css/btn-float.css";
import "../../css/formulario-contato.css";

import MenuMobile from '../modules/menu-mobile.js';
import HeaderScroll from '../modules/header-scroll.js';
import FormHandler from '../modules/formHandler.js';
import { initPageOpenAnimations, initScrollAnimations } from '../modules/animations.js';
import AnalyticsLoader from '../modules/analyticsLoader.js';

// 1. Importe primeiro o CSS das fontes
import "../../css/fonts.css";

// 2. Importe o Font Awesome (versão completa ou otimizada)
import '@fortawesome/fontawesome-free/css/all.min.css'; // Todos os ícones
// OU (versão otimizada):
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/brands.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';

// 3. Importe a fonte Inter
// Importe os pesos necessários
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";


document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM completamente carregado.");

    // Inicializa o menu mobile com submenu integrado, caso os elementos existam
    const menuMobile = new MenuMobile(
        '[data-menu="logo"]',
        '[data-menu="button"]',
        '[data-menu="list"]',
        '[data-menu="contato-mobile"]',
        '[data-menu="linkedin"]',
        '[data-menu="instagram"]'
    );
    if (menuMobile) {
        console.log('MenuMobile initialized successfully');
        menuMobile.init();
    } else {
        console.error('MenuMobile failed to initialize');
    }

    // Inicializa a mudança de Header ao scroll, se a classe .header existir
    const headerEl = document.querySelector('.header');
    if (headerEl) {
        const headerScroll = new HeaderScroll('.header');
        headerScroll.init();
    }

    const thumbnailEl = document.querySelector('#videoThumbnail');
    if (thumbnailEl) {
      const videoPopup = new VideoPopup(
        '#videoThumbnail',
        '#videoPopup',
        '#videoElement', 
        '#closePopup',
        '../videos/lancamento.mp4'
      );
      videoPopup.init();
    }

    // Animações de abertura e scroll
    initPageOpenAnimations();
    initScrollAnimations();


    // Inicializa a classe
    new AnalyticsLoader();

    new FormHandler();



});