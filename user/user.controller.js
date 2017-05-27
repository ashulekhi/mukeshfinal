/**
 * Created by ashu_dev on 27/05/17.
 */



var userService = require('./user.service');


exports.createUser = function(req,res){
 console.log('reached to user controller' , req.query)
 var data = req.query;
 userService.createUser(data,function(res){
     console.log('dta received' , res);
 });



}