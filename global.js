'use strict';

//SCROLL CHANGES HEADER
(function ($) {
 $(window).scroll(function(){
  var sticky = $('header'),
      scroll = $(window).scrollTop();
  if (scroll >= 5) sticky.addClass('scrolled');
  else sticky.removeClass('scrolled');
});

 //SHOW/HIDE MENU
 $('nav').click( function(e) {
    e.preventDefault();
    $('menu').toggleClass('show');
});

 //BLUE HOVER ON STEPS
 $('.steps').click( function(){
    if ( $(this).hasClass('current') ) {
        $(this).removeClass('current');
    } else {
        $('.steps').removeClass('current');
        $(this).addClass('current');
    }
});

 //APP SHOT CHANGE IPHONE
  $('.step-1').click( function(){
      $('.column-two').css("background-image", "url('images/app-shot-1.png')");
});
    $('.step-2').click( function(){
      $('.column-two').css("background-image", "url('images/app-shot-2.png')");
});
      $('.step-3').click( function(){
      $('.column-two').css("background-image", "url('images/app-shot-3.png')");
});
        $('.step-4').click( function(){
      $('.column-two').css("background-image", "url('images/app-shot-4.png')");
});

  //PRELOADER
	$("#preloader").fadeOut("slow");
})(jQuery);
