myApp.controller('queriesController', function($scope, $location, $document, $interval, locationService, mashApi) {
	locationService.currentUrl = $location.url();

	$scope.heading = { message: "Check Crime", num: 1 };
	$scope.sentence = mashApi.sentence;

	$scope.$watch('sentence', function() {
		mashApi.sentence = $scope.sentence;
	});

	// Code for the instructions to show
	$scope.directions = ["Please type in a location.", "After analysis, you will be shown that location.", "Give it a try. :)"];
	$scope.wordCount = 0;
	$scope.characterCount = 0;
	$scope.instructions = '';

	// updateText function
	$scope.updateText = function() {
		$scope.instructions = $scope.instructions + $scope.directions[$scope.wordCount][$scope.characterCount++];
		
		if ($scope.characterCount > $scope.directions[$scope.wordCount].length) 
		{
			$scope.wordCount++;
			$scope.characterCount = 0;
			$scope.instructions = '';

			if ($scope.wordCount == $scope.directions.length)
			{
				$scope.wordCount = 0;
			}
		}
	};

	$scope.swapHeading = function() {
		if ($scope.heading.num == 1)
		{
			$scope.heading.num = 2;
			$scope.heading.message = "For Personal Safety";
		}
		else
		{
			$scope.heading.num = 1;
			$scope.heading.message = "Check Crime";
		}
	};

	$scope.submit = function() {
		$location.path('/results');
	};

	// Interval for updateText
	$interval($scope.updateText, 150);

});