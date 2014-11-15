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
      disableDefaultUI: true
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var markers = [];
    var infowindows = []
    var currentInfowindow = 0

    for(var i = 0; i < mapData.length; i++) {
      var post = mapData[i];
      // console.log(post.latitude);
      // console.log(post.longitude);
      // console.log(post.thumb);

      var coordinates = new google.maps.LatLng(post.latitude, post.longitude)

      var markerImage = new google.maps.MarkerImage(
        post.thumb,
        null, 
        null,  
        null, 
        new google.maps.Size(60, 60)
      );

      markers[i] = new google.maps.Marker({
        position: coordinates,
        icon: markerImage,
        url: post.big,
        map: map,
        index: i
      });

      var lat = Math.round(post.latitude * 100) / 100;
      var lon = Math.round(post.longitude * 100) / 100;
      var caption = post.layer
      if(typeof post.layer === 'undefined'){
        caption = ""  
      };
      var infowindowContent = "<div class='map-info-window'><img src='"+ post.small_image +"' />"+ caption +"<p>Lat:"+ lat +" Long:"+ lon +"</p></div>";
      infowindows[i] = new google.maps.InfoWindow({
        content: infowindowContent
      });
      
      google.maps.event.addListener(markers[i], 'click', function() {
        infowindows[currentInfowindow].close()
        currentInfowindow = this.index
        infowindows[this.index].open(map,markers[this.index]);
      });

      if (i <= 5 || !$('#home-page').length) {
        markerBounds.extend(coordinates);
      }
    }

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

    map.fitBounds(markerBounds);
    var markerCluster = new MarkerClusterer(map, markers);
  }
});