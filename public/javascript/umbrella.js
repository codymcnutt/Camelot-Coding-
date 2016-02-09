angular.module('umbrellaApp', [])

angular.module('umbrellaApp')
	.controller('umbrellaController', ['$scope', '$http', function($scope, $http){

$scope.splash = true;

  // Toggles the button
  $scope.splashToggle = function() {

    $scope.splash = !$scope.splash;

  };

  	}])