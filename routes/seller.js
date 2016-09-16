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
      // db.VendorInfo.findAll({
      //   include: [
      //     {
      //       model: db.Service,
      //       required: true
      //     }
      //   ]
      // })
      // .then((stuff) => {
      //   return res.json(stuff);
      // })
      return res.render('vendorForm');
    });

    app.post('/seller', function(req, res, next) {
      var locals = req.body;
      var city = '';
      var island = '';
      db.Zipcode.findAll({
        where: {
          zip: req.body.zip
        }
      })
      .then((data) => {
        var dataValues = data[0].dataValues;
        city = dataValues.city;
        island = dataValues.island;
        if (city === locals.city && island === locals.island) {
          res.send('OK!');
        } else {
          console.log(city, locals.city, island, locals.island)
          throw new TypeError('City and Island do not match')
        }
        console.log(city, island);
      })
      // .then(() => {
      //   VendorInfo.create({
      //     company_name: locals.companyName,
      //     dba: locals.dba,
      //     bus_reg_num: locals.regNum,
      //     address1: locals.addressOne,
      //     address2: locals.addressTwo,
      //   })
      // })
    });

    app.get(/seller\/\d+\/edit$/, function(req, res) {
        /* */
                res.render('editVendorForm', {
                    methodType: 'GET',
                    actionType: '/seller/{id}/edit',
                    formTitle: 'Edit Seller'
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

    return router;
}


function cleanParamMiddle(thisParam, index) {
    var paramArray = thisParam.split('/');
    return paramArray[index];
}