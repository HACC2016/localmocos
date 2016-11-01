var express = require('express');
var app = express();
var https = require('https');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
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
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

var adminRoute=require('./routes/admin')(express,app,path,bodyParser,querystring,db);
var buyeroute=require('./routes/buyer')(express,app,path,bodyParser,querystring,db);
var vendorRoute=require('./routes/vendor')(express,app,path,bodyParser,querystring,db);
var productRoute=require('./routes/product')(express,app,path,bodyParser,querystring,db);
var apiRoute = require('./routes/api')(express, app, https, path, bodyParser, querystring, db);
var guestRoute=require('./routes/guest')(express,app,path,bodyParser,querystring,db);

app.use(function(req, res) {
  res.status(404).render('404', {subtitle: "Page Not Found"});
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