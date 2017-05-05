angular.module('myApp').service('mainSvc', function($http){
    this.addToDb = (firstName, favColor, gender) =>{ 
    $http.post(`/addToDb/${firstName}/${favColor}/${gender}`)}

    this.getAll = () => {
        console.log('got here 2')
     return $http.get('/getAll').then((res) => {
         console.log(res)
         return res
     })
    }
})