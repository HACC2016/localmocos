module.exports = function(express, app, path, bodyParser, querystring, db) {
    var router = express.Router();

    var testJson = {
        "name": "Product",
        "response": "Ok"
    };

    var Type = db.Type;

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
      db.VendorInfo.findAll({
        include: [
          {
            model: db.Certification,
            required: true
          }
        ]
      })
      .then((stuff) => {
        // return res.json(stuff);
        res.render('vendorForm',{
            vendorInfo: {
          }
        });
      })
    });

    app.post('/seller/new', function(req, res) {
      res.render('vendorForm', {
          methodType: 'POST',
          actionType: '/seller/new',
          formTitle: 'Create New Seller'
      });
    });

    app.get(/seller\/\d+\/edit$/, function(req, res) {
        /* */
        db.VendorInfo.findOne({
            where: {
                id: cleanParamMiddle(req.url,2)
            }
        }).then(function (data) {
            res.render('editVendorForm', {
                methodType: 'GET',
                actionType: '/seller/{id}/edit',
                formTitle: 'Edit Seller',
                vendorInfo: {
                    name: data.user_id,
                    dba: data.dba,
                    address1: data.address1,
                    address2: data.address2,
                    business_ph: data.business_ph,
                    sales_ph: data.sales_ph,
                    website: data.website,
                    email: data.email
                }
            });
        });
           /* } */
       /* testJson.name = "Form to Edit Seller id=" + cleanParamMiddle(req.url, 2);
        res.json(testJson); */
    });

    app.put(/seller\/\d+\/edit$/, function(req, res) {
        /* */
                res.render('editVendorForm', {
                    methodType: 'PUT',
                    actionType: '/seller/{id}',
                    formTitle: 'Edit Seller'
                });
           /* } */
        testJson.name = "Edit Seller id=" + cleanParamMiddle(req.url, 2);
        res.json(testJson);
    });



    app.get(/seller\/\d+$/, function(req, res) {
        /* */
                res.render('vendorEditForm', {
                    methodType: 'GET',
                    actionType: '/seller/{id}',
                    formTitle: 'Edit Seller'
                });
           /* } */
        testJson.name = "View Seller id=" + cleanParamMiddle(req.url, 2);
        res.json(testJson);
    });

    ////// testing vendor view /////
    app.get('/seller/view', function (req, res) {
        res.render('vendorDashboard');
    });

    return router;
}


function cleanParamMiddle(thisParam, index) {
    var paramArray = thisParam.split('/');
    return paramArray[index];
}