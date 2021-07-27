$(document).ready(function($) {
  $('.level-button').on('click', function(e) {
    e.preventDefault();

    $(this).hide();

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

    var video = $(this).closest('.col');
    var container = $(this).closest('.scenes');

    var toHide = container.find('.col' + inactiveLevel).not(video).addClass('push-back');

    // fade out title and text
    $('.fade').addClass('out');

    // slide down opposite level
    $('.col-' + inactiveLevel).animate({marginTop: '1000px'}, {duration: 1}).fadeOut("fast");

    // widen container
    $('body').addClass('scale-prep');

    // scale up level
    $('.industry').addClass('level-' + activeLevel).addClass('scene-scale-up');

    $('.industry').addClass('level');
    $('.legend').addClass('slide-in');
    $('.fade').hide(1000);
    $(window).trigger('orientationchange');

    setTimeout(function() {
      $('.pulse-dot').addClass('show-dot');
      $('.show-on-level').addClass('fade-in');
    }, 3000);
    $('html, body').delay(1000).animate({scrollTop: 150 }, 800);
  });
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
