'use strict'
var express = require('express');
var mysql      = require('mysql');
var app = express();
var reload = require('reload');
var path = require('path');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var data;
var id;
var contain;




var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cs305'
});

connection.connect();
connection.query("select * from users", function(error,rows,fields){
if (!!error)
{
  console.log(error);
}
else
{
  data = rows;
  contain = rows.length;
}


});
app.get('/data',function(req,res) {

  res.send(JSON.stringify(data));
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/login', function (req, res) {
    res.render('login');
});
app.get('/', function (req, res) {
    res.render('landingpage');
});
app.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

app.get('/register', function (req, res) {
    res.render('register');
});

//
app.post('/register',function(req,res) {
  

console.log(req.body);


var username = req.body.username;
var password = req.body.password;
var reg = {
  username : username,
  password : password
}


var connection = mysql.createConnection({

  host:'localhost',
  user: 'root',
  password: '',
  database:'cs305'
});
connection.connect();

var query = connection.query('insert into users set ?', reg , function (err, result){
if(err){
  console.error(err);
  return;
}
res.send({err: 0 , redirectUrl: "/login#"});
console.error(result);
});
connection.query("select * from users", function(error,rows,fields){
if (!!error)
{
  console.log(error);
}
else
{
  data = rows;
  contain = rows.length;
}


});
   
 connection.end();
 var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cs305'
});

connection.connect();
connection.query("select * from users", function(error,rows,fields){
if (!!error)
{
  console.log(error);
}
else
{
  data = rows;
  contain = rows.length;
}


});
   

});

app.listen(6789, function(){
console.log("connected");
});

//
