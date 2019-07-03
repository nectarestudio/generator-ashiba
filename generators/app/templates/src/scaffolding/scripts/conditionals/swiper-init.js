import Swiper from 'swiper';

export function swiperBasicInit(
  mainContainer,
  swiperBasicObject,
  swiperDirection,
  loopValue,
  slidesGap,
  prevButton,
  nextButton
) {
  if ($(mainContainer).length !== 0) {
    swiperBasicObject = new Swiper(mainContainer, {
      // Optional parameters
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: true,
      },
      direction: swiperDirection,
      slidesPerView: 1,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
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
    $(window).on('load', function () {
      swiperBasicObject.update()
    })

    $(window).on('resize', function () {
      swiperBasicObject.update()
      console.log('resize')
    })

    return swiperBasicObject
  } else {
    console.log('swiperBasicInit target not found')
    return
  }
}

export function swiperMultiInit(
  mainContainer,
  swiperMultiObject,
  swiperDirection,
  loopValue,
  slidesGap,
  prevButton,
  nextButton
) {
  if ($(mainContainer).length !== 0) {
    swiperMultiObject = new Swiper(mainContainer, {
      // Optional parameters
      // Disable preloading of all images
      preloadImages: false,
      // Enable lazy loading
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: true,
      },
      direction: swiperDirection,
      slidesPerView: '4',
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      loop: loopValue,
      loopAdditionalSlides: 1,
      speed: 600,
      parallax: false,
      spaceBetween: slidesGap,
      autoHeight: false,
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
        771: {
          slidesPerView: 1,
        },
        1107: {
          slidesPerView: 2,
        },
        1379: {
          slidesPerView: 3,
        },
        1579: {
          slidesPerView: 4,
        },
      },
    });
    return swiperMultiObject
  } else {
    console.log('swiperMultiInit target not found')
    return
  }
}
