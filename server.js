/**
 * Created by ashu_dev on 25/05/17.
 */
var express = require('express');
var app = express();


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

app.post('/signUp' , function(req,res){
    console.log('query ' , req.query);
    var user = req.query;
    res.send('Error');
})

app.listen('3000' , function(){
    console.log('server started');
});