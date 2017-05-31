angular.module('myApp').service('mainSvc', function($http){
    this.addToDb = (firstName, favColor, gender) =>{ 
      return $http.post(`/addToDb/${firstName}/${favColor}/${gender}`)}



     this.getAll = () => {
      return $http.get('/getAll').then((res) => {
        return res
      })
    }

    this.delete = (userid)  => {
      return $http.delete(`/delete/${userid}`)}

    this.edit = (userid, name, color, gender) =>{
      return $http.put(`/update/${userid}/${name}/${color}/${gender}`)
    }
})