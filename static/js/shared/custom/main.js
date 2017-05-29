$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if (scrollTop >= 100) {
      $(".navbar").addClass('navbar-scroll');
      $(".navbar-brand").addClass('navbar-brand-scroll');
      $(".nav").addClass('nav-scroll');
    } else if (scrollTop < 100) {
      $(".navbar").removeClass('navbar-scroll');
      $(".navbar-brand").removeClass('navbar-brand-scroll');
      $(".nav").removeClass('nav-scroll');
    };
  });
});