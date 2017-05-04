angular.module('myApp').controller('mainCtrl', function($scope, mainSvc){
    $scope.test = 'controller is working'
    $scope.test1 = mainSvc.test1
})