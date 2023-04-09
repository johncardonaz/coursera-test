(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.contador = 0;

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedNext = function () {
    if ($scope.contador==0){
    $scope.contador=1;
    $scope.stateOfBeing = "yaakov_fed";
  }else{
    $scope.stateOfBeing = "yaakov_hungry";
    $scope.contador=0;}
  };
}


})();
