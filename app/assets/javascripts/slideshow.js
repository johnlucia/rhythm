$(document).ready(function(){
  
  Galleria.loadTheme('/galleria/themes/classic/galleria.classic.min.js');

  var data = $.getJSON( "/instagram_feed", function(data) {
    Galleria.run('.galleria', {
      dataSource: data,
      imageCrop: false,
      transition: 'fade'
    });
  });

});
  