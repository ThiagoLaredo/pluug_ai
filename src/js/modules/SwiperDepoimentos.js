import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export class SwiperDepoimentos {
    constructor() {
        this.init();
    }

    init() {
        // Verifica se o elemento existe
        const swiperEl = document.querySelector('.swiper-depoimentos');
        if (!swiperEl) {
            console.warn('Elemento .swiper-depoimentos não encontrado');
            return;
        }

        // Configurações do Swiper
        const swiperConfig = {
            modules: [Navigation, Pagination, EffectCoverflow],
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            grabCursor: true,
            effect: 'coverflow',
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    coverflowEffect: {
                        depth: 50
                    }
                },
                1024: {
                    slidesPerView: 1,
                    coverflowEffect: {
                        depth: 0
                    }
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            }
        };

        // Inicializa o Swiper
        try {
            this.swiper = new Swiper('.swiper-depoimentos', swiperConfig);
            console.log('Swiper de depoimentos inicializado com sucesso');
        } catch (error) {
            console.error('Erro ao inicializar Swiper:', error);
        }
    }
}