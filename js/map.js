"use strict";

function initMap() {
  const myLatLng = {
    lat: 40.048118591308594,
    lng: -82.95551300048828
  };
  const map = new google.maps.Map(document.getElementById("gmp-map"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}

function initMap2() {
  const myLatLng = {
    lat: 39.77937698364258,
    lng: -84.17388153076172
  };
  const map = new google.maps.Map(document.getElementById("gmp-map2"), {
    zoom: 14,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: false
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "My location"
  });
}