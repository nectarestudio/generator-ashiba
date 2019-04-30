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
  if ($(mainContainer).length != 0) {
    swiperBasicObject = new Swiper(mainContainer, {
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
  if ($(mainContainer).length != 0) {
    swiperMultiObject = new Swiper(mainContainer, {
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
    $(window).on('load', function () {
      swiperMultiObject.update()
    })

    $(window).on('resize', function () {
      swiperMultiObject.update()
    })

    return swiperMultiObject
  } else {
    console.log('swiperMultiInit target not found')
    return
  }
}
