$(document).ready(function(){
  var scroll_start = 0;
  var startchange = $('#startchange');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
        $(".navbar").addClass('navbar-scroll');
        $(".navbar-brand").addClass('navbar-brand-scroll');
        $(".nav").addClass('nav-scroll');

      } else {
        $(".navbar").removeClass('navbar-scroll');
        $(".navbar-brand").removeClass('navbar-brand-scroll');
        $(".nav").removeClass('nav-scroll');
      }
    });
  }
});