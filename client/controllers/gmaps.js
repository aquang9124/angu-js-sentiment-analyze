myApp.controller('mapsCtrl', function($scope, $location, locationService, uiGmapGoogleMapApi) {
	locationService.currentUrl = $location.url();
	uiGmapGoogleMapApi.then(function(maps) {
		console.log(maps, "MAPS");
        var baseOptions = {
            'maxZoom': 15,
            'minZoom': 4,
            'backgroundColor': '#b0d1d4',
            'panControl': false,
            'zoomControl': true,
            'draggable': true,
            'zoomControlOptions': {
              'position': 'RIGHT_TOP',
              'style': 'SMALL'
            }
        };
        console.log("here")
        $scope.map = {center: {latitude: 51.219053, longitude: 4.404418}, options:baseOptions, zoom:8, showTraffic: true,  show: true}
	});
});