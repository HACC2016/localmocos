module.exports = function(express,app,path,bodyParser,querystring, db) {
 var router = express.Router();

    /*************
  1. Create new Seller ???
  2. Edit Seller info
  3. Delete Seller(Inactive)

  4. Add Product ???
  5. Delete Product(Inactive)
  6. Edit Product ???
  7. View Products



  **************/
  ///// testing admin view /////
  app.get('/admin', function (req, res) {
    res.render('admin');
  });
  
    return router;
}