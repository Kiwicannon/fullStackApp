angular.module('myApp').controller('mainCtrl', function($scope, mainSvc){
    $scope.test = 'controller is working'
    $scope.test1 = mainSvc.test1
        
    $scope.getAll = () => {
        mainSvc.getAll().then((response) => {
            console.log(response)
            $scope.all = response.data

        })
    }
    $scope.getAll();

    $scope.addToDb = () => {
        mainSvc.addToDb($scope.firstname, $scope.favcolor, $scope.gender).then(() => 
        {
console.log('then is working')
         $scope.getAll();
        })
        
    }
        

})