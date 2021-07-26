/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var n=/\+/g;function o(e){return r.raw?e:encodeURIComponent(e)}function i(o,i){var t=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(t):t}var r=e.cookie=function(n,t,c){if(arguments.length>1&&!e.isFunction(t)){if("number"==typeof(c=e.extend({},r.defaults,c)).expires){var u=c.expires,s=c.expires=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*u)}return document.cookie=[o(n),"=",(a=t,o(r.json?JSON.stringify(a):String(a))),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var a,d,p=n?void 0:{},f=document.cookie?document.cookie.split("; "):[],l=0,m=f.length;l<m;l++){var x=f[l].split("="),g=(d=x.shift(),r.raw?d:decodeURIComponent(d)),v=x.join("=");if(n===g){p=i(v,t);break}n||void 0===(v=i(v))||(p[g]=v)}return p};r.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});

let windowSize = 'desktop';
let previousWindowSize = 'desktop';

$(document).ready(function() {
  $('.level-button').on('click', function(e) {
    e.preventDefault();
    $(this).fadeOut(1000);
        if (window.history && window.history.pushState) {

            window.history.pushState('forward', "", window.location.href);

    $(window).on('popstate', function() {
      //alert('Back button was pressed.');
      window.location.reload();
    });

  }
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


    $('.industry .fade').animate({opacity: "0"}, 400, 'linear', function() {
      if($(window).width() > 1000){
        $('.nav.top-nav').animate({marginBottom: "100px"}, 1100, 'swing');
      }
    }).animate({height: "0"}, 1100, 'swing');

    $('.industry.level-plant .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
    $('.industry.level-enterprise .chemicals .col-right .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');



    setTimeout(function() {
      $('.level-enterprise .level-button-enterprise').fadeOut();
      $('.level-plant .level-button-plant').fadeOut();
    }, 800);




    //Desktop
    if($(window).width() > 1000){

      $('.level-plant .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});

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

      if ( $(this).parents('.col-enterprise').length)
        $('.industry .chemicals .col-left .hide-on-level').css({'animation': 'mymove 2s', 'animation-fill-mode': 'forwards'});

      setTimeout(function() {
        $('.industry .chemicals .col-left .hide-on-level').css({'animation': '0s', 'left': '0px', 'top': '0px', 'transition': '0s'});
        $('.level.level-enterprise .col-plant').hide();
        $('.level-enterprise .box-wrapper').css('display', 'flex');
        $('.level-enterprise .col-wrapper .col').css('flex-basis', '100%');
        $('.level-enterprise .title-wrapper').css('flex-basis', '50%');
        $('.level-enterprise .hide-on-level').css('flex-basis', '50%');
      }, 5600);

      setTimeout(function() {
        $('.level-enterprise .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});
      }, 800);

    }

    //Tablet
    if($(window).width() < 1000 && $(window).width() > 450){

      $('.level-enterprise .level-button-enterprise').fadeOut();
      $('.level-plant .level-button-plant').fadeOut();

      $('.level .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});

      $('.industry.level-plant .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
      $('.industry.level-enterprise .chemicals .col-right .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');

      //$('.level-plant .chemicals .col-right .hide-on-level').css({'margin-top': '-100px'});


      setTimeout(function() {
        $('.legend').css({'left': '0%', 'transition': '1s'});
      }, 2000);


    }


    if($(window).width() < 450){

      $('.level .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});

      $('.level.level-plant .col-enterprise').hide();
      $('.level.level-enterprise .col-plant').hide();

      setTimeout(function() {
        $('.legend').css({'left': '0%', 'transition': '1s'});
      }, 2000);

      $(window).scrollTop(500);

    }




    //When resize browser
    $(window).resize(function() {

      if($(window).width() > 800){
        console.log($('.main-title-wrapper.fade').height());
        $('.nav.top-nav').css({'margin-bottom': $('.main-title-wrapper.fade').height() + 60});
      }
      //Desktop
      if($(window).width() > 1000){

        $('.level-plant .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});

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

        $('.industry .chemicals .col-left .hide-on-level').css({'animation': 'mymove 2s', 'animation-fill-mode': 'forwards'});

        setTimeout(function() {
          $('.industry .chemicals .col-left .hide-on-level').css({'animation': '0s', 'left': '0px', 'top': '0px', 'transition': '0s'});
          $('.level.level-enterprise .col-plant').hide();
          $('.level-enterprise .box-wrapper').css('display', 'flex');
          $('.level-enterprise .col-wrapper .col').css('flex-basis', '100%');
          $('.level-enterprise .title-wrapper').css('flex-basis', '50%');
          $('.level-enterprise .hide-on-level').css('flex-basis', '50%');
        }, 5600);

        setTimeout(function() {
          $('.level-enterprise .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});
        }, 800);

      }

      //Tablet
      if($(window).width() < 1000){

        $('.level-enterprise .level-button-enterprise').fadeOut();
        $('.level-plant .level-button-plant').fadeOut();

        $('.level .scenes-wrapper .title-wrapper.show-on-level div').css({'animation-name': 'show-on-level', 'top': '-20%', 'left': '-15%', 'animation-duration': '1s', 'opacity': '1'});

        $('.industry.level-plant .chemicals .col-left .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');
        $('.industry.level-enterprise .chemicals .col-right .hide-on-level').animate({top: '100px', opacity: '0'}, 'slow');

        //$('.level-plant .chemicals .col-right .hide-on-level').css({'margin-top': '-100px'});


        setTimeout(function() {
          $('.legend').css({'left': '0%', 'transition': '1s'});
        }, 2000);

      }


      if($(window).width() < 450){
        $('.level.level-plant .col-enterprise').hide();
        $('.level.level-enterprise .col-plant').hide();
      }


    });


  });


  $('.industry.level-plant .chemicals .col-left .hide-on-level').fadeOut();
  $('.industry.level-enterprise .chemicals .col-right .hide-on-level').fadeOut();

  if($(window).width() > 999)
    windowSize = 'desktop';

  if($(window).width() < 1000)
    windowSize = 'tablet';

  if($(window).width() < 450)
    windowSize = 'phone';


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
  previousWindowSize = windowSize;

  if($(window).width() > 999)
    windowSize = 'desktop';

  if($(window).width() < 1000)
    windowSize = 'tablet';

  if($(window).width() < 450)
    windowSize = 'phone';

  if ( previousWindowSize != windowSize && $('.scene-scale-up').length )
    window.location.reload(false);
});