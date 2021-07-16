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

    ///$('.industry .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
    //$('.industry .chemicals .col-left  .hide-on-level').animate({display: 'none'}, 'slow');

    $('.industry .fade').fadeOut();
  


    setTimeout(function() {
      $('.pulse-dot').addClass('show-dot');
      $('.show-on-level').addClass('fade-in');
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
