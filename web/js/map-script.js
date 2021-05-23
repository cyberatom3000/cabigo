mapboxgl.accessToken = 'pk.eyJ1IjoiZmF0aGVyLWZyYW5rIiwiYSI6ImNrcDBzNmlvcDBpZ3MycG82bGRqbmxvamoifQ.696a69rnAvSRueRqb2ZZ0A';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true
});

function successLocation(position) {
  console.log(position)
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {

}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 15
  });

  // Add zoom and rotation controls to the map.
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    // unit: 'metric',
    // profile: 'mapbox/cycling'
  });
    
  map.addControl(directions, 'top-left');
}

