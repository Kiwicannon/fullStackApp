angular.module('myApp').service('mainSvc', function($http){
<<<<<<< HEAD

=======
>>>>>>> c8e9496f2b3cd21911fa1375ab2e80a53a557bd1
    this.addToDb = (firstName, favColor, gender) =>{ 
      return $http.post(`/addToDb/${firstName}/${favColor}/${gender}`)}


<<<<<<< HEAD
     this.getAll = () => {
=======
     this.getAll = function() {
>>>>>>> c8e9496f2b3cd21911fa1375ab2e80a53a557bd1
      return $http.get('/getAll').then((res) => {
        return res
      })
    }
<<<<<<< HEAD

    this.delete = (userid)  => {
      console.log('service')
      return $http.delete(`/delete/${userid}`)}
=======
    
>>>>>>> c8e9496f2b3cd21911fa1375ab2e80a53a557bd1
})