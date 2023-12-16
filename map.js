mapboxgl.accessToken = 'pk.eyJ1IjoiYmFyb2xvaSIsImEiOiJjbG8ybW1ucHcwOTZjMnF0ZGFqdXpwemUwIn0._gUBQBWHcx7zDxxK6UEUbQ';

const map = new mapboxgl.Map({
	container: 'map', // container ID
	style: 'mapbox://styles/mapbox/streets-v12', // style URL
	center: [106.681622, 10.765123], // starting position [lng, lat] // -76.54, 39.18 , 106.679085, 10.762585
	zoom: 15, // starting zoom
}).addControl(
    new mapboxgl.NavigationControl({showCompass: true}),
    'bottom-right'
).addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserLocation: true
    }),
    'bottom-right'
)


// map.on('load', () => {
//     // Add a new source from our GeoJSON data and
//     // set the 'cluster' option to true. GL-JS will
//     // add the point_count property to your source data.
    

//     /* Manual add */
//     // map.addSource('test', {
//     //     type: 'geojson',
//     //     data: {
//     //         "type": "FeatureCollection",
//     //         "features": [
//     //             {
//     //                 "type": "Feature",
//     //                 "geometry": {
//     //                     "type": "Point",
//     //                     "coordinates": [-76.54, 39.18]
//     //                 }
//     //             },
//     //             {
//     //                 "type": "Feature",
//     //                 "geometry": {
//     //                     "type": "Point",
//     //                     "coordinates": [-76.52, 39.18]
//     //                 }
//     //             },
//     //             {
//     //                 "type": "Feature",
//     //                 "geometry": {
//     //                     "type": "Point",
//     //                     "coordinates": [-76.52, 39.17]
//     //                 }
//     //             },
//     //             {
//     //                 "type": "Feature",
//     //                 "geometry": {
//     //                     "type": "Point",
//     //                     "coordinates": [-76.54, 39.17]
//     //                 }
//     //             }
//     //         ]
//     //     }
//     // })


//     /* Add By Data Json */
//     map.addSource('test', {
//         type: 'geojson',
//         data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson',
//         cluster: true,
//         clusterMaxZoom: 17,
//         clusterRadius: 150
//     });

//     /* Clustering */
//     // map.addSource('test', {
//     //     type: 'geojson',
//     //     data: 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_ports.geojson',
//     //     cluster: true,
//     //     clusterMaxZoom: 17, // Max zoom to cluster points on
//     //     clusterRadius: 150 // Radius of each cluster when clustering points (defaults to 50)
//     // });

//     /* For Marker */
//     // map.addLayer({
//     //     id: 'point',
//     //     type: 'circle',
//     //     source: 'test',
//     //     paint:  {
//     //         'circle-color': '#11b4da',
//     //         'circle-radius': 10,
//     //         'circle-stroke-width': 1,
//     //         'circle-stroke-color': '#fff'
//     //     }
//     // })

//     /* For Cluster */
//     map.addLayer({
//         id: 'clusters',
//         type: 'circle',
//         source: 'test',
//         filter: ['has', 'point_count'],
//         paint: {
//             'circle-color': [
//                 'step',
//                 ['get', 'point_count'],
//                 '#11b4da',
//                 5,
//                 '#f1f075',
//                 10,
//                 '#f28cb1',
                
//             ],
//             'circle-radius': [
//                 'step',
//                 ['get', 'point_count'],
//                 20,
//                 5,
//                 30,
//                 10,
//                 40
//             ],
//             'circle-stroke-width': 1,
//             'circle-stroke-color': '#fff'
//         }
//     });
//     map.addLayer({
//         id: 'cluster-count',
//         type: 'symbol',
//         source: 'test',
//         filter: ['has', 'point_count'],
//         layout: {
//             'text-field': ['get', 'point_count_abbreviated'],
//             'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
//             'text-size': 12
//         }
//     });

// });


map.on('load', () => {

    map.addSource('test', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point", "coordinates": [106.681622, 10.765123]
                    },
                    "properties": {
                        "title": "Quảng cáo 1",
                        "description": "Xin chào"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point", "coordinates": [106.679085, 10.762585]
                    },
                    "properties": {
                        "title": "Quảng cáo 2",
                        "description": "Description của quảng cáo 2"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point", "coordinates": [106.686656, 10.762573]
                    },
                    "properties": {
                        "title": "Quảng cáo 3",
                        "description": "Hello world"
                    }
                }
            ]
        }
    });
    
    //
    map.addLayer({
		id: 'point', // id của layer
        type: 'circle',
        source: 'test',
        paint: {
            'circle-color': '#11b4da',
            'circle-radius': 10,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#fff'
        }
    })

    // Xử lý sự kiện click vào marker
    map.on('click', 'point', (e) => {
        console.log(e.features);
        let markerInfo = e.features[0];
        console.log(markerInfo.properties);
    });

    // Hover
    map.on('mouseenter', 'point', (e) => {
        let markerInfo = e.features[0];
        console.log('Hover', markerInfo.properties.title);
    })
});





