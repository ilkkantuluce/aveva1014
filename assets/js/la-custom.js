document.addEventListener('DOMContentLoaded', () => {
  $('body').on('click', '.pop-trigger>img',function(_e){
    _e.preventDefault();
    _e.stopPropagation();
    $(this).parents('.pop-trigger').addClass('active');
    var classname = "";
    let elArray = $(this).parents('.pop-trigger').find("div[class*='wistia_async_']");
    let wistiaID = elArray[0].classList[1].replace(/wistia_async_/g,'');

    var video = Wistia.api(wistiaID);
    video.play();
  });
  $('body').on('click', '.fitb-pop',function(_e){
    console.log('.fitb-pop');
    $(this).parents('.pop-trigger').removeClass('active');
  });
  $('body').on('click', '.fitb-pop>div:not(.fitb-close)',function(_e){
    console.log('.fitb-pop>div');
    _e.stopPropagation();
  });
});