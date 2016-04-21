myApp.controller('resultsController', function($scope, $location, locationService) {
	locationService.currentUrl = $location.url();
});