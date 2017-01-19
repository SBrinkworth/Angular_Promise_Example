angular.module("app").controller("mainCtrl", function($scope, foodService) {

  $scope.hungry = true;

  $scope.eatFood = function(newFood) {
    console.log('putting food in mouth');
    foodService.chewAndSwallow(newFood)
      .then(function(response) {
        console.log('Am I full?: ', response);
        $scope.hungry = !response;
      });
  };

});
