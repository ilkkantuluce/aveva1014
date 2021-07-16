$(document).ready(function() {
  $('.level-button').on('click', function(e) {
    e.preventDefault();


    var activeLevel;
    var inactiveLevel;
    if($(this).hasClass('level-button-enterprise')) {
      activeLevel = 'enterprise';
      inactiveLevel = 'plant';
    } else if($(this).hasClass('level-button-plant')) {
      activeLevel = 'plant';
      inactiveLevel = 'enterprise';
    }

    $('body').addClass('scale-prep');
    $('.industry').addClass('level-' + activeLevel).addClass('scene-scale-up');
    $('.industry').addClass('level');
    $('.legend').addClass('slide-in');

    $('.industry.level-plant .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
    $('.industry.level-enterprise .chemicals .col-right .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
    
    $('.industry .fade').fadeOut();


    $('.scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});




    setTimeout(function() {
      $('.nav.top-nav').css({'margin-bottom': '150px'});
    }, 200);
  
    setTimeout(function() {
      $('.box-wrapper').css('display', 'flex');
      $('.col-wrapper .col').css('flex-basis', '100%');
      $('.title-wrapper').css('flex-basis', '50%');
      $('.hide-on-level').css('flex-basis', '50%');
      $('.level.level-plant .col-enterprise').hide();
      $('.level.level-enterprise .col-plant').hide();




    }, 500);

    setTimeout(function() {
      $('.pulse-dot').addClass('show-dot');
      $('.show-on-level').addClass('fade-in');

      $('.legend').css({'left': '-15%', 'transition': '1s'});
    }, 3000);
  });


  $('.industry.level-plant .chemicals .col-left .hide-on-level').fadeOut();
  $('.industry.level-enterprise .chemicals .col-right .hide-on-level').fadeOut();
   



});


function reloadCss() {
  var links = document.getElementsByTagName("link");
  for (var cl in links)
  {
    var link = links[cl];
    if (link.rel === "stylesheet")
      link.href += "";
  }
}

$(window).on('orientationchange resize', function(e) {
  // reloadCss();
});
