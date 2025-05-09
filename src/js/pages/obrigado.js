import "../../css/global.css";
import "../../css/header.css";
import "../../css/introducao.css";
import "../../css/footer.css";
import "../../css/menu-mobile.css";
import "../../css/submenu.css";
import "../../css/cores.css";
import "../../css/componentes.css";
import "../../css/fontes.css";
import "../../css/contato.css";
import "../../css/social-sidebar.css";
import "../../css/popup.css";
import "../../css/obrigado.css";

document.addEventListener('DOMContentLoaded', () => {

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
        menuMobile.init();
    } else {
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

    // Popup do e-book
    new EbookPopup();
    new EbookForm();

    // Formulário
    new FormHandler();

    // JSON dos cases
    const submenuCasesEl = document.querySelector('.submenu-cases');
   
});