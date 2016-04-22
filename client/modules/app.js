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

myApp.service('mashApi', function($http) {
	this.sentence = "Have a great day!";
	this.results = [];
	this.find = function(sentence) {
		$http.post('/api/sentiments', { sentence: sentence }).success(function(data) {
			this.results = data;
			console.log(data);
		});
	};
});

// Index Controller
myApp.controller('routesController', function($scope, $location, locationService) {
	$scope.urlPath = locationService;
})