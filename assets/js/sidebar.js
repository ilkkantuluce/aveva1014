$(document).ready(function() {
  $('.pulse-dot').on('click', function() {
    var sidebar = $(this).data('sidebar');

    $("html, body").animate({ scrollTop: 0 }, "slow");

    // start scale
    $('.industry').addClass('level-scale-up');

    // move left
    $('.industry').addClass('level-move-left');

    $('.video-wrapper').animate({left: '-130%'}, 'fast');
    $('.scenes-wrapper .title-wrapper.show-on-level div').animate({left: '-75%'}, 'fast');
    $('.level .legend.show-on-level').animate({left: '-75%'}, 'fast');

    $('.sidebar-wrapper').css('z-index', '4');

    

    // open sidebar
    $('.industry').addClass('sidebar-active');
    $('.sidebar').removeClass('show-sidebar');
    $('.sidebar-' + sidebar).addClass('show-sidebar');

    if($('.energy').length && $('.sidebar-active').length && window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 769px)').matches) {
      $('.sidebar-wrapper').css('top', '-350px');
    }
  });

  $('.sidebar-close').on('click', function() {

    
    $('.video-wrapper').animate({left: '0%'});
    $('.scenes-wrapper .title-wrapper.show-on-level div').animate({left: '-15%'});
    $('.level .legend.show-on-level').animate({left: '-15%'});

    $('.sidebar-wrapper').css('z-index', '4');

    setTimeout(function() {
      $('.sidebar-wrapper').css('z-index', '-1');
    }, 800);


    // push video back
    $('.industry').addClass('level-push-back');

    // bring sidebar to front
    $('.industry').addClass('sidebar-to-front');

    // close sidebar
    $('.industry').removeClass('sidebar-active');

    // get level into position
    $('.industry').removeClass('level-move-left');
    $('.industry').removeClass('level-scale-up');

    setTimeout(function() {
      if($('.energy').length && window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 769px)').matches) {
        $('.sidebar-wrapper').css('top', '0');
      }

      $('.industry').removeClass('level-push-back');
      $('.industry').removeClass('sidebar-to-front');
    }, 2500);
  });
});
