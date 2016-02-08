angular.module('camelotApp', [])

angular.module('camelotApp')
	.controller('camelotController', ['$scope', '$http', function($scope, $http){





  $scope.wizardDemo = false;

  // Toggles the button
  $scope.wizardDemoToggle = function() {

    $scope.wizardDemo = !$scope.wizardDemo;

  };


	}])