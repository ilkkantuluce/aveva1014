$(window).on('load resize orientationchange', function() {
  var column;

  if($('.level-enterprise').length) {
    column = '.col-enterprise';
  } else if($('.level-plant').length) {
    column = '.col-plant';
  }

  if(column) {
    setTimeout(function() {
      var video = $(column).find('.video');
      var videoHeight = video.height();

      var videoScale = video.css('transform');

      if(videoScale.length && videoScale != 'none') {
        var values = videoScale.split('(')[1];
        values = values.split(')')[0];
        values = values.split(',');

        var a = values[0];
        var b = values[1];

        videoScale = Math.sqrt(a*a + b*b);

        videoHeight = videoHeight * videoScale;
      }

      video.siblings('.video-overlay').height(videoHeight);
    }, 1000);
  }
});
