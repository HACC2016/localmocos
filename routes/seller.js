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
      db.User.findAll({
        include: [
          {
            model: db.VendorInfo,
            required: true
          }
        ]
      })
      .then((stuff) => {
        // db.ProductType.findById(stuff[0].dataValues.ProductInfo.dataValues.product_type_id)
        // .then((data) => {
          // return res.json(stuff);
        // });
        res.render('vendorForm',{
            vendor:{}
        });
      });
    });

    app.post('/seller/new', function(req, res) {
      res.render('vendorForm', {
          methodType: 'POST',
          actionType: '/seller/new',
          formTitle: 'Create New Seller'
      });
    });

    app.get(/seller\/\d+\/edit$/, function(req, res) {
      // console.log(db.Type.findAll());
      // 
    
    // db.Type.findAll({})
    // .then((data) => {
    //   console.log(data);
    //   res.render('editVendorForm', {
    //                 methodType: 'PUT',
    //                 actionType: '/seller/{id}',
    //                 formTitle: 'Edit Seller'
    //                  }
    //             });
    // });

    db.VendorInfo.findOne({
        where: {
            id: cleanParamMiddle(req.url,2)
        }
    })
    .then((data) => {
      console.log(data);
      res.render('editVendorForm', {
                    methodType: 'PUT',
                    actionType: '/seller/{id}',
                    formTitle: 'Edit Seller',
                    vendor: {
                        user: data.user_id,
                        company: data.company_name,
                        business_reg_name: data.business_reg_name,
                        business_description: data.business_description,
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
        // testJson.name = "Edit Seller id=" + cleanParamMiddle(req.url, 2);
        // res.json(testJson);
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

    return router;
}


function cleanParamMiddle(thisParam, index) {
    var paramArray = thisParam.split('/');
    return paramArray[index];
}