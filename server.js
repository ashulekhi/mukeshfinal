/**
 * Created by ashu_dev on 25/05/17.
 */
var express = require('express');
var mongoose = require('mongoose');
// var mongodb = require('mongodb');
var userController = require('./user/user.controller')
var app = express();

/*var mongoClient = mongodb.connect('mongodb://127.0.0.1:27017/mukeshdatabase' , function(err,res){
    if(err){

        console.log('err in  connected' ,err);
    }
    else
        console.log('connected')
});*/

// exports.mongoClient;


mongoose.connect('mongodb://127.0.0.1:27017/mukeshdatabase',function(err,res){
    console.log('mongoose connected');
})


app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

app.get('/',  function(req,res){
    console.log('reached base route');
    res.send('index.html');
});


app.get('/getData' , function(req,res){
    // console.log(">>>" ,req.query);
    res.send('Hi get data');
});

app.post('/signUp' , userController.createUser)

app.listen('3000' , function(){
    console.log('server started');
});