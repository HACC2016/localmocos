'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    product_info_id: DataTypes.INTEGER,
    vendor_info_id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    qty: DataTypes.INTEGER,
    image: DataTypes.TEXT,
    isActive: DataTypes.BOOLEAN
  }, {
    tableName: 'products',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Product.belongsTo(models.VendorInfo, {
          foreignKey: 'vendor_info_id',
          targetKey: 'id',
        });
        models.Product.belongsTo(models.ProductInfo, {
          foreignKey: 'product_info_id',
          targetKey: 'id'
        });
      }
    }
  });
  return Product;
};