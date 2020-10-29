var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})