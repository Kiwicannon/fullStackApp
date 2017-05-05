angular.module('myApp').controller('mainCtrl', function($scope, mainSvc){
    $scope.test = 'controller is working'
    $scope.test1 = mainSvc.test1
    $scope.addToDb = () => {
        
        mainSvc.addToDb($scope.firstname, $scope.favcolor, $scope.gender)}

    $scope.getAll = () => {
        console.log('got here 1')
        mainSvc.getAll().then((response) => {
            console.log(response)
            return response
        })
    }    
    $scope.getAll()
})