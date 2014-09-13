$(document).ready(function(){
  
  Galleria.loadTheme('/galleria/themes/classic/galleria.classic.min.js');

  // var data = [
  //   {
  //       image: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10665456_1486619954921316_1267573708_a.jpg',
  //       thumb: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10623714_937317229615152_903088867_s.jpg',
  //       big: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10623714_937317229615152_903088867_n.jpg',
  //       title: 'my first image',
  //       description: 'first Lorem ipsum caption'
  //   },
  //   {
  //       image: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598389_1479506448965749_2087526860_a.jpg',
  //       thumb: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598389_1479506448965749_2087526860_s.jpg',
  //       big: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10598389_1479506448965749_2087526860_n.jpg',
  //       title: 'my second image',
  //       description: 'second Lorem ipsum caption'
  //   },
  //   {
  //       image: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10665456_1486619954921316_1267573708_a.jpg',
  //       thumb: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10665456_1486619954921316_1267573708_s.jpg',
  //       big: 'http://scontent-b.cdninstagram.com/hphotos-xaf1/t51.2885-15/10665456_1486619954921316_1267573708_n.jpg',
  //       title: 'my third image',
  //       description: 'third Lorem ipsum caption'
  //   },
  // ];


  var data = $.getJSON( "/instagram_feed", function(data) {
    Galleria.run('.galleria', {
      dataSource: data,
      imageCrop: false,
      transition: 'fade'
    });
  });


  // debugger;
  Galleria.run('.galleria', {
    dataSource: data,
    imageCrop: false,
    transition: 'fade'
  });

});
  