$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      pagination: '.swiper-pagination',
      paginationClickable: true,
      spaceBetween: 30,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        effect: 'fade'
    })
  });
