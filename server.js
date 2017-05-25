/**
 * Created by ashu_dev on 25/05/17.
 */
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/client'));

app.get('/',  function(req,res){
    console.log('reached base route');
    res.send('index.html');
})

app.listen('3000' , function(){
    console.log('server started');
});