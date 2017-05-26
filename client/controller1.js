/**
 * Created by ashu_dev on 25/05/17.
 */
app.controller('ctrl' , function($scope){
     var name = 'mukesh';
    console.log('>>>>>>');
})




app.controller('ctrl2' , function($scope,apiService){
     // $scope.name = "mukesh"
    console.log('this service ' , apiService.getData().then(function(res){
        console.log('this is the res',res);
        $scope.response=res.data;


        $scope.signUp = function(){

            if($scope.pass!=$scope.confirmpass){
                alert('passwords do not match');
                $scope.pass='';
                $scope.confirmpass='';

            }
            else
            {
                var userObj = {};
                userObj.name = $scope.name;
                userObj.pass = $scope.pass;
                console.log('>>>> user object ' , userObj);
                apiService.createUser(userObj)
                    .then(function(res){
                        console.log('user created' ,res);
                    },function(err){
                        console.log('error' ,err);

                    })
            }

        }

    }));





})