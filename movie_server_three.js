var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({extended: true}));



app.get('/', function(req, res) {
  // items will be empty the first time
  // this method is called
  res.render('movie_index_three.ejs');
});


app.listen(3000);

console.log('listening on port 3000!');