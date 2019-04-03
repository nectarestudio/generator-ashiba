import Swiper from 'swiper';

// Export every Swiper Type Instance object
export let swiperBasicInstance, swiperMultiInstance;

export function swiperBasicInit(
  mainContainer,
  swiperObject,
  swiperDirection,
  loopValue,
  slidesGap,
  prevButton,
  nextButton
  ) {
  swiperObject = new Swiper(mainContainer, {
    // Optional parameters
    direction: swiperDirection,
    slidesPerView: 1,
    loop: loopValue,
    speed: 600,
    parallax: false,
    spaceBetween: slidesGap,
    autoHeight: true,
    autoplay: {
      delay: 7000,
    },
    disableOnInteraction: false,
    grabCursor: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
      disabledClass: 'is-disabled',
      hiddenClass: 'is-hidden',
    },
  });
  swiperBasicInstance = swiperObject;
}

export function swiperMultiInit(
  mainContainer,
  swiperObject,
  swiperDirection,
  loopValue,
  slidesGap,
  prevButton,
  nextButton
  ) {
  swiperObject = new Swiper(mainContainer, {
    // Optional parameters
    direction: swiperDirection,
    slidesPerView: 2.5,
    loop: loopValue,
    loopAdditionalSlides: 1,
    speed: 600,
    parallax: false,
    spaceBetween: slidesGap,
    autoHeight: true,
    autoplay: {
      delay: 7000,
    },
    disableOnInteraction: false,
    grabCursor: true,

    // Navigation arrows
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
      disabledClass: 'is-disabled',
      hiddenClass: 'is-hidden',
    },
    breakpoints: {
      1920: {
        slidesPerView: 2.5,
      },
      1600: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
  swiperMultiInstance = swiperObject;
}

