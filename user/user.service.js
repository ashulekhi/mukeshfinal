/**
 * Created by ashu_dev on 27/05/17.
 */
var User  = require('./user.model');

var mongoClient = require('mongodb');





exports.createUser = function(data,cb) {

   var user = new User(data);

   User.find({name:data.name} ,function(err,res){
       if(err){
           console.log('err',err);

       }
       else
       {
           if(res.length>0)
           {
               console.log('user exists')
           }
           else{
               user.save(function(err,data){
                   if(err){
                       cb(err);
                   }
                   else{
                       console.log('user created' , data);
                       cb(data)
                   }
               })
           }
       }
   })

  /*
*/



}