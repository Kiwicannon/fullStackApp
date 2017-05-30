angular.module('myApp').service('mainSvc', function($http){
    this.addToDb = (firstName, favColor, gender) =>{ 
      return $http.post(`/addToDb/${firstName}/${favColor}/${gender}`)}



     this.getAll = () => {
      return $http.get('/getAll').then((res) => {
        return res
      })
    }

    this.delete = (userid)  => {
      console.log('service')
      return $http.delete(`/delete/${userid}`)}
})