angular.module('myApp').controller('mainCtrl', function ($scope, mainSvc) {
    $scope.test = 'controller is working'
    $scope.test1 = mainSvc.test1

    $scope.getAll = () => {
        console.log('ran')
        mainSvc.getAll().then((response) => {
            $scope.all = response.data
        })
    }
    $scope.getAll();

    $scope.addToDb = () => {
        mainSvc.addToDb($scope.firstname, $scope.favcolor, $scope.gender).then((res) => {
            console.log('then is working')
            setTimeout(function () {
                $scope.getAll();
            }, 100);

        })

    }

    $scope.reset = () => {
        document.getElementById("myForm").reset();
        document.myForm.gender[0].checked = false;
        document.myForm.gender[1].checked = false;

    }



    $scope.delete = (userid) => {
       mainSvc.delete(userid).then((res) => {
            console.log('deleted')
            setTimeout(function () {
                $scope.getAll();
            }, 100);

        }) 
    }
})