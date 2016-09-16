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
      testJson.name="LogIn";
    res.json(testJson);
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
              });
            }

            /***** Products *********/

              products.push({
                "name":data[i].name,
                "description":data[i].description,
                "product_type":data[i].product_type
            })
        }

      res.render('searchResults',[products,vendors]);
      //res.json(data);
        });
    }
    );

    //  res.render('searchResults',{productList:productList,sellerList:sellerList})

    /**************** Home Page ***********************/

app.get('/',function(req, res, next) {
    // testJson.name="Home Page";
    // res.json(testJson);
    res.render('index', {subtitle: "Find Local Business & Products"})
});





    return router;
}