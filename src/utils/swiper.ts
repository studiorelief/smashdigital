import 'swiper/css/bundle';

// @ts-expect-error : swiper bundle root
import Swiper from 'swiper/bundle';

export function swiperPartners() {
  new Swiper('.swiper.is-partenaires', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 48,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: false,
      disableOnInteraction: false,
      reverseDirection: false,
    },
    speed: 2000,
  });
}

export function swiperRisque(): void {
  new Swiper('.swiper.is-risque', {
    effect: 'fade',
    crossfade: true,
    direction: 'horizontal',
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
      dragClass: 'swiper-drag',
    },
    createElements: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      nextEl: '.swiper-right.is-risque',
      prevEl: '.swiper-left.is-risque',
    },
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    speed: 2000,
  });
}

export function swiperReferences(): void {
  new Swiper('.swiper.is-references', {
    direction: 'horizontal',
    createElements: true,
    mousewheel: {
      forceToAxis: true,
    },
    slideToClickedSlide: false,
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: -100,
    speed: 2000,
  });
}

export function swiperUseCase(): void {
  new Swiper('.swiper.is-uc', {
    direction: 'horizontal',
    /* pagination: true, */
    navigation: {
      nextEl: '.swiper-left',
      prevEl: '.swiper-right',
    },
    createElements: true,
    autoHeight: true,
    mousewheel: {
      forceToAxis: true,
    },
    slideToClickedSlide: false,
    loop: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: '20rem',
    speed: 1000,
  });
}
