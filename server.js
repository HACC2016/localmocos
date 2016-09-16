var express = require('express');
var app = express();
//var pug = require('pug');
var https = require('https');
var path = require('path');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var db = require('./models');


const public = path.join(__dirname, 'public');


const useDB = true;
/**** Setting to false until I set up postgres.  
Should be set true if your database is setup.

*********/


app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'pug');

app.set('port', (process.env.PORT || 3000));
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', express.static(public));
app.use(express.static(path.resolve(__dirname, 'public')));

var adminRoute=require('./routes/admin')(express,app,path,bodyParser,querystring,db);
var buyeroute=require('./routes/buyer')(express,app,path,bodyParser,querystring,db);
var sellerRoute=require('./routes/seller')(express,app,path,bodyParser,querystring,db);
//var heyJaxRoute=require('./routes/heyjax')(express,app,path,bodyParser,querystring);
var productRoute=require('./routes/product')(express,app,path,bodyParser,querystring,db);
var apiRoute = require('./routes/api')(express, app, https, path, bodyParser, querystring, db);
var guestRoute=require('./routes/guest')(express,app,path,bodyParser,querystring,db);


app.use(function(req, res) {
  res.status(404).render('404');
})



if(useDB)
{
db.sequelize.sync()
  .then(function(){
    app.listen(3000,function(){
      console.log('Listening on port 3000')
    })
  })
  .catch(function(err){
    console.log(err.toString())
  })
}
else
{
  app.listen(3000,function(){
      console.log('Listening on port 3000')
    })
}