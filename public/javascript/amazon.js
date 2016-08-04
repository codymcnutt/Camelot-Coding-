angular.module('camelotApp', [])

angular.module('camelotApp', [])
	.controller('camelotController', ['$scope', '$http', function($scope, $http){


  // THIS IS CODE FOR THE WISH DEMO
  $scope.customerInput= true;

    $scope.customerToggle = function() {
        $scope.customerInput = !$scope.customerInput;
    };
       // $scope.wishList =[]
           $scope.quantity = 1;
          var getInput = function(){
              $http.get('/api/getInput')
              .then(function(returnData){
                $scope.customerList=returnData.data
                  // getWishes( 600000);
                 console.log($scope.customerList)
          
              })
          }
   getInput()
      // This is to add realtime feedback from the server to the client
      // target.addEventListener(string, function()[, useCapture]);
         
        $scope.createCustomer = function(){
          console.log('createCustomer', $scope.newCustomer)
          $http.post('/api/createCustomer', $scope.newCustomer)
           .then(function(returnData){
            getInput()
            console.log('Customer input sucessfully submitted to database', returnData)
          $scope.savedCustomers = returnData.data 
        })
        };


