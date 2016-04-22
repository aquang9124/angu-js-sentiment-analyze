// Modules
var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize']);
	
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
		.when('/gmaps', {
			templateUrl: 'partials/gmaps.html',
			controller: 'mapsCtrl'
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
	var self = this;
	this.sentence = "Have a great day!";
	this.results = [];
	this.find = function(sentence, callback) {
		$http.post('/api/sentiments', { sentence: sentence }).success(function(data) {
			self.results = data
			callback(data)
			
		});
	};
});

// Index Controller
myApp.controller('routesController', function($scope, $location, locationService) {
	$scope.urlPath = locationService;
});