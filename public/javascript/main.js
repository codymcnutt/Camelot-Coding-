angular.module('camelotApp', [])

angular.module('camelotApp')
	.controller('camelotController', ['$scope', '$http', function($scope, $http){



// THIS IS THE CODE FOR THE LIVES OF WIZARDS DEMO

  $scope.wizardDemo = false;

  // Toggles the button
  $scope.wizardDemoToggle = function() {

    $scope.wizardDemo = !$scope.wizardDemo;

  };
  // THIS IS CODE FOR THE WISH DEMO
  $scope.wishDemo = false;
  $scope.wishDemoToggle = function() {

    $scope.wishDemo = !$scope.wishDemo;

  };
 
       // $scope.wishList =[]
           $scope.quantity = 1;
          var getWishes = function(){
              $http.get('/api/getWishes')
              .then(function(returnData){
                $scope.wishList=returnData.data
                  // getWishes( 600000);
                 console.log($scope.wishList)
          
              })
          }
   
      getWishes()
      // This is to add realtime feedback from the server to the client
      // target.addEventListener(string, function()[, useCapture]);
         
        $scope.createWish = function(){
          console.log('createWish', $scope.newWish)
          $http.post('/api/savedWishes', $scope.newWish)
           .then(function(returnData){
            getWishes()
            console.log('Wish sucessfully submitted to database', returnData)
          $scope.savedWishes = returnData.data 

        })
        }

  $scope.sideBar = true;

  // Toggles the button
  $scope.sideBarToggle = function() {

    $scope.sideBar = !$scope.sideBar;

  };

    
    $scope.about = false;

  // Toggles the button
  $scope.aboutToggle = function() {

    $scope.about = !$scope.about;

  };

    $scope.makeWish = false;

  // Toggles the button
  $scope.makeWishToggle = function() {

    $scope.makeWish = !$scope.makeWish;

  };
    $scope.learnButton = true;

  // Toggles the button
  $scope.learnButtonToggle = function() {

    $scope.learnButton = !$scope.learnButton;

  };
      $scope.currentWish= false;

  // Toggles the button
  $scope.currentWishToggle = function() {

    $scope.currentWish = !$scope.currentWish;

  };
$scope.solarDemo = false;
  $scope.solarDemoToggle = function() {

    $scope.solarDemo = !$scope.solarDemo;

  };



 $scope.customerInput = false;
  $scope.customerToggle = function() {

    $scope.customerInput = !$scope.customerInpout;

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
    }])