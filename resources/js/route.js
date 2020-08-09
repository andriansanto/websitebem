var express = require('express');
var app =express();

var mysql = require('mysql');
var bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
    
    host:'localhost',
    user:'root',
    password:'',
    database:'websitebem'
});


con.connect(function(error){
    if(error) console.log(error);
    else console.log("connected");
});

app.get('/api/slideshow', function(req,res){
    con.query('select * from slideshow', function(error, rows, fields){
        if(error) console.log(error);
        
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

app.get('/api/generasi', function(req,res){
    con.query('select * from generasi', function(error, rows, fields){
        if(error) console.log(error);
        
        else{
            console.log(rows);
            res.send(rows);
        }
    });
});

app.listen(4545,() =>{
    console.log("start");
});

// var server = app.listen(4646, function(){
//     var host = server.address().address
//     var port = server.address().port
//     console.log("start");
// });