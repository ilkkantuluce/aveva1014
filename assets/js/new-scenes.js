$(document).ready(function() {
  $('.level-button').on('click', function(e) {
    e.preventDefault();

    $('.nav-link').not('.level-link a').removeClass('active');


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

  

    setTimeout(function() {
      $('.pulse-dot').addClass('show-dot');
      $('.show-on-level').addClass('fade-in');
    }, 2000);


    $('.industry .fade').fadeOut();
    $('.industry.level-plant .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
    $('.industry.level-enterprise .chemicals .col-right .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
    

    
    setTimeout(function() {
      $('.level-enterprise .level-button-enterprise').fadeOut();
      $('.level-plant .level-button-plant').fadeOut();
    }, 800);

    //Desktop
    if($(window).width() > 800){
      

  
      $('.level-plant .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '0%', 'animation-duration': '1s', 'opacity': '1'});
  
  
      setTimeout(function() {
        $('.nav.top-nav').css({'margin-bottom': '150px'});
      }, 200);

      setTimeout(function() {
        $('.legend').css({'left': '-15%', 'transition': '1s'});
      }, 2000);
    
      setTimeout(function() {
        $('.level-plant .box-wrapper').css('display', 'flex');
        $('.level-plant .col-wrapper .col').css('flex-basis', '100%');
        $('.level-plant .title-wrapper').css('flex-basis', '50%');
        $('.level-plant .hide-on-level').css('flex-basis', '50%');
        $('.level-button-plant').hide();
        $('.level.level-plant .col-enterprise').hide();
      }, 500);
  
      $('.industry .chemicals .col-left .hide-on-level').animate({left: '100%'}, 1250);
  
  
      setTimeout(function() {
        $('.industry .chemicals .col-left .hide-on-level').css({'left': '0px', 'top': '0px', 'transition': '0s'});
  
        $('.level.level-enterprise .col-plant').hide();
  
        $('.level-enterprise .box-wrapper').css('display', 'flex');
        $('.level-enterprise .col-wrapper .col').css('flex-basis', '100%');
        $('.level-enterprise .title-wrapper').css('flex-basis', '50%');
        $('.level-enterprise .hide-on-level').css('flex-basis', '50%');
      }, 3600);
  
      setTimeout(function() {
        $('.level-enterprise .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '0%', 'animation-duration': '1s', 'opacity': '1'});
      }, 800);

    }




    //Tablet
    if($(window).width() < 800){

      $('.level .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});


      $('.industry.level-plant .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
      $('.industry.level-enterprise .chemicals .col-right .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
      


      setTimeout(function() {
        $('.legend').css({'left': '0%', 'transition': '1s'});
      }, 2000);

    } 
    
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
