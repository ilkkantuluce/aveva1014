$(document).ready(function() {
    var didit = false;
  $('.pulse-dot').on('click', function() {
    var that = $(this);
    var sidebar = $(this).data('sidebar');


    // start scale
    $('.industry').addClass('level-scale-up');

    // move left
    $('.industry').addClass('level-move-left');


    if($(window).width() > 1000){
      $("html, body").animate({ scrollTop: 0 }, "slow");
      $('.video-wrapper').css('transform', 'translate(-110%, 0) scale(1.20)');
      $('.scenes-wrapper .title-wrapper.show-on-level div').css({'left': '-75%'});
      $('.level .legend.show-on-level').css({'left': '-75%'});
      $('.sidebar-wrapper').css('z-index', '4');

    var timeoutAmount = '800';
    if ( didit ) timeoutAmount = '0'
    setTimeout( function() {
      console.log(parseInt($('.video-wrapper').css('left'), 10));
        var o1 = that.offset();
    var o2 = $('.sidebar-wrapper').offset();
    var dx = o1.left - o2.left;
    var dy = o1.top - o2.top;
    var distance = Math.sqrt(dx * dx + dy * dy);
    $('.video-wrapper').css('left', (parseInt($('.video-wrapper').css('left'), 10)+(((o2.left/2)-16)-o1.left)));
    console.log('it is: '+o1.left);
    console.log('it should be: '+((o2.left/2)-16));
    console.log('needs to move left: '+(((o2.left/2)-16)-o1.left));
    didit=true;
    }, timeoutAmount);
    }

    //Tablet
    if($(window).width() < 1000 && $(window).width() > 380){


      $('.legend').css({'left': '-200%'});
      $('.title-wrapper').css({opacity: '0'});
      setTimeout( function() { $('.title-wrapper').css({'margin-top': '-390px'}); }, 400);
      //if ( !didit ) $('html, body').delay(1000).animate({scrollTop: 150 }, 800);
      //$('.title-wrapper').animate({opacity: '0'}, 400, 'swing', function() {$(this).css({'margin-top': '-390px'});});
      //$('.title-wrapper').css({'transition': '0s'});


      var timeoutAmount = '800';
      if ( didit ) timeoutAmount = '0'
      setTimeout( function() {
        console.log(parseInt($('.video-wrapper').css('left'), 10) + $(window).width()/2-16);
          var o1 = that.offset();
      $('.video-wrapper').css('left', (parseInt($('.video-wrapper').css('left'), 10) + $(window).width()/2-16 - o1.left));
      console.log('it is: '+o1.left);
      console.log('it needs to be: '+($(window).width()/2-16));
      console.log('difference: '+($(window).width()/2-16 - o1.left ));
      console.log('current left: '+(parseInt($('.video-wrapper').css('left'), 10) ));
      console.log('new left: '+(parseInt($('.video-wrapper').css('left'), 10) + $(window).width()/2-16 - o1.left ));
      didit=true;
      }, timeoutAmount);


    }


    //Mobile
    if($(window).width() < 380){

      $('.legend').css({'left': '-200%'});
      $('.title-wrapper').css({opacity: '0'});
      setTimeout( function() { $('.col-left .title-wrapper').css({'margin-top': '-600px'}); }, 400);
      setTimeout( function() { $('.col-right .title-wrapper').css({'margin-top': '-500px'}); }, 400);
      if ( !didit ) $('html, body').delay(1000).animate({scrollTop: 100 }, 800);
      //$('.title-wrapper').animate({opacity: '0'}, 400, 'swing', function() {$(this).css({'margin-top': '-390px'});});
      //$('.title-wrapper').css({'transition': '0s'});


      var timeoutAmount = '800';
      if ( didit ) timeoutAmount = '0'
      setTimeout( function() {
        console.log(parseInt($('.video-wrapper').css('left'), 10) + $(window).width()/2-16);
          var o1 = that.offset();
      $('.video-wrapper').css('left', (parseInt($('.video-wrapper').css('left'), 10) + $(window).width()/2-16 - o1.left));
      console.log('it is: '+o1.left);
      console.log('it needs to be: '+($(window).width()/2-16));
      console.log('difference: '+($(window).width()/2-16 - o1.left ));
      console.log('current left: '+(parseInt($('.video-wrapper').css('left'), 10) ));
      console.log('new left: '+(parseInt($('.video-wrapper').css('left'), 10) + $(window).width()/2-16 - o1.left ));
      didit=true;
      }, timeoutAmount);

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
    didit = false;
    $('.video-wrapper').css('left', 0);


    if($(window).width() > 1000){
      $('.video-wrapper').css('transform', 'translate(0%, 0px)');
      $('.scenes-wrapper .title-wrapper.show-on-level div').css({'left': '-15%'});
      $('.level .legend.show-on-level').css({'left': '-15%'});
      $('.sidebar-wrapper').css('z-index', '4');
      setTimeout(function() {
        $('.sidebar-wrapper').css('z-index', '-1');
      }, 800);
    }

    //Tablet
    if($(window).width() < 1000){
      $('.legend').css({'left': '0%'});
      $('.title-wrapper').css({'opacity': '1'});
      $('.title-wrapper').css({'margin-top': '0px'});
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
