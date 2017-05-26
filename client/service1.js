/**
 * Created by ashu_dev on 26/05/17.
 */
app.service('apiService', function($http){
    return {
        getData : function(){
            return $http({
                method : 'GET',
                url:'/getData',
                params:{
                    name:'mukesh',
                    password:'pass'
                }
            });
        },
        createUser : function(user){
           return $http({
                method:'POST',
                url:'/signUp',
                params:user
            })
        }
    }
})



//http that is used to get or post from server


