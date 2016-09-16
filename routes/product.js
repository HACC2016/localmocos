module.exports = function(express, app, path, bodyParser, querystring, db) {
    var router = express.Router();
    var testJson = {
        "name": "Product",
        "response": "Ok"
    };


    productList = [{
        "name": "Whatever",
        "description": "I don't know",
        "price": "2.81",
        "image": "./Images/Okuhara/6688909_orig.jpg"
    }, {
        "name": "Yadiyadi",
        "description": "Hidiho",
        "price": "12.81",
        "image": "./Images/Okuhara/5595049_orig.jpg"
    }]

    // Pass to Pug

    sellerList = [{
        "phone": "(808)848-0581",
        "email": "info@okuharafoods.com",
        "website": "www.okuharafoods.com",
        "address": "881 North King Street. Honolulu, HI, 96817",
        "image": "./Images/1442369634.png"
    }]

    /*************
  1. Search Products
  2. View Product
  **************/
    app.get(/products\/\d+$/, function(req, res, next) {
        testJson.name = "Products from Buyer id =" + cleanParam(req.url);
        res.json([testJson, productList]); //  <--- Pug should render here
    });

    app.get(/product\/\d+$/, function(req, res, next) {
        testJson.name = "Product View with id=" + cleanParam(req.url);
        res.json([testJson, productList, sellerList]);
    });

    app.get('/product/new', function(req, res, next) {
        /* testJson.name = "New Product Form" + cleanParam(req.url);
        res.json([testJson]); */
        res.render('productForm', {
            methodType: 'POST',
            actionType: '/product/new',
            formTitle: 'Create New Product'
        });
    });

    app.post('/product/new', function(req, res, next) {
        testJson.name = "Product New " + cleanParam(req.url);
        res.json([testJson]);
    });

    app.get(/product\/\d+\/edit$/, function(req, res, next) {
       /* testJson.name = "Product Form for id=" + cleanParam(req.url);
        res.json([testJson]); */
        // const product = {
        //     name: "BLAH",
        //     description: "blahksjhefasm",
        //     price: "$0.24",
        //     quantity: 3
        // }
        res.render('editProductForm', {
            methodType: 'POST',
            actionType: '/product/new',
            formTitle: 'Edit New Product',
            product: {
                name: req.product.name
            }
        });
    });

    app.put(/product\/\d+\/edit$/, function(req, res, next) {
        // testJson.name = "Product Edit with id=" + cleanParam(req.url);
        // res.json([testJson]);
        db.product.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function (edit) {
           return edit.update({
            product_info_id: req.body
           });
        });
    });

    app.put(/product\/\d+\/delete$/, function(req, res, next) {
        testJson.name = "Product pseudo Delete with id=" + cleanParam(req.url);
        res.json([testJson]);
    });


    return router;
}


function cleanParam(thisParam) {
    var paramArray = thisParam.split('/');
    return paramArray[paramArray.length - 1];
}