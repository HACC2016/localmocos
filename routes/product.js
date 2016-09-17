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

    var productType;

    db.ProductType.findAll({
    })
    .then((data) => {
        productType = JSON.parse(JSON.stringify(data));
    });

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
            // methodType: 'POST',
            // actionType: '/product/new',
            // formTitle: 'Create New Product',
            product: {},
            productType: productType
        });
    });

    app.post('/product', function(req, res, next) {
        // testJson.name = "Product New " + cleanParam(req.url);
        // res.json([testJson]);
        console.log(req.body,"blah");
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            product_info_id: req.body.product_info_id,
            vendor_info_id: 1,
            price: req.body.price,
            qty: req.body.qty,
            image: req.body.image,
            isActive: 1
        })
        .then(function (product) {
            res.render('product', {product: product});
        });
    });

    app.get(/product\/\d+\/edit$/, function(req, res, next) {
       /* testJson.name = "Product Form for id=" + cleanParam(req.url);
        res.json([testJson]); */

        console.log(cleanParamMiddle(req.url,2));
        db.Product.findOne({
            where: {
                id: cleanParamMiddle(req.url,2)
            }
        }).then(function (data) {
            res.render('editProductForm', {
                methodType: 'POST',
                actionType: '/product/new',
                formTitle: 'Edit New Product',
                productsInfo: productsInfo,
                product: {
                    name: data.name,
                    description: data.description,
                    price: data.price,
                    qty: data.qty,
                    image: data.image
                }
            });
        })
    });

    app.put(/product\/\d+\/edit$/, function(req, res, next) {
        // testJson.name = "Product Edit with id=" + cleanParam(req.url);
        // res.json([testJson]);
        db.Product.findOne({
            where: {
                id: cleanParamMiddle(req.url,2)
            }
        })
    });

    app.put(/product\/\d+\/delete$/, function(req, res, next) {
        testJson.name = "Product pseudo Delete with id=" + cleanParam(req.url);
        res.json([testJson]);
    });


    return router;
}


function cleanParamMiddle(thisParam, index) {
    var paramArray = thisParam.split('/');
    return paramArray[index];
}

function cleanParam(thisParam) {
    var paramArray = thisParam.split('/');
    return paramArray[paramArray.length - 1];
}