myApp.controller('resultsController', function($scope, $location, locationService, mashApi) {
	locationService.currentUrl = $location.url();

	$scope.sentence = mashApi.sentence;

	$scope.results = mashApi.find($scope.sentence);
	

});