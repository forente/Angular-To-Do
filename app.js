var app = angular.module('to-do-list',[]);
app.controller('list',function($scope){
  $scope.listOfItems = ['a','b','c','d'];
  $scope.message = "box";

  $scope.addItem = function(m){
    $scope.listOfItems.push(m);
  };

});
