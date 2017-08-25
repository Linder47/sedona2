 function initMap() {
        var coordinates = {lat: 34.866910, lng: -111.792495};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: coordinates
        });
        var marker = new google.maps.Marker({
          position: coordinates,
          map: map
        });
      }

/*function initMap() {
  var coordinates = { lat: 34.858599, lng: -111.795482 },

  map = new google.maps.Map(document.getElementById("map"), {
    center: coordinates,
    zoom: 7,
    disableDefaultUI: true
  }),

  markerImage = "img/map-marker.svg",
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: markerImage
  });
}
     */