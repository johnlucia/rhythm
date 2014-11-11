$(document).ready(function(){
  if ($('.galleria').length){
    Galleria.loadTheme('/galleria/themes/classic/galleria.classic.min.js');

    var data = $.getJSON( "/instagram_feed", function(data) {
      Galleria.run('.galleria', {
        dataSource: data,
        imageCrop: false,
        transition: 'fade',
        height: 1,
        thumbnails: 'empty',
        autoplay: 7000,
        imageCrop: 'width',
        showCounter: false
      });
    });
  }
});
  