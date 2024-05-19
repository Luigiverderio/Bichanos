
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  effect: 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
});