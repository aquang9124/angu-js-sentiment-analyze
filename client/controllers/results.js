myApp.controller('resultsController', function($scope, $location, locationService, sentiService) {
	locationService.currentUrl = $location.url();

	$scope.text = sentiService.text;

	$scope.results = sentiService.getAnalysis($scope.text);
});