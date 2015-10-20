$(document).ready(function(){
  if ($('#map-canvas').length){
    var mapData= $.getJSON( "/instagram_feed", function(data) {
      setUpMap(data);
    });
  }

  function setUpMap(mapData) {

    var markerBounds = new google.maps.LatLngBounds();
    var mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false,
      disableDefaultUI: true,
      center: {lat: 48.7454178, lng: -122.7829945},
      zoom: 9
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // var bhamToSucia = new google.maps.KmlLayer({
    //   url: 'http://www.followrhythm.com/system/resources/W1siZiIsIjIwMTUvMTAvMjAvMTgvMjcvNTAvNTQ1L2JoYW1fdG9fc3VjaWEua21sIl1d/bham-to-sucia.kml?sha=5de28e4f9ef81724',
    //   map: map
    // });

    setTimeout(function(){
      var bhamToSucia = new google.maps.KmlLayer({
        url: 'http://www.followrhythm.com/system/resources/W1siZiIsIjIwMTUvMTAvMjAvMTgvMjcvNTAvNTQ1L2JoYW1fdG9fc3VjaWEua21sIl1d/bham-to-sucia.kml?sha=5de28e4f9ef81724',
        map: map
      });
    }, 2000);
    
    setTimeout(function(){
      var hesquiatToHsc = new google.maps.KmlLayer({
        url: 'http://www.followrhythm.com/system/resources/W1siZiIsIjIwMTUvMTAvMjAvMTgvMjcvNTAvNzU3L2hlc3F1aWF0X3RvX2hzYy5rbWwiXV0/hesquiat-to-hsc.kml?sha=92fa9d102aaddaaf',
        map: map
      });
    }, 7000);

    setTimeout(function(){
      var hscToFlores = new google.maps.KmlLayer({
        url: 'http://www.followrhythm.com/system/resources/W1siZiIsIjIwMTUvMTAvMjAvMTgvMjcvNTAvNDcvaHNjX3RvX2Zsb3Jlcy5rbWwiXV0/hsc-to-flores.kml?sha=93e4c4695f3bf996',
        map: map
      });
    }, 12000);

    function enableScrollingWithMouseWheel() {
      map.setOptions({ scrollwheel: true });
    }

    function disableScrollingWithMouseWheel() {
      map.setOptions({ scrollwheel: false });
    }

    google.maps.event.addListener(map, 'mousedown', function(){
      enableScrollingWithMouseWheel()
    });

    $('body').on('mousedown', function(event) {
      var clickedInsideMap = $(event.target).parents('#map-canvas').length > 0;

      if(!clickedInsideMap) {
        disableScrollingWithMouseWheel();
      }
    });
  }
});