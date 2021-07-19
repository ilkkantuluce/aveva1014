$(document).ready(function() {
  $('.pulse-dot').on('click', function() {
    var sidebar = $(this).data('sidebar');


    // start scale
    $('.industry').addClass('level-scale-up');

    // move left
    $('.industry').addClass('level-move-left');


    if($(window).width() > 800){
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('.video-wrapper').css('transform', 'translate(-130%, -100px)');
      $('.scenes-wrapper .title-wrapper.show-on-level div').css({'left': '-75%'});
      $('.level .legend.show-on-level').css({'left': '-75%'});
      $('.sidebar-wrapper').css('z-index', '4');
    }

    //Tablet
    if($(window).width() < 800){
     

    } 
    

    // open sidebar
    $('.industry').addClass('sidebar-active');
    $('.sidebar').removeClass('show-sidebar');
    $('.sidebar-' + sidebar).addClass('show-sidebar');

    if($('.energy').length && $('.sidebar-active').length && window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 769px)').matches) {
      $('.sidebar-wrapper').css('top', '-350px');
    }
  });

  $('.sidebar-close').on('click', function() {



    if($(window).width() > 800){
      $('.video-wrapper').css('transform', 'translate(0%, 0px)');
      $('.scenes-wrapper .title-wrapper.show-on-level div').css({'left': '-15%'});
      $('.level .legend.show-on-level').css({'left': '-15%'});
      $('.sidebar-wrapper').css('z-index', '4');
      setTimeout(function() {
        $('.sidebar-wrapper').css('z-index', '-1');
      }, 800);
    }

    //Tablet
    if($(window).width() < 800){
     

    } 
    


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
