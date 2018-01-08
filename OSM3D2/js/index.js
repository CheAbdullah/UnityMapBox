/* var map = new L.Map('map');
map.setView([52.52111, 13.40988], 16, false);

var osm=new L.TileLayer('https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png', {
  attribution: '© Map <a href="https://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  maxNativeZoom: 20
});

var satt=new L.TileLayer('bobbysud.map-l4i2m7nd', {
  attribution: '© Map <a href="https://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  maxNativeZoom: 20
});

var terr=new L.TileLayer('bobbysud.i2pfp2lb', {
  attribution: '© Map <a href="https://mapbox.com">Mapbox</a>',
  maxZoom: 18,
  maxNativeZoom: 20
});


map.addLayer(osm,satt,terr); */

var cities = L.layerGroup();

	L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
	L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
	L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
	L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);


	var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		//mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
  var mbUrl = 'https://{s}.tiles.mapbox.com/v3/osmbuildings.kbpalbpk/{z}/{x}/{y}.png';
  // var mbsat = 'https://tileserver.maptiler.com/weather/{z}/{x}/{y}.png';
  // var mbter = 'http://earthengine.google.org/static/hansen_2013/gain/{z}/{x}/{y}.png';
//http://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt
    //'% Forest Cover 2010': L.tileLayer('http://earthengine.google.org/static/hansen_2013/tree_alpha/{z}/{x}/{y}.png').addTo(map),
    //'Loss/Extent/Gain (Red/Green/Blue)': L.tileLayer('http://earthengine.google.org/static/hansen_2013/loss_forest_gain/{z}/{x}/{y}.png'),
    //'Loss': L.tileLayer('http://earthengine.google.org/static/hansen_2013/loss/{z}/{x}/{y}.png'),
    //'Gain': L.tileLayer('http://earthengine.google.org/static/hansen_2013/gain/{z}/{x}/{y}.png')
	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
  var streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
  // var satellite  = L.tileLayer(mbsat, {id: 'weather',   attribution: mbAttr});
  // var terrain  = L.tileLayer(mbter, {id: 'hansen',   attribution: mbAttr});
//16.96/53.347268/-6.259142/-143.2/53 
	var map = L.map('map', {
		center: [-6.259142, 53.347268],
    zoom: 19,
		layers: [grayscale, cities]
	});

	var baseLayers = {
		"Grayscale": grayscale,
    "Streets": streets,
    //"satellite": satellite,
    //"terrain": terrain
	};

	var overlays = {
		"Cities": cities
	};

	L.control.layers(baseLayers, overlays).addTo(map);





var osmb = new OSMBuildings(map).load();
osmb.addGeoJSONTiles('http://{s}.data.osmbuildings.org/0.2/anonymous/tile/{z}/{x}/{y}.json');
//********************************************************

var
  now,
  date, time,
  timeRange, dateRange,
  timeRangeLabel, dateRangeLabel;

function changeDate() {
  var Y = now.getFullYear(),
    M = now.getMonth(),
    D = now.getDate(),
    h = now.getHours(),
    m = 0;

  timeRangeLabel.innerText = pad(h) + ':' + pad(m);
  dateRangeLabel.innerText = Y + '-' + pad(M+1) + '-' + pad(D);

  osmb.date(new Date(Y, M, D, h, m));
}

function onTimeChange() {
  now.setHours(this.value);
  now.setMinutes(0);
  changeDate();
}

function onDateChange() {
  now.setMonth(0);
  now.setDate(this.value);
  changeDate();
}

function pad(v) {
  return (v < 10 ? '0' : '') + v;
}

timeRange = document.getElementById('time');
dateRange = document.getElementById('date');
timeRangeLabel = document.querySelector('*[for=time]');
dateRangeLabel = document.querySelector('*[for=date]');

now = new Date;
changeDate();

// init with day of year
var Jan1 = new Date(now.getFullYear(), 0, 1);
dateRange.value = Math.ceil((now-Jan1)/86400000);

timeRange.value = now.getHours();

timeRange.addEventListener('change', onTimeChange);
dateRange.addEventListener('change', onDateChange );
timeRange.addEventListener('input', onTimeChange);
dateRange.addEventListener('input', onDateChange);

//************************************************************

// load extra information
function ajax(url, callback) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState !== 4) {
      return;
    }
    if (!req.status || req.status < 200 || req.status > 299) {
      return;
    }

    callback(JSON.parse(req.responseText));
  };
  req.open('GET', url);
  req.send(null);
}

// formatted json output
function formatJSON(json) {
  var html = '';
  for (var key in json) {
    html += '<em>'+ key +'</em> '+ json[key] +'<br>';
  }
  return html;
}

osmb.click(function(e) {
  var url = 'https://data.osmbuildings.org/0.2/uejws863/feature/'+ e.feature +'.json';
  ajax(url, function(json) {
    var content = '<b>OSM ID '+ e.feature +'</b>';
    for (var i = 0; i < json.features.length; i++) {
      content += '<br><em>OSM Part ID</em> '+ json.features[i].id;
      content += '<br>'+ formatJSON(json.features[i].properties.tags);
    }

    L.popup({ maxHeight:200, autoPanPaddingTopLeft:[50,50] })
      .setLatLng(L.latLng(e.lat, e.lon))
      .setContent(content)
      .openOn(map);
  });
});