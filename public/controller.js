angular.module('myApp').controller('mainCtrl', function ($scope, mainSvc) {
    $scope.test = 'controller is working'
    $scope.test1 = mainSvc.test1

   
    $scope.display = () => {
        console.log('display')
       
        document.getElementById("edit").style.display = "block"
        
    }
    $scope.removedisplay = () => {
        document.getElementById("edit").style.display = "none"
    }
    $scope.getAll = () => {
        mainSvc.getAll().then((response) => {
            $scope.all = response.data
        })
    }
    $scope.getAll();

    $scope.addToDb = () => {
        mainSvc.addToDb($scope.firstname, $scope.favcolor, $scope.gender).then((res) => {
            setTimeout( () => {
                $scope.getAll();
            }, 100);

        })

    }

    $scope.reset = () => {
        document.getElementById("myForm").reset();
        document.myForm.gender[0].checked = false;
        document.myForm.gender[1].checked = false;

    }
    $scope.resetEdit = () => {
        document.getElementById("editForm").reset();
        document.editForm.gender[0].checked = false;
        document.editForm.gender[1].checked = false;

    }

     $scope.editUser = (userid, name, color, gender) => {
        var userId = userid
        
        $scope.userData = (userid, name, color, gender)
        console.log($scope.userData)
        console.log(userid, name, color, gender)
    $scope.edit = (userid) =>{
        mainSvc.edit(userId, $scope.editfirstname, $scope.editfavcolor, $scope.editgender).then((res) => {
            setTimeout( () => {
                $scope.getAll();
            }, 100);
        })
    }

    }


    $scope.delete = (userid) => {
       mainSvc.delete(userid).then((res) => {
            setTimeout( () => {
                $scope.getAll();
            }, 100);

        }) 
    }
})