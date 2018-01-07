mapboxgl.accessToken = 'pk.eyJ1IjoiZXBpZGVtaWtzIiwiYSI6IjczZDdjYTc2MGFlMjc0ZDMyZGFjN2QzYzkyMzk0NWFiIn0.LOJX9JHM9Nox2_vHPx-OQg';
var map = new mapboxgl.Map({
   style: 'mapbox://styles/epidemiks/cil64yals004g9jm18lq6n18q',
   container: 'map',
   pitch: 45,
   bearing: -20,
   
   center: [104.928132, 11.556400],
   zoom: 12

});

map.addControl(new mapboxgl.Navigation());
map.addControl(new mapboxgl.Geocoder());
map.addControl(new mapboxgl.Geolocate({position: 'bottom-left'}));

function switchWaterColor(myColor, layer) {
   map.setPaintProperty(layer, 'fill-color', myColor);
}

function switchLineColor(myColor, layer) {
   map.setPaintProperty(layer, 'line-color', myColor);
}
/*
function switchLandColor(myColor, layer) {
    map.setPaintProperty(layer, 'fill-color', myColor);
}
*/

function switchLandColor(myColor) {

   document.getElementById("map").style.background = myColor;
}

function switchRoads(colour) {
   map.setPaintProperty('major_roads', 'line-color', colour);
   map.setPaintProperty('minor_roads', 'line-color', colour);
   map.setPaintProperty('bridge', 'line-color', colour);
}

// Switch things on and off

function statecheck(layer) {
   var myLayer = document.getElementById(layer);
   var input = myLayer.childNodes[0];
   if (input.checked == true) {
      myLayer.style.backgroundColor = "#bff0a1";
      
             map.setPaintProperty('major_roads', 'line-color', '#fff');
   map.setPaintProperty('minor_roads', 'line-color', '#fff');
   map.setPaintProperty('bridge', 'line-color', '#fff');
      
   } else {
      myLayer.style.backgroundColor = "#eee";
     map.setPaintProperty('major_roads', 'line-color', colour);
   map.setPaintProperty('minor_roads', 'line-color', colour);
   map.setPaintProperty('bridge', 'line-color', colour);
   };

}

bearingSlider.MaterialSlider.change(newvalue)