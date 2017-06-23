angular.module('myApp').service('mainSvc', function($http){



    this.addToDb = (firstName, favColor, gender) =>{ 
      return $http.post(`/api/person`, {firstName: firstName,favColor: favColor, gender: gender})}

     this.getAll = () => {
      return $http.get('/api/persons').then((res) => {
        return res
      })
    }

    this.delete = (userid)  => {
      return $http.delete(`/api/person/${userid}`)}

    this.edit = (userid, name, color, gender) =>{
      console.log(userid, name, color, gender)
      return $http.put(`/api/person/${userid}`,{name: name, color: color, gender:gender})
    }


    //  this.addMessage = function ( message ) {
    //     return $http.post('/messages', { message: message });
    //   }

})