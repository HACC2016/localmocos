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

//////// ROUTES TO TEST PAGES ////////
app.get('/product-test/:id', function (req, res) {
  db.Product.findOne({
    where: {id: req.params.id}
  })
  .then(function (productObject) {
    var product = productObject;
    db.VendorInfo.findOne({
      where: {id: product.vendor_info_id}
    })
    .then(function (vendorObject) {
      var vendor = vendorObject;
      db.Product.findAll({
        where: {
          id: {$ne: product.id},
          vendor_info_id: vendor.id,
        }
      })
      .then(function (productArray) {
        res.render('product', {
          subtitle: product.name,
          product: product,
          vendor: vendor.dba, address: vendor.address1, phone: vendor.business_ph, email: vendor.email, website: vendor.website,
          products: productArray})
      })
    })
  })
})

app.get('/vendor/:id', function (req, res) {
  db.VendorInfo.findOne({
    where: {id: req.params.id}
  })
  .then(function (vendorObject) {
    var vendor = vendorObject;
    db.Product.findAll({
      where: {vendor_info_id: req.params.id}
    })
    .then(function(productArray){
    res.render('vendor', {subtitle: vendor.dba, image: vendor.image, vendor: vendor.dba, address: vendor.address1, phone: vendor.business_ph, email: vendor.email, website: vendor.website, description: vendor.business_description, products: productArray})
    });
  });
})

app.get('/search-results', function (req, res) {
  res.render('searchResults', {subtitle: "Search Results"})
})
app.get('/productForm', function (req, res) {
  res.render('productForm', {})
})
app.get('/editProductForm', function (req, res) {
  res.render('editProductForm', {})
})
app.get('/vendorForm', function (req, res) {
  res.render('vendorForm', {})
})
app.get('/editVendorForm', function (req, res) {
  res.render('editVendorForm', {})
})
app.get('/login-vendor', function (req, res) {
  res.render('login-vendor', {subtitle: "Vendor Login"})
})
app.get('/about', function (req, res) {
  res.render('about', {subtitle: "About Us"})
})
////////// END OF TESTING //////////

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