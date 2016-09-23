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
    hs: DataTypes.TEXT,
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
      },
      getTypes: function (product_id) {
        var typeQuery = "SELECT products.id, products.name, product_info_id, specific_type, type, product_types.id as product_type_id FROM products JOIN product_infos ON products.product_info_id=product_infos.id JOIN product_types ON product_types.id=product_infos.product_type_id WHERE products.id=" + product_id + ";";
        return sequelize.query(typeQuery, {
          type: sequelize.QueryTypes.SELECT
        });
      }
    }
  });
  return Product;
};