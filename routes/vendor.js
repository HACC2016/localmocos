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
      var locals = req.body;
      return db.Zipcode.findOne({
        where: {
          city: locals.city[0].toUpperCase() + locals.city.slice(1),
          island: locals.island[0].toUpperCase() + locals.island.slice(1),
          zip: locals.zipcode
        }
      })
      .then((data) => {
        console.log(locals);
        if(data) {
          var zipId = data.dataValues.id; // zip_id
          return VendorInfo.create({
            user_id: 1,
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
            zip_id: zipId,
            isActive: true,
          })
          .then(function(vendor) {
            return db.Product.findAll({
              where: {
                vendor_info_id: vendor.user_id
              }
            })
            .then(function(productArray) {
              return Promise.all(
                [].concat(
                  locals.market
                    .filter(function (id) {
                      return id;
                    })
                    .map(function (id, index, array) {
                      var marketId = parseInt(id);
                      var otherMarket = null;
                      if (isNaN(marketId)) {
                        otherMarket = id;
                        marketId = 7;
                      }
                      return db.VendorInfoMarket.create({
                        vendor_info_id: vendor.id,
                        market_id: marketId,
                        other_market: otherMarket
                      });
                    })
                )
              )
              .catch(function (err) {
                console.log(err);
              })
              .then(function (markets) {
                return res.render('vendor', {
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
            })
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
        var vendorLocation = vendor.Zipcode;
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
      console.log(locals);
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