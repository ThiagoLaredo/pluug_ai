import "../../css/global.css";
import "../../css/header.css";
import "../../css/introducao.css";
import "../../css/pq-escolher.css";
import "../../css/footer.css";
import "../../css/menu-mobile.css";
import "../../css/cores.css";
import "../../css/componentes.css";
import "../../css/potencialize-resultados.css";
import "../../css/agentes-inteligentes.css";
import "../../css/formulario-contato.css";

import MenuMobile from '../modules/menu-mobile.js';
import HeaderScroll from '../modules/header-scroll.js';
import FormHandler from '../modules/formHandler.js';
import { initPageOpenAnimations, initScrollAnimations } from '../modules/animations.js';
import VideoPreload from "../modules/VideoPreload.js";
import AnalyticsLoader from '../modules/analyticsLoader.js';
import VideoPopup from '../modules/VideoPopup.js';
import SwiperAgentsSlider from '../modules/SwiperAgentsSlider.js';
import ScrollToSection from '../modules/ScrollToSection.js'

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
        '[data-menu="instagram"]',
        '.header_acoes' // Novo parâmetro
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

    new VideoPreload();


    // Inicializa a classe
    new AnalyticsLoader();
    new FormHandler();

    //scroll ancora
    const scrollToContact = new ScrollToSection(".scroll-to-contact");
    scrollToContact.init();

    const swiperEl = document.querySelector('.agents-swiper');
    if (swiperEl) {
        new SwiperAgentsSlider();
    }
});