$(document).ready(function() {
  $('.splash.purple').on('click', function() {
    $(this).removeClass('purple').removeClass('ice-blue');
  });

  setTimeout(function() {
    $('.splash.purple').removeClass('purple');
  }, 2000);

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
