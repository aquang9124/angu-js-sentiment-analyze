// Modules
var myApp = angular.module('myApp', ['ngRoute', 'ngSanitize', 'uiGmapgoogle-maps']);
	
	myApp.config(function($routeProvider, uiGmapGoogleMapApiProvider) {
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

		uiGmapGoogleMapApiProvider.configure({
			key: 'AIzaSyB99XQamcdZpKoSal7Jx5BX0zw96xVJEhM',
			v: '3.22',
			libraries: 'places,geometry,visualization'
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
});