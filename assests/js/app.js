const carousel = new bootstrap.Carousel('#myCarousel')
$('.carousel').carousel();
$(document).ready(function(){
    $('.carousel').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      dots: false
    });
  });
  
