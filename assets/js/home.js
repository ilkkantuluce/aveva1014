/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){var n=/\+/g;function o(e){return r.raw?e:encodeURIComponent(e)}function i(o,i){var t=r.raw?o:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(n," ")),r.json?JSON.parse(e):e}catch(e){}}(o);return e.isFunction(i)?i(t):t}var r=e.cookie=function(n,t,c){if(arguments.length>1&&!e.isFunction(t)){if("number"==typeof(c=e.extend({},r.defaults,c)).expires){var u=c.expires,s=c.expires=new Date;s.setMilliseconds(s.getMilliseconds()+864e5*u)}return document.cookie=[o(n),"=",(a=t,o(r.json?JSON.stringify(a):String(a))),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var a,d,p=n?void 0:{},f=document.cookie?document.cookie.split("; "):[],l=0,m=f.length;l<m;l++){var x=f[l].split("="),g=(d=x.shift(),r.raw?d:decodeURIComponent(d)),v=x.join("=");if(n===g){p=i(v,t);break}n||void 0===(v=i(v))||(p[g]=v)}return p};r.defaults={},e.removeCookie=function(n,o){return e.cookie(n,"",e.extend({},o,{expires:-1})),!e.cookie(n)}});

$(document).ready(function($) {
  $('.splash.purple').on('click', function() {
    $(this).removeClass('purple').removeClass('ice-blue');
  });
  console.log($.cookie("last-page"));
  console.log('stuff');
if ( $.cookie("last-page") != 'nothome' ) {
  setTimeout(function() {
    $('.splash').addClass('purple');
  }, 1000);
  setTimeout(function() {
    $('.splash.purple').removeClass('purple').removeClass('start');
  }, 2700);
} else {
  $('.splash').removeClass('start');
}

  $.cookie("last-page", "home", { path: '/', expires: 2 });

  $('.splash .title-nav .nav-link').on('click', function(e) {
    e.preventDefault();

    $('.splash-inner').fadeOut('fast');
    $('.bg').animate({opacity: '0'}, 'slow');
    $('.bg').css({'opacity': '0'});

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
