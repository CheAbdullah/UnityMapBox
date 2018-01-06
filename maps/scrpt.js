mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoiY2l1dTUzcmgxMDJ0djJ0b2VhY2sxNXBiMyJ9.25Qs4HNEkHubd4_Awbd8Og';
var afterMap = new mapboxgl.Map({
    container: 'after', // container id
    style: 'mapbox://styles/mapbox/light-v9', //stylesheet location
    center: [-122.3096,37.7894], // starting position
    zoom: 11 // starting zoom
});



afterMap.on('load', function(){

    afterMap.addSource('trafficSource', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-traffic-v1'
    });

    
    var buttonEl = document.getElementById('trafficButton');
    buttonEl.addEventListener('click', function(e){
        addTraffic();
    });

});

function addTraffic(){
    var firstPOILabel = map.getStyle().layers.filter(function(obj){ 
        return obj["source-layer"] == "poi_label";
    });

    for(var i = 0; i < trafficLayers.length; i++) {
        afterMap.addLayer(trafficLayers[i], firstPOILabel[0].id);
    }
}