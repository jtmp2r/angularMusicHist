console.log("Hello")

var app = angular.module("MyApp", [])

app.controller("MainCtrl", function($scope) {
  $scope.hello = "hi";
  $scope.wordArr = ['fun', 'awesome', 'hard', 'easy', 'mad', 'crazy', 'sane'];
})


app.directive('simpleDirective', function() {
	return {
		restrict: "A",
		templateUrl: "title.html",
		
	}
})

app.directive("rotateText", ['$interval', function($interval) {
	return {
		restirct: "E",
		link : function(scope, element, attrs) {
      function updateWord(i){
      	var i = (i+1)%5;
      	element.text(scope.wordArr[i]);
      }

      element.text(scope.wordArr[0])
      stopWord = $interval(updateWord, 1000);
      element.on('$destroy', function() {
      	$interval.cancel(stopWord);
      })
		}
  }
}])

