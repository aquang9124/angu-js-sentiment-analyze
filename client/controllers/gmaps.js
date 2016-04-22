myApp.controller('mapsCtrl', function($scope, $location, locationService) {
	locationService.currentUrl = $location.url();
	
});