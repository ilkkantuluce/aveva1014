$(document).ready(function() {
  $('.splash.purple').on('click', function() {
    $(this).removeClass('purple').removeClass('ice-blue');
  });

  setTimeout(function() {
    $('.splash.purple').removeClass('purple');
    $('.purple-invisible').animate({opacity: '1'}, 'slow');
    }, 2200);

  $('.splash .title-nav .nav-link').on('click', function(e) {
    e.preventDefault();

    $('.splash-inner').fadeOut('fast');

    setTimeout(function() {
      $('body').removeClass('splash').addClass('slider');
      $('.slider-inner').removeClass('hidden');
      $('.slider').fadeIn('slow');
    }, 250);
  });
});
