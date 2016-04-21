// Modules
var myApp = angular.module('myApp', ['ngRoute', 'ngMessages', 'ngSanitize', 'ngResource']);
	
	myApp.config(function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: 'partials/queries.html',
			controller: 'queriesController'
		})
		.when('/results', {
			templateUrl: 'partials/results.html',
			controller: 'resultsController'
		})
		.otherwise({
			redirectTo: '/'
		});
	});
// Services
myApp.service('locationService', function() {
	this.currentUrl = '';
});

// Index Controller
myApp.controller('routesController', function($scope, $location, locationService) {
	$scope.urlPath = locationService;
})