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

myApp.service('sentiService', function($resource) {
	this.text = "Have a great day!";

	this.getAnalysis = function(text) {
		var sentimentAPI = $resource('https://twinword-sentiment-analysis.p.mashape.com/analyze/', {}, { 
			'get': { 
				method: 'GET', 
				headers: { 
					'X-Mashape-Key': 'bDPDcJeR9BmshPk8xl2oUBZ4mM14p1xzufRjsnWu3DBQ4E9fq0', 
					'Content-Type': "application/x-www-form-urlencoded", 
					'Accept': "application/json" 
				}
			}
		});
		return analysisResult = sentimentAPI.get({ text: text });
	}
});

// Index Controller
myApp.controller('routesController', function($scope, $location, locationService) {
	$scope.urlPath = locationService;
})