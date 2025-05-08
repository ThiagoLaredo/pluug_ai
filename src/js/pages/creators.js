import "../../css/global.css";
import "../../css/recursos.css";
import "../../css/header.css";
import "../../css/footer.css";
import "../../css/menu-mobile.css";
import "../../css/cores.css";
import "../../css/componentes.css";
import "../../css/formulario-contato.css";
import "../../css/creators.css";

import MenuMobile from '../modules/menu-mobile.js';
import HeaderScroll from '../modules/header-scroll.js';
import FormHandler from '../modules/formHandler.js';
import { initPageOpenAnimations, initScrollAnimations } from '../modules/animations.js';
import AnalyticsLoader from '../modules/analyticsLoader.js';
import { SwiperDepoimentos } from '../modules/SwiperDepoimentos.js';
import ScrollToSection from '../modules/ScrollToSection.js'

// 1. Importe primeiro o CSS das fontes
import "../../css/fonts.css";

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
        '[data-menu="whatsapp"]',
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

    // Animações de abertura e scroll
    initPageOpenAnimations();
    initScrollAnimations();

    //scroll ancora
    const scrollToContact = new ScrollToSection(".scroll-to-contact");
    scrollToContact.init();


    // Inicializa a classe
    new AnalyticsLoader();
    new FormHandler();

    // Verifica se estamos na página de creators
    if (document.querySelector('.page-creators')) {
        // Inicializa o Swiper apenas se o elemento existir
        const swiperContainer = document.querySelector('.swiper-depoimentos');
        if (swiperContainer) {
            new SwiperDepoimentos();
        } else {
            console.warn('Container do Swiper não encontrado na página creators');
        }
    }
});