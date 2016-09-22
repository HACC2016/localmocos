module.exports = function(express, app, path, bodyParser, querystring, db) {
    var router = express.Router();

    var testJson = {
        "name": "Product",
        "response": "Ok"
    };

    var VendorInfo = db.VendorInfo;
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
          subtitle: "Vendor Registration",
          formTitle: "Vendor Registration",
          vendor: {},
          businessType: businessType,
          services: services,
          markets: markets,
          certs: certs
      });
    });

    app.post('/vendor', function(req, res, next) {
      console.log(req.body);
      db.Zipcode.findOne({
        where: {
          city: req.body.city[0].toUpperCase() + req.body.city.slice(1),
          island: req.body.island[0].toUpperCase() + req.body.island.slice(1),
          zip: req.body.zipcode
        }
      })
      .then((data) => {
        if(data) {
          var zipId = data.dataValues.id; // zip_id
          VendorInfo.create({
            user_id: 1,
            image: req.body.image,
            company_name: req.body.company_name,
            business_reg_num: req.body.business_reg_num,
            business_description: req.body.description,
            dba: req.body.dba,
            address1: req.body.address1,
            address2: req.body.address2,
            business_ph: req.body.business_ph,
            business_ph2: req.body.phoneTwo,
            sales_ph: req.body.sales_ph,
            website: req.body.website,
            email: req.body.email,
            zip_id: zipId,
            isActive: true,
          })
          .then((vendor) => {
            console.log(vendor);
            console.log(vendor.id);
          });
        } else {
          res.send('City, Island, and Zipcode do not match.');
        }
      });
    });

    app.get(/vendor\/\d+\/edit$/, function(req, res) {
      var vendorId = cleanParamMiddle(req.url, 2);
      console.log(vendorId);
      VendorInfo.findById(vendorId, {
        include: [
          {
            model: db.Type,
            where: {}
          },
          {
            model: db.Service,
            where: {}
          },
          {
            model: db.Market,
            where: {}
          },
          {
            model: db.Certification,
            where: {}
          },
          {
            model: db.Zipcode,
            where: {}
          }
        ]
      })
      .then(function (data) {
        var vendor = JSON.parse(JSON.stringify(data));
        console.log(vendor);
        var vendorLocation = vendor.Zipcode;
        console.log(vendorLocation);
        return res.render('editVendorForm',{
          formTitle: "Vendor Update",
          id: vendorId,
          vendor: vendor,
          businessType: businessType,
          services: services,
          markets: markets,
          certs: certs,
          zip: vendorLocation.zip,
          city: vendorLocation.city,
          island: vendorLocation.island
        });
      })
    }); 
    app.put(/vendor\/\d+$/, function(req, res) {
      var vendorId = cleanParamMiddle(req.url, 2);
      var locals = req.body;
      console.log(vendorId);
      return db.Zipcode.findOne({
        where: {
          city: locals.city[0].toUpperCase() + locals.city.slice(1),
          island: locals.island[0].toUpperCase() + locals.island.slice(1),
          zip: locals.zipcode
        }
      })
      .then(function (data) {
        if(data) {
          var zipId = data.dataValues.id;
          return VendorInfo
            .update(
              {
                image: locals.image,
                company_name: locals.company_name,
                business_reg_num: locals.business_reg_num,
                business_description: locals.description,
                dba: locals.dba,
                address1: locals.address1,
                address2: locals.address2,
                business_ph: locals.business_ph,
                business_ph2: locals.phoneTwo,
                sales_ph: locals.sales_ph,
                website: locals.website,
                email: locals.email,
                zip_id: zipId
              },
              {
                where: {
                  id: vendorId
                }
              }
            )
            .then(function () {
              return VendorInfo.findById(vendorId)
              .then(function(vendor) {
                db.Product.findAll({
                  where: {
                    vendor_info_id: vendorId
                  }
                })
                .then(function(productArray) {
                  res.render('vendor', {
                    subtitle: vendor.dba,
                    image: vendor.image,
                    vendor: vendor.dba,
                    address: vendor.address1,
                    phone: vendor.business_ph,
                    email: vendor.email,
                    website: vendor.website,
                    description: vendor.business_description,
                    products: productArray
                  });
                });
              });
            });
        } else {
          return res.send('City, Island, and Zipcode do not match.');
        }
      })
    });

    app.get(/vendor\/\d+$/, function(req, res) {
      VendorInfo.findOne({
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