module.exports = function(express, app, path, bodyParser, querystring) {
    var router = express.Router();
    var testJson = {
        "name": "Buyer",
        "response": "Ok"
    };
    /*************
  1. Search Products
  2. View Product



  **************/
    app.get('/buyer/search', function(req, res, next) {
        testJson.name = "Buyer Search";
        res.json(testJson);
    });

    app.get('/buyer/product', function(req, res, next) {
        testJson.name = "Product View";
        res.json(testJson);
    });



    return router;
}