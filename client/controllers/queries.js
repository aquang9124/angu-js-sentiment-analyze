myApp.controller('queriesController', function($scope, $location, $document, $interval, locationService, mashApi) {
	locationService.currentUrl = $location.url();

	$scope.heading = { message: "Sentiment Analysis", num: 1 };
	$scope.sentence = mashApi.sentence;

	$scope.$watch('sentence', function() {
		mashApi.sentence = $scope.sentence;
	});

	// Code for the instructions to show
	$scope.directions = ["Please type in a sentence.", "After analysis, you will receive your sentiment results.", "You will be able to see how negative/positive your statement is.", "Give it a try. :)"];
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
			$scope.heading.message = "So people don't think you're a dick";
		}
		else
		{
			$scope.heading.num = 1;
			$scope.heading.message = "Sentiment Analysis";
		}
	};

	$scope.submit = function() {
		$location.path('/results');
	};

	// Interval for updateText
	$interval($scope.updateText, 150);

});