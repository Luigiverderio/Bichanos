
const swiper1 = new Swiper('#swiper1',{
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
const swiper2 = new Swiper('#swiper2',{
  // Optional parameters
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 4,
  spaceBetween: 30,
});


  var swiper = new Swiper('#swiperAdestramento', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 40,
          },
      },
  });

