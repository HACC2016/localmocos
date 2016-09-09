module.exports = function(express, app, path, bodyParser, querystring) {
    var router = express.Router();

    var testJson = {
        "name": "Product",
        "response": "Ok"
    };


    /*************
  1. Create new Seller
  2. Edit Seller info
  3. Delete Seller(Inactive)

  4. Add Product
  5. Delete Product(Inactive)
  6. Edit Product
  7. View Products

  **************/


    /**** New Seller Form *****/

    app.get('/seller/new', function(req, res) {
        /*
                res.render('sellerForm', {
                    methodType: 'POST',
                    actionType: '/seller/new',
                    formTitle: 'Create New Seller'
                });
            }
   */
        testJson.name = "Form to Create new Seller";
        res.json(testJson);
    });

    app.post('/seller/new', function(req, res) {
        testJson.name = "Created new Seller";
        res.json(testJson);
    });

    app.get(/seller\/\d+\/edit$/, function(req, res) {
        /*
                res.render('sellerEditForm', {
                    methodType: 'PUT',
                    actionType: '/seller/{id}/edit',
                    formTitle: 'Edit Seller'
                });
            }
   */
        testJson.name = "Form to Edit Seller id=" + cleanParamMiddle(req.url, 2);
        res.json(testJson);
    });

    app.put(/seller\/\d+\/edit$/, function(req, res) {
        /*
                res.render('sellerEditForm', {
                    methodType: 'GET',
                    actionType: '/seller/{id}',
                    formTitle: 'Edit Seller'
                });
            }
   */
        testJson.name = "Edit Seller id=" + cleanParamMiddle(req.url, 2);
        res.json(testJson);
    });



    app.get(/seller\/\d+$/, function(req, res) {
        /*
                res.render('sellerEditForm', {
                    methodType: 'GET',
                    actionType: '/seller/{id}',
                    formTitle: 'Edit Seller'
                });
            }
   */
        testJson.name = "View Seller id=" + cleanParamMiddle(req.url, 2);
        res.json(testJson);
    });

    return router;
}


function cleanParamMiddle(thisParam, index) {
    var paramArray = thisParam.split('/');
    return paramArray[index];
}