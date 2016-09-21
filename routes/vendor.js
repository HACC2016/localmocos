module.exports = function(express, app, path, bodyParser, querystring, db) {
    var router = express.Router();

    var testJson = {
        "name": "Product",
        "response": "Ok"
    };
    var businessType;
    var services;
    var markets;
    var certs;

    db.Type.findAll({
    })
    .then((data) => {
      businessType = JSON.parse(JSON.stringify(data));
    });

    db.Service.findAll({
    })
    .then((data) => {
      services = JSON.parse(JSON.stringify(data));
    })

    db.Market.findAll({
    })
    .then((data) => {
      markets = JSON.parse(JSON.stringify(data));
    })

    db.Certification.findAll({
    })
    .then((data) => {
      certs = JSON.parse(JSON.stringify(data));
    })

    /*************
  1. Create new Vendor
  2. Edit Vendor info
  3. Delete Vendor(Inactive)

  4. Add Product
  5. Delete Product(Inactive)
  6. Edit Product
  7. View Products

  **************/


    /**** New Vendor Form *****/

    app.get('/vendor/new', function(req, res) {
      res.render('vendorForm',{
          vendor: {},
          businessType: businessType,
          services: services,
          markets: markets,
          certs: certs,
          // zipcode: zipcode
          //// currently undefined ////
      });
    });

    app.post('/vendor', function(req, res, next) {
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
      })
      // // .then(() => {
      //   VendorInfo.create({
      //     company_name: locals.companyName,
      //     dba: locals.dba,
      //     bus_reg_num: locals.regNum,
      //     address1: locals.addressOne,
      //     address2: locals.addressTwo,
      //   })
      // })
    });

    app.get(/vendor\/\d+\/edit$/, function(req, res) {
      var vendorId = cleanParamMiddle(req.url, 2);
      db.VendorInfo.findById(vendorId)
      .then((data) => {
        var vendor = JSON.parse(JSON.stringify(data));
        console.log(vendor);
        res.render('vendorForm',{
          vendor: vendor,
          businessType: businessType,
          services: services,
          markets: markets,
          certs: certs,
          zipcode: zipcode
        });
      })

           /* } */
        // testJson.name = "Edit Vendor id=" + cleanParamMiddle(req.url, 2);
        // res.json(testJson);
    });



    app.get(/vendor\/\d+$/, function(req, res) {
        // /* */
        //         res.render('vendorEditForm', {
        //             methodType: 'GET',
        //             actionType: '/vendor/{id}',
        //             formTitle: 'Edit Vendor'
        //         });
        //    /* } */
        // testJson.name = "View Vendor id=" + cleanParamMiddle(req.url, 2);
        // res.json(testJson);
      db.VendorInfo.findOne({
        where: {id: cleanParamMiddle(req.url, 2)}
      })
      .then(function (vendorObject) {
        var vendor = vendorObject;
        db.Product.findAll({
          where: {vendor_info_id: cleanParamMiddle(req.url, 2)}
        })
        .then(function(productArray){
        res.render('vendor', {subtitle: vendor.dba, image: vendor.image, vendor: vendor.dba, address: vendor.address1, phone: vendor.business_ph, email: vendor.email, website: vendor.website, description: vendor.business_description, products: productArray})
        });
      });
    });

    return router;
}


function cleanParamMiddle(thisParam, index) {
    var paramArray = thisParam.split('/');
    return paramArray[index];
}