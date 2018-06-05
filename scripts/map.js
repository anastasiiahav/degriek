// On page load toon map
document.onload = function() {
	initMap();
};

// Init Map
var myMap;

var locatieGriek = [
	 {
		name: 'De Griek',
		location: {lat: 52.203932, lng: 4.395887}
	}, {
		name: 'Soldaat van Oranje',
		location: {lat: 52.176969, lng: 4.404781}
	}
];

function initMap() {
	// Map style 
	var myStyles =[
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#76aee3"
            },
            {
                "saturation": 38
            },
            {
                "lightness": -11
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#8dc749"
            },
            {
                "saturation": -47
            },
            {
                "lightness": -17
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#c6e3a4"
            },
            {
                "saturation": 17
            },
            {
                "lightness": -2
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#cccccc"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 13
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#5f5855"
            },
            {
                "saturation": 6
            },
            {
                "lightness": -31
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": []
    }
];
	// Ddirection variables
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

	// Mapopties
	var mapOptions = {
		center: {
			lat: 52.204544, 
			lng: 4.396583
		},
		zoom: 15,
		styles: myStyles 
	};

	// Nieuwe map aanmaken en toevoegen op de pagina
	myMap = new google.maps.Map(document.getElementById('map'), mapOptions);

	// Map direction display 
	directionsDisplay.setMap(myMap);
	
	// Fuctie aanroepen
	calculateAndDisplayRoute(directionsService, directionsDisplay);

}

// Functie route tonen
function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	
	var wayp = [];

	for(var i = 1; i < locatieGriek.length; i++){
		wayp[i-1] = {location : locatieGriek[i].location};		
	}
	console.log(wayp);
	console.log(locatieGriek[0].location);

	var request = {
		origin: locatieGriek[0].location,
		waypoints: wayp,
		destination: locatieGriek[0].location,
		travelMode: 'WALKING',
		optimizeWaypoints : true
	};

	directionsService.route(request, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response); // display the route
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}