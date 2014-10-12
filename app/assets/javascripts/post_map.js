$(document).ready(function(){

  var mapData= $.getJSON( "/instagram_feed", function(data) {
    setUpMap(data);
  });


  function setUpMap(mapData) {

    var markerBounds = new google.maps.LatLngBounds();
    var mapOptions = {
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      scrollwheel: false
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    
    var markers = [];

    for(var i = 0; i < mapData.length; i++) {
      var post = mapData[i];
      console.log(post.latitude);
      console.log(post.longitude);
      console.log(post.thumb);

      var coordinates = new google.maps.LatLng(post.latitude, post.longitude)

      var markerImage = new google.maps.MarkerImage(
        post.thumb,
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(60, 60)
      );  

      var marker = new google.maps.Marker({
        position: coordinates,
        icon: markerImage,
        url: post.big
      });

      google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
      });

      markers.push(marker);

      markerBounds.extend(coordinates);
    }

    map.fitBounds(markerBounds);
    var markerCluster = new MarkerClusterer(map, markers);

  }
});