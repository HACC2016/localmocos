'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    productType_id: DataTypes.INTEGER,
    venderInfo_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    qty: DataTypes.INTEGER,
    cert_id: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Product.belongsTo(models.VenderInfo);
        models.Product.belongsTo(models.ProductInfo);



      // ***** Add Image Models ************
      //   models.Product.hasMany(models.Image);
      // ***********************************
      //
      //
        models.Product.hasMany(models.Certification);
      }
    }
  });
  return Product;
};