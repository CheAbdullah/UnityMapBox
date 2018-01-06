
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuc3dpY2siLCJhIjoiY2l1dTUzcmgxMDJ0djJ0b2VhY2sxNXBiMyJ9.25Qs4HNEkHubd4_Awbd8Og'; // [-74.0066, 40.7135],
var beforeMap = new mapboxgl.Map({
    container: 'before',
    style: 'mapbox://styles/danswick/cilnegnzr00439gkf7urxz0xk',
    center: [103.34994,3.8109],
    zoom: 14.67,
    pitch: 60,
    bearing: 0,
    hash: true,
});


var afterMap = new mapboxgl.Map({
    container: 'after',
    style: {
        "version": 8,
        "name": "Basic",
        "sources": {
            "mapbox": {
                "url": "mapbox://mapbox.mapbox-streets-v7",
                "type": "vector"
            }, 
            "simple-tiles": {
                "type": "raster",
                "tiles": [
                    "https://tileserver.maptiler.com/weather/{z}/{x}/{y}.png"
                ],
                "tileSize": 256
            }
        },
        "sprite": "mapbox://sprites/danswick/ciljv8aim00459dm3hht07ite",
        "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        "layers": [
        {
            "id": "background",
            "type": "background",
            "paint": {
                "background-color": "#dedede"
            },
            "interactive": true
        },
        {
            "id": "landuse_overlay_national_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse_overlay",
            "filter": [
                "==",
                "class",
                "national_park"
            ],
            "paint": {
                "fill-color": "#d2edae",
                "fill-opacity": 0.75
            },
            "interactive": true
        },
        {
            "id": "landuse_park",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "landuse",
            "filter": [
                "==",
                "class",
                "park"
            ],
            "paint": {
                "fill-color": "#d2edae"
            },
            "interactive": true
        },
        {
            "id": "waterway",
            "type": "line",
            "source": "mapbox",
            "source-layer": "waterway",
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "river",
                    "canal"
                ]
            ],
            "paint": {
                "line-color": "#a0cfdf",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            8,
                            0.5
                        ],
                        [
                            20,
                            15
                        ]
                    ]
                }
            },
            "interactive": true
        },
        {
            "id": "water",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "water",
            "paint": {
                "fill-color": "#a0cfdf"
            },
            "interactive": true
        },
        {
            "id": "building",
            "type": "fill",
            "source": "mapbox",
            "source-layer": "building",
            "paint": {
                "fill-color": "#d6d6d6"
            },
            "interactive": true
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "==",
                        "structure",
                        "tunnel"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "tunnel_minor",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                "line-dasharray": [
                    0.36,
                    0.18
                ]
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "==",
                        "structure",
                        "tunnel"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "tunnel_major",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                },
                "line-dasharray": [
                    0.28,
                    0.14
                ]
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "in",
                        "structure",
                        "none",
                        "ford"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road_minor",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "in",
                        "structure",
                        "none",
                        "ford"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "road_major",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_minor case",
            "paint": {
                "line-color": "#dedede",
                "line-width": {
                    "base": 1.6,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "butt",
                "line-join": "miter"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_major case",
            "paint": {
                "line-color": "#dedede",
                "line-width": {
                    "base": 1.6,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            20,
                            10
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway_link",
                        "street",
                        "street_limited",
                        "service",
                        "track",
                        "pedestrian",
                        "path",
                        "link"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_minor",
            "paint": {
                "line-color": "#efefef",
                "line-width": {
                    "base": 1.55,
                    "stops": [
                        [
                            4,
                            0.25
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "in",
                        "class",
                        "motorway",
                        "primary",
                        "secondary",
                        "tertiary",
                        "trunk"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "bridge_major",
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.4,
                    "stops": [
                        [
                            6,
                            0.5
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            },
            "source-layer": "road"
        },
        {
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "<=",
                        "admin_level",
                        2
                    ],
                    [
                        "==",
                        "maritime",
                        0
                    ]
                ]
            ],
            "type": "line",
            "source": "mapbox",
            "id": "admin_country",
            "paint": {
                "line-color": "#8b8a8a",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            22,
                            15
                        ]
                    ]
                }
            },
            "source-layer": "admin"
        },
        {
            "id": "simple-tiles",
            "type": "raster",
            "source": "simple-tiles",
            "minzoom": 0,
            "maxzoom": 22
        },
        {
            "interactive": true,
            "minzoom": 5,
            "layout": {
                "icon-image": "{maki}-11",
                "text-offset": [
                    0,
                    0.5
                ],
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Semibold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 8,
                "text-anchor": "top",
                "text-size": 11,
                "icon-size": 1
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "all",
                    [
                        "==",
                        "scalerank",
                        1
                    ],
                    [
                        "==",
                        "localrank",
                        1
                    ]
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "poi_label",
            "paint": {
                "text-color": "#666",
                "text-halo-width": 1.5,
                "text-halo-color": "rgba(255,255,255,0.95)",
                "text-halo-blur": 1
            },
            "source-layer": "poi_label"
        },
        {
            "interactive": true,
            "layout": {
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Semibold",
                    "Arial Unicode MS Bold"
                ],
                "text-transform": "uppercase",
                "text-letter-spacing": 0.1,
                "text-size": {
                    "base": 1.4,
                    "stops": [
                        [
                            10,
                            8
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                }
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "in",
                    "class",
                    "motorway",
                    "primary",
                    "secondary",
                    "tertiary",
                    "trunk"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "road_major_label",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.95)",
                "text-halo-width": 2
            },
            "source-layer": "road_label"
        },
        {
            "interactive": true,
            "minzoom": 8,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Semibold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 6,
                "text-size": {
                    "stops": [
                        [
                            6,
                            12
                        ],
                        [
                            12,
                            16
                        ]
                    ]
                }
            },
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "type",
                    "town",
                    "village",
                    "hamlet",
                    "suburb",
                    "neighbourhood",
                    "island"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "place_label_other",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.95)",
                "text-halo-width": 1.5,
                "text-halo-blur": 1
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-max-width": 10,
                "text-size": {
                    "stops": [
                        [
                            3,
                            12
                        ],
                        [
                            8,
                            16
                        ]
                    ]
                }
            },
            "maxzoom": 16,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "type",
                    "city"
                ]
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "place_label_city",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.95)",
                "text-halo-width": 1.5,
                "text-halo-blur": 1
            },
            "source-layer": "place_label"
        },
        {
            "interactive": true,
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "Open Sans Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-max-width": 10,
                "text-size": {
                    "stops": [
                        [
                            3,
                            14
                        ],
                        [
                            8,
                            22
                        ]
                    ]
                }
            },
            "maxzoom": 12,
            "filter": [
                "==",
                "$type",
                "Point"
            ],
            "type": "symbol",
            "source": "mapbox",
            "id": "country_label",
            "paint": {
                "text-color": "#666",
                "text-halo-color": "rgba(255,255,255,0.95)",
                "text-halo-width": 1.5,
                "text-halo-blur": 1
            },
            "source-layer": "country_label"
        }
    ],
        
        "created": "2016-03-08T20:24:55.187Z",
        "id": "ciljv8aim00459dm3hht07ite",
        "modified": "2016-03-08T20:24:55.187Z",
        "owner": "danswick",
        "draft": false
    },
    center: [103.34994,3.8109],
    zoom: 14.67,
    pitch: 60,
    bearing: 0,
    hash: true,
});


var map = new mapboxgl.Compare(beforeMap, afterMap, {
    // Set this to enable comparing two maps by mouse movement:
    // mousemove: true
});

var mindate = new Date("10/01/2017").getTime()
var maxdate = new Date("01/04/2018").getTime()
afterMap.on('load', function() {

    // add source to map
    //afterMap.addSource('earthengine', {
    //type: 'raster',
    //tiles: [`http://earthengine.google.org/static/hansen_2013/gain/{z}/{x}/{y}.png`],
    //});
    
    //afterMap.addLayer({
    //id: 'earthengine',
    //source: 'earthengine',
    //type: 'raster',
    //minzoom: 0,
    //maxzoom: 22,
    //});
    
    var mapillarySource = {
        type: 'vector',
        tiles: ['http://d25uarhxywzl1j.cloudfront.net/v0.1/{z}/{x}/{y}.mvt'],
        minzoom: 0,
        maxzoom: 14
    };
    
    afterMap.addSource('mapillary', mapillarySource);
    afterMap.addLayer({
        'id': 'mapillary',
        'type': 'line',
        'source': 'mapillary',
        'source-layer': 'mapillary-sequences',
        'filter': ['all',
                   ['>=', 'captured_at', mindate],
                   ['<=', 'captured_at', maxdate]],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-opacity': 0.6,
            'line-color':   'rgb(53, 175, 109)',
            'line-width':   2
        },
    });

    afterMap.addSource('dem', {
        "type": "raster-dem",
        "url": "mapbox://mapbox.terrain-rgb"
    });
    afterMap.addLayer({
        "id": "hillshading",
        "source": "dem",
        "type": "hillshade"
    // insert below waterway-river-canal-shadow;
    // where hillshading sits in the Mapbox Outdoors style
    }, 'waterway-river-canal-shadow');

    //afterMap.addSource("quakes", {
    //    "type": "geojson",
    //    "data": "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"
    //});
 
    // Once you have a datasource defined, you need to add a layer from that data source to the map.
    // We could, for example, add only earthquakes magnitude 4.0+. Here we just tell it
    // to take all of the data and style it as a circle.
    //var mags = [0,1,2,3,4,5,6,7,8,9,10];
    //for(var i=0; i < mags.length; i++) {
    //  var mag = mags[i];
    //  afterMap.addLayer({
    //    "id": "quakes-"+mag,
    //    "type": "circle",
    //    "source": "quakes",
    //    'z-index':'101',
     //   "filter": ["all", [">=", "mag", mag], ["<", "mag", mag+1]],
     //   "paint": {
     //       "circle-radius": Math.pow(mag,2)/1.5,
     //       "circle-color": "#ff0000",
     //       "circle-opacity": 0.5
     //   }
     // });
    //}
    // add source to map
    //afterMap.addSource('weatherSource', {
    //type: 'raster',
    
    //tiles: [`http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=54ec60f02ad844c6d76b8b64b62819e3`],
    //});
    
    //afterMap.addLayer({
    //id: 'weatherSource',
    //source: 'weatherSource',
    //type: 'raster',
    //minzoom: 0,
    //maxzoom: 22,
    //'z-index':'103',
    //});
    //'% Forest Cover 2010': L.tileLayer('http://earthengine.google.org/static/hansen_2013/tree_alpha/{z}/{x}/{y}.png').addTo(map),
    //'Loss/Extent/Gain (Red/Green/Blue)': L.tileLayer('http://earthengine.google.org/static/hansen_2013/loss_forest_gain/{z}/{x}/{y}.png'),
    //'Loss': L.tileLayer('http://earthengine.google.org/static/hansen_2013/loss/{z}/{x}/{y}.png'),
    //'Gain': L.tileLayer('http://earthengine.google.org/static/hansen_2013/gain/{z}/{x}/{y}.png')

    

});

beforeMap.on('load', function() {
    // Insert the layer beneath any symbol layer.
    var layers = beforeMap.getStyle().layers;

    var labelLayerId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }
    
    var switchy = document.getElementById('remover');
    switchy.addEventListener("click", function(){
        switchy = document.getElementById('remover');
        if (switchy.className === 'on') {
            switchy.setAttribute('class', 'off');
            beforeMap.setLayoutProperty('mapbox-mapbox-satellite', 'visibility', 'none');
            switchy.innerHTML = 'Add satellite';
        } else {
            switchy.setAttribute('class', 'on');
            beforeMap.setLayoutProperty('mapbox-mapbox-satellite', 'visibility', 'visible');
            switchy.innerHTML = 'Remove satellite';
        }
    });

    beforeMap.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
            'fill-extrusion-color': '#aaa',

            // use an 'interpolate' expression to add a smooth transition effect to the
            // buildings as the user zooms in
            'fill-extrusion-height': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "height"]
            ],
            'fill-extrusion-base': [
                "interpolate", ["linear"], ["zoom"],
                15, 0,
                15.05, ["get", "min_height"]
            ],
            'fill-extrusion-opacity': .6
        }
    }, labelLayerId);
    

    beforeMap.addSource('contours', {
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
    });
    beforeMap.addLayer({
        'id': 'contours',
        'type': 'line',
        'source': 'contours',
        'source-layer': 'contour',
        'layout': {
            'visibility': 'visible',
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#877b59',
            'line-width': 1
        }
    }); 

    beforeMap.addSource('dem', {
        "type": "raster-dem",
        "url": "mapbox://mapbox.terrain-rgb"
    });
    beforeMap.addLayer({
        "id": "hillshading",
        "source": "dem",
        "type": "hillshade"
    // insert below waterway-river-canal-shadow;
    // where hillshading sits in the Mapbox Outdoors style
    }, 'waterway-river-canal-shadow');


    beforeMap.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Test Data 1</strong><p>No Data Available 1</p>",
                        "number":"00000000000001",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-6.259142,53.347268]
                    }
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Test Data 2</strong><p>No Data Available 2</p>",
                        "number":"00000000000002",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-6.2591,53.3472]
                    }}
                    , {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Test Data 3</strong><p>No Data Available 3</p>",
                        "number":"00000000000003",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-6.258,53.3471]
                    }}
                    , {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Test Data 4</strong><p>No Data Available 4</p>",
                        "number":"00000000000004",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-6.257,53.3470]
                    }}
                    , {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Test Data 5</strong><p>No Data Available 5</p>",
                        "number":"00000000000005",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-6.256,53.3469]
                    }}
                    , {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Test Data 6</strong><p>No Data Available 6</p>",
                        "number":"00000000000006",
                        "icon": "star"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-6.255,53.3468]
                    }
                }
                ]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true
        }
    });

    

    
});



beforeMap.on('mousemove', function (e) {
    document.getElementById('info').innerHTML =
        // e.point is the x, y coordinates of the mousemove event relative
        // to the top-left corner of the map
        JSON.stringify(e.point) + '<br />' +
        // e.lngLat is the longitude, latitude geographical position of the event
        JSON.stringify(e.lngLat);
});

beforeMap.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');
beforeMap.addControl(new MapboxGeocoder({
            accessToken: mapboxgl.accessToken
}), 'top-right');
// Add zoom and rotation controls to the map.
beforeMap.addControl(new mapboxgl.NavigationControl());

// When a click event occurs on a feature in the places layer, open a popup at the
    // location of the feature, with description HTML from its properties.
    beforeMap.on('click', 'places', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(beforeMap);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    beforeMap.on('mouseenter', 'places', function () {
        beforeMap.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    beforeMap.on('mouseleave', 'places', function () {
        beforeMap.getCanvas().style.cursor = '';
    });

    
      
    

// Create a popup, but don't add it to the map yet.
var popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false
});

beforeMap.on('mouseenter', 'places', function(e) {
    // Change the cursor style as a UI indicator.
    beforeMap.getCanvas().style.cursor = 'pointer';

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(e.features[0].geometry.coordinates)
        .setHTML(e.features[0].properties.description)
        .addTo(beforeMap);
});

beforeMap.on('mouseleave', 'places', function() {
    beforeMap.getCanvas().style.cursor = '';
    popup.remove();
});

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    beforeMap.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}

var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true
    }
});
beforeMap.addControl(draw);

beforeMap.on('draw.create', updateArea);
beforeMap.on('draw_line_string.create', updateArea);
beforeMap.on('draw_polygon.create', updateArea);
beforeMap.on('draw_point.create', updateArea);
beforeMap.on('draw.delete', updateArea);
beforeMap.on('draw.update', updateArea);

var Draw = mapboxgl.Draw();
beforeMap.addControl(Draw);

function updateArea(e) {
    var data = draw.getAll();
    var answer = document.getElementById('calculated-area');
    if (data.features.length > 0) {
        var area = turf.area(data);
        // restrict to area to 2 decimal points
        var rounded_area = Math.round(area*100)/100;
        answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>square meters</p>';
    } else {
        answer.innerHTML = '';
        if (e.type !== 'draw.delete') alert("Use the draw tools to draw a polygon!");
    }
}

var LotsOfPointsMode = {};

// When the mode starts this function will be called.
// The `opts` argument comes from `draw.changeMode('lotsofpoints', {count:7})`.
// The value returned should be an object and will be passed to all other lifecycle functions
LotsOfPointsMode.onSetup = function(opts) {
  var state = {};
  state.count = opts.count || 0;
  return state;
};

// Whenever a user clicks on the map, Draw will call `onClick`
LotsOfPointsMode.onClick = function(state, e) {
  // `this.newFeature` takes geojson and makes a DrawFeature
  var point = this.newFeature({
    type: 'Feature',
    properties: {
      count: state.count
    },
    geometry: {
      type: 'Point',
      coordinates: [e.lngLat.lng, e.lngLat.lat]
    }
  });
  this.addFeature(point); // puts the point on the map
};

// Whenever a user clicks on a key while focused on the map, it will be sent here
LotsOfPointsMode.onKeyUp = function(state, e) {
  if (e.keyCode === 27) return this.changeMode('simple_select');
};

// This is the only required function for a mode.
// It decides which features currently in Draw's data store will be rendered on the map.
// All features passed to `display` will be rendered, so you can pass multiple display features per internal feature.
// See `styling-draw` in `API.md` for advice on making display features
LotsOfPointsMode.toDisplayFeatures = function(state, geojson, display) {
  display(geojson);
};



var markerEl = document.getElementById('markerEl');

function addRandomMarker() {
    var bounds = afterMap.getBounds();
    var s = bounds.getSouth();
    var n = bounds.getNorth();
    var w = bounds.getWest();
    var e = bounds.getEast();
    var lng = w + (e - w) * Math.random();
    var lat = s + (n - s) * Math.random();
    var marker = new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(afterMap);

    var markers = document.getElementsByClassName('mapboxgl-marker');

    markers[i].addEventListener("click", function(e) {
        var popup = new mapboxgl.Popup({
            closeButton: false
        });
        var coordinates = map.unproject([e.x, e.y]);
        popup.setLngLat(coordinates)
          .setText('Meow')
          .addTo(afterMap);

        e.stopPropagation();
    });

}
for (var i = 0; i < 100; i++) addRandomMarker();
