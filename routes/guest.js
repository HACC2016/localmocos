module.exports = function(express,app,path,bodyParser,querystring, db) {
 var router = express.Router();

    var testJson = {
        "name": "Admin",
        "response": "Ok"
    };




  /**************** Log In ***********************/

app.get('/Logout',function(req, res, next) {
    testJson.name="Logout";
    res.json(testJson);
});





  /**************** Log Out **********************/
app.get('/Login',function(req, res, next) {
    //   testJson.name="LogIn";
    // res.json(testJson);
    res.render('login-vendor', {subtitle: "Vendor Login"})
});

    /***************** Search Products **************/
app.get('/Search', function(req, res, next) {
      res.render('index');
    });

app.post('/Search', function(req, res, next) {
    db.Type.searchResults(req.body.search)
    .then((data) => {
        var vendorAddedArray=[];
        var vendors=[];
        var products=[];

        for(var i=0;i<data.length;i++){

          /***** Vendors *********/

            if(vendorAddedArray.indexOf(data[i].bid)==-1){
              vendors.push({
                "bid":data[i].bid,
                "dba":data[i].dba,
                "address1":data[i].address1,
                "address2":data[i].address2,
                "business_ph":data[i].business_ph,
                "website":data[i].website,
                "email":data[i].email,
                "image":data[i].busimage,
                "business_description":data[i].business_description
              });

              vendorAddedArray.push(data[i].bid);
            }

            /***** Products *********/
            if(data[i].product_id != null){
              products.push({
                "pid":data[i].product_id,
                "name":data[i].name,
                "description":data[i].description,
                "product_type":data[i].product_type,
                "dba":data[i].dba,
                "address1":data[i].address1,
                "address2":data[i].address2,
                "business_ph":data[i].business_ph,
                "website":data[i].website,
                "email":data[i].email,
                "image":data[i].image,
              });
            }
        }

         res.render('searchResults', {subtitle: 'Search Results', term: req.body.search, products:products, vendors: vendors});
      // res.json(products);
        });
    }
    );

    //  res.render('searchResults',{productList:productList,sellerList:sellerList})

    /**************** Home Page ***********************/

app.get('/',function(req, res, next) {
    // testJson.name="Home Page";
    // res.json(testJson);
  db.VendorInfo.findAll({
    where: {id: {gte: 2, lte: 5}}
  })
  .then(function (vendorArray) {
    res.render('index', {subtitle: "Find Local Business & Products", vendors: vendorArray})
  });
});


////// testing ///////
app.get('/about', function (req, res) {
  res.render('about', {subtitle: "Buy Local, It Matters!"});
});

    return router;
}