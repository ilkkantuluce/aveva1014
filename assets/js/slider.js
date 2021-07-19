$(document).ready(function() {
  // @TODO - add temp disable on arrow click to prevent double clicks
  // @TODO - add active nav item switching and nav items as slider dots behavior

  var disabled = false;
  var classes = 'chemicals consumer-products energy power';

  $('.arrow-left').on('click', function() {
    if(disabled) { return; }

    var slides = $('.slide');
    var slide = $('.slide.slide-active');

    var prev = slide.prev();

    if(!prev.hasClass('slide')) {
      prev = slides.last();
    }

    slide.fadeOut('fast').removeClass('slide-active');
    var prevClass = prev.data('slide');

    setTimeout(function() {
      prev.fadeIn('slow').addClass('slide-active');
      $('.slider-inner').removeClass(classes).addClass(prevClass);
      disabled = false;
    }, 250);
  });

  $('.arrow-right').on('click', function() {
    if(disabled) { return; }

    var slides = $('.slide');
    var slide = $('.slide.slide-active');

    var next = slide.next();

    if(!next.hasClass('slide')) {
      next = slides.first();
    }

    slide.fadeOut('fast').removeClass('slide-active');
    var nextClass = next.data('slide');

    setTimeout(function() {
      next.fadeIn('slow').addClass('slide-active');
      $('.slider-inner').removeClass(classes).addClass(nextClass);
      disabled = false;
    }, 250);
  });

  $(document).on('click', '.title-nav .nav-link', function(e) {
    e.preventDefault();
    $('.background-video').fadeOut();
    document.querySelector('.background-video').pause();
    var item = $(this).data('slide');
    $('.slide').fadeOut('fast').removeClass('slide-active');

    setTimeout(function() {
      $('.slide-' + item).fadeIn('slow').addClass('slide-active');
      $('.slider-inner').removeClass(classes).addClass(item);
      disabled = false;
    }, 250);
  });
});
