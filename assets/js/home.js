$(document).ready(function() {
  $('.splash.purple').on('click', function() {
    $(this).removeClass('purple').removeClass('ice-blue');
  });

  setTimeout(function() {
    $('.splash.purple').removeClass('purple');
  }, 1700);

  $('.splash .title-nav .nav-link').on('click', function(e) {
    e.preventDefault();

    $('.splash-inner').fadeOut('fast');
    $('.bg').animate({opacity: '0'}, 'slow');
    
    setTimeout(function() {
      $('.bg').animate({opacity: '1'}, 'slow');
      $('.splash.purple').removeClass('purple');
    }, 2000);

    setTimeout(function() {
      $('.home').addClass('purple');
      $('.home').addClass('splash');

      $('body').addClass('slider');
      $('.slider-inner').removeClass('hidden');
      $('.slider').fadeIn('slow');
    }, 250);
  });



  $('.arrow').on('click', function(e) {
    e.preventDefault();

    $('.splash-inner').fadeOut('fast');

    $('.bg').animate({opacity: '0'}, 'slow');
    
    setTimeout(function() {
      $('.bg').animate({opacity: '1'}, 'slow');
      $('.splash.purple').removeClass('purple');
    }, 2000);

    setTimeout(function() {
      $('.home').addClass('purple');
      $('.home').addClass('splash');

      $('body').addClass('slider');
      $('.slider-inner').removeClass('hidden');
      $('.slider').fadeIn('slow');
    }, 250);
  });

});
