const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
  spaceBetween: 200,
  loopAdditionalSlides: 3,
  watchSlidesProgress: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
