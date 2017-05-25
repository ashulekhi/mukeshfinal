/**
 * Created by ashu_dev on 25/05/17.
 */
app.directive('myDir' ,function(){
    return{
        restrict:'E',
        templateUrl:'mydir.html',
        link:function(elem,scope,attrs){
            console.log(">>>> directive loaded");

        }
    }
})