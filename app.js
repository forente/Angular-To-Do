var app = angular.module('to-do-list',[]);
app.controller('list',function($scope){
  $scope.list = [];
  $scope.message = "box";
  console.log($scope.message);

});


console.log('print');
