var toggleClose = document.querySelector(".main-nav__toggle");
var mainNav = document.querySelector(".main-nav");
var toggleBurger = document.querySelector(".main-nav__toggle-logo");

toggleBurger.addEventListener("click", function(event) {
  event.preventDefault();
  if (mainNav.classList.contains("main-nav--closed")) {
  mainNav.classList.remove("main-nav--closed");
  } else {
    mainNav.classList.add("main-nav--closed");
  }
});

toggleClose.addEventListener("click", function(event) {
  event.preventDefault();
  mainNav.classList.add("main-nav--closed");
});


function initMap() {
  var coordinates = { lat: 34.866910, lng: -111.792495 },
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: coordinates
  }),

  markerImage = "img/map-marker.svg",
  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: markerImage
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