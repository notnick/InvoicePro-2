var app = angular.module('myApp',[]);

app.controller('myAppController',['$http','$sce', '$scope','$log','$filter','$location',function($http, $sce, $scope, $log,$filter,$location){

$scope.message = "Hello world!";



$scope.$scope = "Hello world!";



}]);
